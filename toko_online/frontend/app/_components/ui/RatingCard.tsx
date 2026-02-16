import React from "react";

type Props = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
};

const RatingCard = ({ id, name, rating, comment, avatar }: Props) => {
  return (
    <div
      key={id}
      className="flex h-full flex-col justify-between rounded-lg bg-gray-50 p-6 shadow-md transition-all hover:shadow-lg"
    >
      <div className="mb-4 flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <img src={avatar} alt={name} className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="line-clamp-2 text-gray-600">{comment}</p>
    </div>
  );
};

export default RatingCard;
