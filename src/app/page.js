"use client";

import React, { useState } from "react";
import CategoryNav from "@/components/storefront/CategoryNav";
import { Eye } from "lucide-react";

// ==========================================
// UX CORE: LOCAL SANDBOX CATALOG ARRAY
// ==========================================
const INITIAL_INVENTORY = [
  {
    id: "prod-001",
    brand: "SONOMA",
    title: "Mujer Blusa Sonoma",
    price: 15000,
    // Maps exactly to the 'all' or 'new' category buttons
    category: "new-arrivals", 
    statusBadge: "Excelente Estado",
    imageFileName: "blusa-sonoma-01.png"
  },
  {
    id: "prod-002",
    brand: "PREMIUM SELECTION",
    title: "Mujer Vestido Elegante",
    price: 22000,
    // Maps exactly to the 'signature-sets' navigation slug
    category: "signature-sets",
    statusBadge: "Como Nuevo",
    imageFileName: "mujer-vestido-01.png"
  },
  {
    id: "prod-003",
    brand: "URBAN STYLE",
    title: "Mujer Chaqueta Cuerina Black",
    price: 35000,
    // Maps exactly to the 'trending' navigation slug
    category: "trending",
    statusBadge: "Excelente Estado",
    imageFileName: "mujer-chaqueta-cuerina-williamrast.png"
  }
];

export default function StorefrontPage() {
  // State tracking which navigation slug is actively clicked by the buyer
  const [activeCategory, setActiveCategory] = useState("all");

  // ==========================================
  // REAL-TIME MEMORY FILTER COMPUTATION LAYER
  // ==========================================
  const filteredItems = activeCategory === "all" 
    ? INITIAL_INVENTORY 
    : INITIAL_INVENTORY.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 selection:bg-purple-200">
      
      {/* LUXURIOUS BRANDING HEADER PLATFORM */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <h1 className="text-2xl font-black tracking-tight text-purple-950 font-serif uppercase">
          BOUTIQUE DE MAMÁ
        </h1>
      </header>

      {/* MOUNTING THE DYNAMIC CATEGORY SLIDER COMPONENT */}
      <CategoryNav 
        initialActiveSlug="all" 
        onCategoryChange={(slug) => setActiveCategory(slug)} 
      />

      {/* CORE PRODUCT RENDERING ENGINE */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Real-Time UX Meta Metadata Indicator */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs font-mono font-bold tracking-wider text-purple-950/40 uppercase">
            Mostrando {filteredItems.length} prendas encontradas // Canal: {activeCategory}
          </p>
        </div>

        {/* LUXURIOUS ITEM GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-purple-950/5 border border-slate-100 transition-all duration-500 ease-out"
            >
              
              {/* IMAGE HOLDER WRAPPER WITH BOUNDARY HOVER CLIPPING */}
              <div className="relative aspect-[3/4] w-full bg-slate-100 overflow-hidden">
                <img 
                  src={`/images/${item.imageFileName}`} 
                  alt={item.title}
                  // Isolation micro-hover animation scaling engine
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                />
                
                {/* Micro-Animation Translucent Overlay */}
                <div className="absolute inset-0 bg-purple-950/0 group-hover:bg-purple-950/20 transition-colors duration-500" />

                {/* PREMIUM STATUS BADGE */}
                <span className="absolute bottom-4 right-4 z-10 px-3 py-1.5 text-[11px] font-semibold font-mono tracking-wide text-white bg-purple-950/90 backdrop-blur-md rounded-md shadow-sm">
                  {item.statusBadge}
                </span>
              </div>

              {/* CARD METRICS & METADATA FEED */}
              <div className="flex flex-col flex-1 p-6 bg-white">
                <div className="flex-1">
                  <span className="text-[10px] font-bold font-mono tracking-widest text-purple-600 uppercase block mb-1">
                    {item.brand}
                  </span>
                  <h3 className="text-base font-semibold text-slate-800 tracking-tight group-hover:text-purple-950 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* METRIC PRICE & CALL-TO-ACTION ALIGNMENT */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Precio</span>
                    <span className="text-lg font-bold text-slate-900 font-mono">
                      ${item.price.toLocaleString("es-CL")}
                    </span>
                  </div>

                  <button className="flex items-center gap-2 px-4 py-2 bg-purple-950 text-white text-xs font-semibold rounded-lg hover:bg-purple-900 active:scale-95 transition-all duration-200 shadow-sm">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
