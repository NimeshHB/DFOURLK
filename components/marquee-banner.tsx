"use client"

import React from "react"

export function MarqueeBanner() {
    const items = [
        "Web Development",
        "UI/UX Design",
        "Brand Identity",
        "Software Solutions",
        "Motion Graphics",
        "Creative Strategy",
        "Digital Marketing",
        "E-commerce",
    ]

    return (
        <div className="relative py-10 bg-[color:var(--mint-green)] overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        {items.map((item, index) => (
                            <React.Fragment key={index}>
                                <span className="text-black text-2xl md:text-5xl font-black uppercase tracking-tighter mx-10 italic">
                                    {item}
                                </span>
                                <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-black mx-4" />
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>

            <style jsx>{`
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </div>
    )
}
