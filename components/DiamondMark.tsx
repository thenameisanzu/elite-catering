"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DiamondMark({
  size = 120,
  animate = true,
  className = "",
}: {
  size?: number;
  animate?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, scale: 0.9 } : false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden bg-white shadow-sm border border-ink/10 shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/logo.png"
        alt="Elite Group Catering and Events Logo"
        width={size * 2}
        height={size * 2}
        className="w-full h-full object-contain p-[2%]"
        priority
      />
    </motion.div>
  );
}
