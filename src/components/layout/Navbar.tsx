"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function SiteNavbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          Nexamart
        </Link>

        {/* Center Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg mx-6">
          <form
            onSubmit={handleSearch}
            className="w-full flex items-center gap-2"
          >
            <Input
              type="search"
              placeholder="Search for products, brands, and more..."
              className="w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" size="icon" variant="secondary">
              <Search className="w-4 h-4" />
            </Button>
          </form>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-5">
          <nav className="flex items-center gap-4 text-sm font-medium">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/shop" className="hover:text-primary transition-colors">
              Shop
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3 ml-4">
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2 ">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-8">
              <VisuallyHidden>
                <DialogTitle>Mobile Menu</DialogTitle>
              </VisuallyHidden>
              <div className="py-4 space-y-6">
                {/* Mobile Search */}
                <form
                  onSubmit={handleSearch}
                  className="flex items-center gap-2"
                >
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit" size="icon" variant="secondary">
                    <Search className="w-4 h-4" />
                  </Button>
                </form>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-3 text-base font-medium ">
                  <Link
                    href="/"
                    className="hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/shop"
                    className="hover:text-primary transition-colors"
                  >
                    Shop
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/login"
                    className="hover:text-primary transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="hover:text-primary transition-colors"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/cart"
                    className="hover:text-primary transition-colors"
                  >
                    Cart
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
