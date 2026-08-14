"use client";

import React, { useState } from "react";
import { Sparkles, Layers, Gem, Baby, Flame, Heart } from "lucide-react";

// Standard dynamic configuration array
const CATEGORIES = [
  { id: "all", name: "All Collection", slug: "all", icon: Layers },
  { id: "new", name: "New Arrivals", slug: "new-arrivals", icon: Sparkles, isNew: true },
  { id: "signature", name: "Signature Sets", slug: "signature-sets", icon: Gem, count: 14 },
  { id: "essentials", name: "Mom Essentials", slug: "mom-essentials", icon: Heart, count: 28 },
  { id: "babies", name: "Little Ones", slug: "little-ones", icon: Baby, count: 19 },
  { id: "trending", name: "Trending Now", slug: "trending", icon: Flame },
];

// CRITICAL: We use 'export default function' explicitly here so Next.js can resolve it as a function!
export default function CategoryNav({ onCategoryChange, initialActiveSlug = "all" }) {
  const [activeSlug, setActiveSlug] = useState(initialActiveSlug);

  const handleSelect = (slug) => {
    setActiveSlug(slug);
    if (onCategoryChange) {
      onCategoryChange(slug);
    }
  };

  return (
    <nav className="w-full border-b border-purple-100/60 bg-white/80 backdrop-blur-md sticky top-0 z-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-4 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          
          <div className="flex space-x-2 md:space-x-4 min-w-max">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              const isActive = activeSlug === category.slug;

              return (
                <button
                  key={category.id}
                  onClick={() => handleSelect(category.slug)}
                  className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out select-none outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 ${
                    isActive
                      ? "bg-purple-950 text-white shadow-md shadow-purple-950/10 scale-105"
                      : "bg-purple-50/50 text-purple-900/70 hover:bg-purple-50 hover:text-purple-950 hover:scale-102"
                  }`}
                >
                  <Icon 
                    className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-12 ${
                      isActive ? "text-purple-300" : "text-purple-600/80 group-hover:text-purple-900"
                    }`} 
                  />

                  <span>{category.name}</span>

                  {category.count !== undefined && (
                    <span 
                      className={`text-xs px-2 py-0.5 rounded-full transition-colors duration-300 ${
                        isActive 
                          ? "bg-white/20 text-purple-100" 
                          : "bg-purple-100/80 text-purple-950 group-hover:bg-purple-200"
                      }`}
                    >
                      {category.count}
                    </span>
                  )}

                  {category.isNew && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                  )}

                  {isActive && (
                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-purple-950 rounded-t-full hidden md:block" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center text-xs text-purple-950/40 font-mono tracking-wider uppercase pl-6 border-l border-purple-100">
            Active view // {activeSlug}
          </div>

        </div>
      </div>
    </nav>
  );
}
