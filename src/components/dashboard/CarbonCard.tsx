import { Leaf, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";
import { MotionCard, AnimatedNumber } from "./motion";

export function CarbonCard({ tons }: { tons: number }) {
  return (
    <MotionCard className="glass-card glass-card-hover p-5 relative overflow-hidden h-full">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -right-10 size-40 rounded-full bg-[var(--neon-green)]/25 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-12 -left-12 size-40 rounded-full bg-[var(--neon-cyan)]/20 blur-3xl"
      />
      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <motion.div
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="size-9 rounded-xl bg-[color-mix(in_oklab,var(--neon-green)_18%,transparent)] grid place-items-center text-[var(--neon-green)]"
          >
            <Leaf className="size-5" />
          </motion.div>
          <h2 className="text-sm font-semibold uppercase tracking-wider">Carbon Savings</h2>
        </div>
        <p className="text-5xl font-bold text-glow-green tabular-nums">
          <AnimatedNumber value={tons} decimals={2} /><span className="text-2xl font-normal"> t</span>
        </p>
        <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
          <TrendingDown className="size-3.5 text-[var(--neon-green)]" />
          CO₂ saved compared to fossil fuels
        </p>
      </div>
    </MotionCard>
  );
}
