import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from "framer-motion";
import { useEffect, type ReactNode } from "react";

export const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 110, damping: 18, mass: 0.7 },
  },
};

export const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export function MotionCard({
  children,
  className,
  delay = 0,
  ...rest
}: { children: ReactNode; className?: string; delay?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, scale: 1.012, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      transition={{ delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedNumber({
  value,
  decimals = 0,
  className,
  suffix,
}: { value: number; decimals?: number; className?: string; suffix?: string }) {
  const mv = useMotionValue(value);
  const spring = useSpring(mv, { stiffness: 80, damping: 18, mass: 0.6 });
  const text = useTransform(spring, (v) => v.toFixed(decimals));

  useEffect(() => {
    mv.set(value);
  }, [value, mv]);

  return (
    <span className={className}>
      <motion.span>{text}</motion.span>
      {suffix}
    </span>
  );
}

export { motion };
