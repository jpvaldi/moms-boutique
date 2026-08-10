"use client"; // Crucial for Next.js interactive buttons!
import React, { useState } from 'react';

export default function Storefront() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Real inventory items parsed from your SumUp screenshots
        const products = [
    {
      id: "mujer-blusa-sonoma",
      name: "Mujer Blusa Sonoma",
      brand: "Sonoma",
      category: "Mujer",
      condition: "Excelente Estado",
      price: 15000,
      images: ["blusa-sonoma-01.png"
      ]
    },
    {
      id: "mujer-vestido-elegante",
      name: "Mujer Vestido Elegante",
      category: "Mujer",
      condition: "Como Nuevo",
      price: 22000,
      images: [
        "vestido_elegante_front.jpg",
        "vestido_elegante_back.jpg",
        "vestido_elegante_detail.jpg"
      ]
    },
    {
      id: "mujer-chaqueta-cuerina",
      name: "Mujer Chaqueta Cuerina Black",
      category: "Mujer",
      condition: "Excelente Estado",
      price: 35000,
      images: [
        "chaqueta_cuerina_front.jpg"
      ]
    }
  ];
  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen pb-12 font-sans text-slate-800">
      {/* --- STICKY NAVBAR --- */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 px-6 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-xl font-black tracking-tight text-slate-900">
            BOUTIQUE DE <span className="text-indigo-600">MAMÁ</span>
          </span>
          <div className="bg-slate-100 text-slate-700 font-bold text-xs px-3 py-1.5 rounded-full">
            🇨🇱 CLP
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        {/* --- SWIPEABLE CATEGORY FILTERS --- */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
          {['Todos', 'Mujer', 'Niña', 'Niño', 'Hombre'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- COUNT BAR --- */}
        <p className="text-xs font-bold text-slate-400 mt-4 uppercase tracking-wider">
          Mostrando {filteredProducts.length} prendas encontradas
        </p>

        {/* --- PREMIUM RESPONSIVE PRODUCT GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
              <div>
                {/* Photo Display */}
                        <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden">
          <img
            src={`ldkbbzdvtdsmbxfypwm.supabase.co/storage/v1/object/public/product-images/${product.images}`}
            alt={product.name || "Product image"}
            className="w-full h-full object-cover"
          />
                  <span className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded-md font-bold tracking-wide">
                    {product.condition}
                  </span>
                </div>
                {/* Info Text */}
                <div className="p-4">
                  <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-widest block mb-1">
                    {product.brand}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-700 line-clamp-2 leading-snug h-10">
                    {product.name}
                  </h3>
                </div>
              </div>
              
              {/* Bottom Price Container */}
              <div className="p-4 pt-0">
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-lg font-black text-slate-900">{product.price}</span>
                  <button className="bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors">
                    Ver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
