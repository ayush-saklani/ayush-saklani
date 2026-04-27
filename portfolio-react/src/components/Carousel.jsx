import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const DEFAULT_ITEMS = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    alt: "Slide 1",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    alt: "Slide 2",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    alt: "Slide 3",
  },
];

const SPRING = {
  type: "spring",
  stiffness: 260,
  damping: 28,
};

function CarouselItem({ item }) {
  return (
    <div
      className="shrink-0 grow-0 basis-full overflow-hidden rounded-2xl bg-black flex items-center justify-center"
      style={{
        width: "100%",
        minWidth: "100%",
      }}
    >
      <img
        src={item.image}
        alt={item.alt}
        draggable={false}
        className="block max-w-full max-h-[75vh] w-auto h-auto object-contain select-none"
      />
    </div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 1950,
  autoplay = true,
  autoplayDelay = 2500,
}) {
  const [position, setPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const safeItems = useMemo(() => items || [], [items]);

  useEffect(() => {
    if (!autoplay || safeItems.length <= 1 || isHovered) return;

    timerRef.current = setInterval(() => {
      setPosition((prev) => (prev + 1) % safeItems.length);
    }, autoplayDelay);

    return () => clearInterval(timerRef.current);
  }, [autoplay, autoplayDelay, isHovered, safeItems.length]);

  const next = () => {
    setPosition((prev) => (prev + 1) % safeItems.length);
  };

  const prev = () => {
    setPosition((prev) =>
      prev === 0 ? safeItems.length - 1 : prev - 1
    );
  };

  if (!safeItems.length) return null;

  return (
    <div
      className="overflow-hidden relative object-scale-down rounded-md w-full h-full"
      style={{
        width: "100%",
        maxWidth: "100%",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex h-full"
        animate={{ x: `-${position * 100}%` }}
        transition={SPRING}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, info) => {
          if (info.offset.x < -80) next();
          else if (info.offset.x > 80) prev();
        }}
      >
        {safeItems.map((item) => (
          <CarouselItem key={item.id} item={item} />
        ))}
      </motion.div>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-white p-2 z-10"
      >
        <IoIosArrowDropleft size={30} />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white p-2 z-10"
      >
        <IoIosArrowDropright size={30} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {safeItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setPosition(i)}
            className={`h-2 w-2 rounded-full ${i === position ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}