"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  colors?: string[];
  itemSize?: string[];
  category: string;
  imageUrl: string[];
};

type ProductDetailProps = {
  product: Product;
};

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [mainImage, setMainImage] = useState(product.imageUrl[0]);

  const discountedPrice = product.discount
    ? product.price - product.price * (product.discount / 100)
    : product.price;

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      {/* Image Section */}
      <div>
        <div className="w-full h-[400px] bg-gray-100 rounded-xl overflow-hidden relative">
          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Thumbnail images */}
        <div className="flex gap-3 mt-4 overflow-x-auto">
          {product.imageUrl.map((img, i) => (
            <div
              key={i}
              onClick={() => setMainImage(img)}
              className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${
                mainImage === img ? "border-blue-500" : "border-transparent"
              }`}
            >
              <Image
                src={img}
                alt={`thumb-${i}`}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>

        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          {product.discount && (
            <span className="text-gray-400 line-through">
              ${product.price.toFixed(2)}
            </span>
          )}
          <span className="text-2xl font-semibold text-blue-600">
            ${discountedPrice.toFixed(2)}
          </span>
          {product.discount && (
            <span className="text-green-600 text-sm">
              ({product.discount}% OFF)
            </span>
          )}
        </div>

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold mb-1">Available Colors:</h3>
            <div className="flex gap-2">
              {product.colors.map((color, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Sizes */}
        {product.itemSize && product.itemSize.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold mb-1">Sizes:</h3>
            <div className="flex gap-2">
              {product.itemSize.map((size, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart */}
        <Button className="w-full mt-4 py-3 text-lg rounded-xl">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
