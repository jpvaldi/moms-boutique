"use client";

import React, { useState } from "react";
import CategoryNav from "@/components/storefront/CategoryNav";

// 1. DATA MODEL: Synchronized with CategoryNav slugs
const INITIAL_INVENTORY = [
  // This item is placed at Index 0. It will ALWAYS show up first on home load!
  {
    id: "product-chaqueta",
    title: "Chaqueta Cuerina William Rast",
    category: "trending", // Fills the 'Trending Now' button
    price: 89.90,
    images: [
      "/images/mujer-chaqueta-cuerina-williamrast.png" // Primary Cover Image
    ]
  },
  {
    id: "product-blusa",
    title: "Blusa Sonoma",
    category: "new-arrivals", // Fills the 'New Arrivals' button
    price: 45.00,
    images: [
      "/images/blusa-sonoma-01.png", // Primary Cover Image
      "/images/blusa-sonoma-02.png"  // Multi-angle secondary asset
    ]
  },
  {
    id: "product-vestido",
    title: "Vestido Mujer Elegante",
    category: "signature-sets", // Fills the 'Signature Sets' button
    price: 120.00,
    images: [
      "/images/mujer-vestido-01.png", // Primary Cover Image
      "/images/mujer-vestido-02.png", // Multi-angle secondary asset
      "/images/mujer-vestido-03.png"  // Multi-angle tertiary asset
    ]
  }
];

export default function Home() {
  // Track active collection navigation state
  const [activeCategory, setActiveCategory] = useState("all");

  // Filtering Engine Mechanism
  const filteredInventory = INITIAL_INVENTORY.filter((product) => {
    if (activeCategory === "all") return true;
    return product.category === activeCategory;
  });

  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-8 md:px-8 max-w-7xl mx-auto">
      {/* MOMS-BOUTIQUE Branding Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
          MOMS-BOUTIQUE
        </h1>
        <p className="mt-3 text-lg text-neutral-500">
          Luxury Boutique Storefront Collection
        </p>
      </header>

      {/* Category Navigation Leaf Node Mount */}
      <div className="mb-8">
        <CategoryNav 
          onCategoryChange={(slug) => setActiveCategory(slug)} 
          initialActiveSlug="all"
        />
      </div>

      {/* Dynamic Storefront Interactive Product Grid */}
      {filteredInventory.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-2xl shadow-sm border border-neutral-100">
          <p className="text-neutral-400 font-medium text-lg">
            No products found in this category yet.
          </p>
          <p className="text-sm text-neutral-400 mt-1">
            Stay tuned! More luxury arrivals are uploading soon.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {filteredInventory.map((product) => (
            <div key={product.id} className="group relative bg-white border border-neutral-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
              
              {/* Image Container with Array-Safe Index Filtering */}
              <div className="w-full h-80 bg-neutral-200 rounded-xl overflow-hidden aspect-w-1 aspect-h-1 group-hover:opacity-90 transition-opacity">
                <img
                  src={product.images[0]} // Always displays the primary array item cover first
                  alt={product.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Product Information Cards */}
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="text-base font-semibold text-neutral-800 tracking-tight">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-neutral-400 tracking-wider uppercase">
                    {product.category.replace("-", " ")}
                  </p>
                </div>
                <p className="text-base font-bold text-neutral-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              {/* Secondary View Badge Trigger indicator */}
              {product.images.length > 1 && (
                <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-neutral-700 tracking-wider shadow-sm uppercase">
                  +{product.images.length - 1} Views Available
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
