"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";

type Products = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

export default function StackedProductCards() {
  const mockedProducts: Products[] = [
    {
      id: "1",
      name: "Wireless Headphones",
      description: "Noise-cancelling headphones.",
      image:
        "https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&fit=crop&w=800&q=80",
      price: 45000,
    },
    {
      id: "2",
      name: "Smartwatch Pro X",
      description: "Track your fitness, health, and style.",
      image:
        "https://images.unsplash.com/photo-1606813902919-dc3d9a5b0c1b?auto=format&fit=crop&w=800&q=80",
      price: 75000,
    },
    {
      id: "3",
      name: "Leather Backpack",
      description: "Elegant, durable, and built for everyday adventures.",
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      price: 35000,
    },
    {
      id: "4",
      name: "Bluetooth Speaker",
      description: "Powerful, portable sound with deep bass.",
      image:
        "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?auto=format&fit=crop&w=800&q=80",
      price: 28000,
    },
  ];

  const [visibleCards, setVisibleCards] = useState<Products[]>([]);
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Motion values for max 3 cards
  const motionValues = Array.from({ length: 3 }).map(() => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-50, 50], [10, -10]);
    const rotateY = useTransform(x, [-50, 50], [-10, 10]);
    return { x, y, rotateX, rotateY };
  });

  // Adjust number of cards based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Initialize visible cards
  useEffect(() => {
    setVisibleCards(mockedProducts.slice(0, cardsToShow));
  }, [cardsToShow]);

  // Auto shuffle
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCards((prev) => {
        const nextIndex = (index + 1) % mockedProducts.length;
        setIndex(nextIndex);
        const nextProduct = mockedProducts[nextIndex];
        const filteredPrev = prev
          .slice(1)
          .filter((p) => p.id !== nextProduct.id);
        return [...filteredPrev, nextProduct].slice(-cardsToShow);
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [index, cardsToShow]);

  return (
    <div className="relative flex justify-center md:justify-end items-center h-[480px] w-full overflow-visible">
      <AnimatePresence initial={false}>
        {visibleCards.map((product, i) => {
          const isTopCard = i === visibleCards.length - 1;
          const tilt = motionValues[i]; // safe, always exists

          return (
            <motion.div
              key={`${product.id}-${i}`}
              className="absolute w-[280px] md:w-[300px] lg:w-[320px] h-[400px] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 cursor-pointer"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: i * 25 + (hovered && !isTopCard ? 10 : 0),
                x: i * -35,
                scale: isTopCard && hovered === i ? 1.05 : 1 - i * 0.05,
                zIndex: visibleCards.length - i,
              }}
              exit={{
                opacity: 0,
                y: -50,
                scale: 0.9,
                transition: { duration: 0.6 },
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
              }}
              onMouseMove={(e) => {
                if (isTopCard) {
                  const bounds = (
                    e.currentTarget as HTMLDivElement
                  ).getBoundingClientRect();
                  const posX = e.clientX - bounds.left - bounds.width / 2;
                  const posY = e.clientY - bounds.top - bounds.height / 2;
                  tilt.x.set(posX / 10);
                  tilt.y.set(posY / 10);
                }
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => {
                setHovered(null);
                tilt.x.set(0);
                tilt.y.set(0);
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="object-cover w-full h-[220px]"
              />
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
                  {product.description}
                </p>
                <p className="font-bold text-primary text-lg">
                  ₦{product.price.toLocaleString()}
                </p>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
