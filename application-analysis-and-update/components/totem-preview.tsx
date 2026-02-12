"use client"

import { memo } from "react"
import { ShoppingCart, User, Star } from "lucide-react"

interface TotemPreviewProps {
  colors: Record<string, string>
}

export const TotemPreview = memo(({ colors }: TotemPreviewProps) => {
  const categories = ["Hambúrgueres", "Pizzas", "Bebidas", "Sobremesas"]
  const products = [
    { name: "X-Burger Especial", price: "R$ 25,90", image: "🍔" },
    { name: "Pizza Margherita", price: "R$ 45,00", image: "🍕" },
    { name: "Refrigerante", price: "R$ 8,00", image: "🥤" },
  ]

  return (
    <div className="w-full aspect-[9/16] bg-neutral-100 rounded-xl overflow-hidden shadow-2xl border-4 border-neutral-300">
      {/* Fidelity Bar */}
      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{
          backgroundColor: colors["--fidelity-bar-bg-color"],
          color: colors["--fidelity-bar-font-color"],
        }}
      >
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span className="text-xs font-medium">Olá, Cliente!</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-current" />
          <span className="text-xs font-bold">250 pts</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex h-[calc(100%-8rem)]">
        {/* Sidebar Categories */}
        <div className="w-24 flex flex-col gap-1 p-2" style={{ backgroundColor: colors["--lateral-bar-color"] }}>
          {categories.map((category, index) => (
            <button
              key={category}
              className="rounded-lg py-3 px-2 text-center transition-all"
              style={{
                backgroundColor: index === 0 ? colors["--category-menu-list-selected-bg-var"] : "transparent",
                color: index === 0 ? colors["--secondary-auxiliary-color"] : colors["--category-menu-list-font-var"],
              }}
            >
              <span className="text-[10px] font-medium leading-tight">{category}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="flex-1 p-3 overflow-y-auto bg-neutral-50">
          <h2 className="text-sm font-bold mb-3" style={{ color: colors["--primary-color"] }}>
            Hambúrgueres
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-lg p-3 shadow-sm border border-neutral-200"
                style={{ backgroundColor: colors["--product-card-background-color"] }}
              >
                <div className="text-3xl mb-2 text-center">{product.image}</div>
                <h3 className="text-[10px] font-semibold text-neutral-800 mb-1 line-clamp-2">{product.name}</h3>
                <p className="text-xs font-bold" style={{ color: colors["--primary-color"] }}>
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Cart Button */}
      <div className="h-16 px-4 py-3 border-t border-neutral-200 bg-white">
        <button
          className="w-full h-full rounded-lg flex items-center justify-between px-4 font-bold text-sm shadow-md transition-transform active:scale-95"
          style={{
            backgroundColor: colors["--primary-color"],
            color: colors["--primary-auxiliary-color"],
          }}
        >
          <span>Ver Carrinho</span>
          <div className="flex items-center gap-2">
            <span>R$ 0,00</span>
            <ShoppingCart className="h-4 w-4" />
          </div>
        </button>
      </div>
    </div>
  )
})

TotemPreview.displayName = "TotemPreview"
