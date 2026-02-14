"use client";
import { useState } from "react";

type ProductProps = {
  image: string;
  name: string;
  price: string;
  rating?: number;
  reviewCount?: number;
  badge?: boolean;
  badgeColor?: string;
  badgeText?: string;
  isWishlist?: boolean;
  category: string;
};

const CardProduct = ({
  image,
  name,
  price,
  rating,
  reviewCount,
  badge,
  badgeColor,
  badgeText,
  isWishlist,
  category,
}: ProductProps) => {
  const [liked, setLiked] = useState(isWishlist || false);

  return (
    <div className="group cursor-pointer p-2">
      <div className="relative overflow-hidden w-60 rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        {/* Badge */}
        {badge && (
          <div
            className={`absolute left-0 top-0 z-10 rounded-br-xl px-4 py-1.5 text-xs font-bold text-white shadow-sm ${
              badgeColor || "bg-blue-600" + (badge ? "" : " hidden")
            }`}
          >
            {badgeText}
          </div>
        )}

        {/* Image Container */}
        <div className="relative flex h-60 w-full items-center justify-center bg-white">
          {/* Wishlist Button */}
          <div className="absolute right-3 top-3 z-10 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setLiked(!liked);
              }}
              className="rounded-full bg-white p-2 shadow-md hover:bg-gray-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={liked ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`h-5 w-5 ${liked ? "text-red-500" : "text-gray-400"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </div>
          <img
            src={image}
            alt={name}
            className="object-contain h-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-1 text-xs font-medium text-gray-500">
            {category}
          </div>
          <h3 className="mb-2 text-lg font-bold text-gray-900 line-clamp-1">
            {name}
          </h3>

          <div className="mb-2 flex items-center gap-2">
            <span className="text-xl font-bold text-blue-600">{price}</span>
          </div>

          {rating !== undefined && reviewCount !== undefined && (
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span className="text-yellow-400">★</span>
              <span className="font-medium text-gray-900">{rating}</span>
              <span>({reviewCount} reviews)</span>
            </div>
          )}
        </div>

        {/* Hover Buttons Slide Up */}
        <div className="flex absolute bottom-0 left-0 right-0 gap-2 bg-white p-4 transition-transform duration-300 translate-y-full group-hover:translate-y-0 shadow-lg">
          <button className="w-full block rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
            Add to Cart
          </button>
          <button className="w-full block rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
