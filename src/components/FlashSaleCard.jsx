"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FlashSaleCard = ({item}) => {
    const [minutesRemaining, setMinutesRemaining] = useState(0);

    useEffect(() => {
    if (item.flashSale) {
        const endTime = new Date(item.createdAt).getTime() + 30 * 60 * 1000; // Assuming flash sale lasts for 30 minutes
        const interval = setInterval(() => {
        const now = new Date().getTime();
        const difference = endTime - now;
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        setMinutesRemaining(minutes);
    }, 1000);
      return () => clearInterval(interval);
    }
  }, [item.flashSale, item.createdAt]);
    
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                    <Image src={item.image} width={408} height={400} alt={item.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.title}
                    <div className="badge badge-secondary">{item.ratings}</div>
                    </h2>
                    <p>{item.description}</p>
                    <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold text-lg">$<span>{item.price}</span></p>
                            {item.flashSale && (
                            <span className="text-red-600 font-semibold">
                                {/* Add aria-label for accessibility */}
                                <span aria-label="Flash Sale">Flash Sale</span>
                                {item.discount && ` - ${item.discount}`}
                                {/* Show remaining time in minutes */}
                                <div>{` (${minutesRemaining} mins left)`}</div>
                            </span>
                        )}
                    </div>
                    <div className="card-actions justify-center mt-6">
                        <Link href={`products/${item._id}`}>
                            <button className="bg-[#212121] hover:bg-[#151515] text-white w-full block px-6 py-3 rounded-md">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSaleCard;