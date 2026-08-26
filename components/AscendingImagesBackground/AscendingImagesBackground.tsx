"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import images from "./images";

const GROUP_HEIGHT = 1800;

function ImagesGroup() {
  return (
    <div
      className="relative w-auto h-auto shrink-0"
      style={{ height: GROUP_HEIGHT }}
    >
      {images.map((image, index) => (
        <motion.div
          key={`${image.src}-${index}`}
          className="absolute"
          style={{
            left: image.left,
            top: image.top,
            rotate: image.rotate ?? 0,
          }}
          animate={{
            x: [0, 8, -5, 0],
            y: [0, -8, 4, 0],
          }}
          transition={{
            duration: 8 + (index % 4) * 2,
            delay: index * 0.2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image
            src={image.src}
            alt={image.alt ?? ""}
            width={image.width}
            height={image.height}
            draggable={false}
            className="block object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function AscendingImagesBackground() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      "
    >
      <motion.div
        className="flex w-full flex-col"
        animate={{
          y: [0, -GROUP_HEIGHT],
        }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <ImagesGroup />
        <ImagesGroup />
      </motion.div>
    </div>
  );
}