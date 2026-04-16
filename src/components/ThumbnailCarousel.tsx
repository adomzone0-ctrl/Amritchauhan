import { motion } from "motion/react";

const ROW_1 = [
  "https://i.ibb.co/3Z8MQ6R/Dhruv-thunbnail2-v001.jpg",
  "https://i.ibb.co/RTX3hBPn/Dhruv-thunbnail-v003.jpg",
  "https://i.ibb.co/qFJMPmjR/thunbnail-v001.jpg",
];

const ROW_2 = [
  "https://i.ibb.co/XxF5YF2M/irl-thumbnail-v002.jpg",
  "https://i.ibb.co/NgkQT5n2/Dhruv-thunbnail-v002.jpg",
  "https://i.ibb.co/2Y8gr0vb/irl-thumbnail-v003-Recovered.jpg",
];

const ROW_3 = [
  "https://i.ibb.co/jvnynXDy/irl-thumbnail-v001.jpg",
  "https://i.ibb.co/pjQyDkbc/Valo-thumbnail-v001.jpg",
];

interface CarouselRowProps {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
}

function CarouselRow({ images, direction = "left", speed = 20 }: CarouselRowProps) {
  // Triple the images to ensure enough content for smooth scrolling even with 1-2 items
  const displayImages = [...images, ...images, ...images, ...images];
  
  return (
    <div className="flex overflow-hidden gap-4 py-2">
      <motion.div
        className="flex gap-4 flex-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {displayImages.map((src, i) => (
          <div 
            key={i} 
            className="flex-none w-64 md:w-80 aspect-video rounded-xl overflow-hidden border border-white/10 bg-zinc-900 group cursor-pointer"
          >
            <img 
              src={src} 
              alt={`Thumbnail ${i}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function ThumbnailCarousel() {
  return (
    <div className="w-full space-y-2 overflow-hidden py-8">
      <CarouselRow images={ROW_1} direction="left" speed={25} />
      <CarouselRow images={ROW_2} direction="right" speed={30} />
      <CarouselRow images={ROW_3} direction="left" speed={20} />
    </div>
  );
}
