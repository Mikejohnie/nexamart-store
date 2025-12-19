"use client";

import { Category } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

type Props = { categories: Category[] };

export default function CategoryShowcase({ categories }: Props) {
  if (!categories?.length) {
    return (
      <section className="bg-card border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-2">Shop by Category</h2>
        <p className="text-muted-foreground">No categories available</p>
      </section>
    );
  }

  return (
    <section className="bg-card border rounded-xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Shop by Category</h2>
        <Link
          href="/categories"
          className="text-sm text-[var(--brand-blue)] hover:underline"
        >
          View all
        </Link>
      </div>

      {/* CATEGORY GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <HoverCard key={cat.id} openDelay={100}>
            <HoverCardTrigger asChild>
              <Link
                href={`/category/${cat.slug}`}
                className="
                  group relative flex flex-col items-center gap-3
                  rounded-xl border bg-background p-4
                  transition-all duration-200
                  hover:shadow-lg hover:-translate-y-0.5
                "
              >
                {/* Icon */}
                <div
                  className="
                  flex items-center justify-center
                  w-14 h-14 rounded-full
                  bg-[var(--brand-blue-light)]
                  group-hover:bg-[var(--brand-blue)]
                  transition
                "
                >
                  {cat.iconImage && (
                    <Image
                      src={cat.iconImage}
                      alt={cat.name}
                      width={28}
                      height={28}
                      className="group-hover:invert"
                    />
                  )}
                </div>

                {/* Name */}
                <span className="text-sm font-medium text-center">
                  {cat.name}
                </span>
              </Link>
            </HoverCardTrigger>

            {/* MEGA PANEL */}
            {cat.children?.length ? (
              <HoverCardContent
                side="bottom"
                align="start"
                className="
                  w-[min(800px,90vw)]
                  rounded-2xl border bg-background p-6
                  shadow-xl grid grid-cols-2 sm:grid-cols-3 gap-6
                "
              >
                {cat.children.map((sub) => (
                  <div key={sub.id} className="space-y-2">
                    <Link
                      href={`/category/${sub.slug}`}
                      className="font-semibold text-sm hover:text-[var(--brand-blue)]"
                    >
                      {sub.name}
                    </Link>

                    {sub.children?.length ? (
                      <ul className="space-y-1">
                        {sub.children.map((child) => (
                          <li key={child.id}>
                            <Link
                              href={`/category/${child.slug}`}
                              className="text-sm text-muted-foreground hover:text-[var(--brand-blue)]"
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </HoverCardContent>
            ) : null}
          </HoverCard>
        ))}
      </div>
    </section>
  );
}
