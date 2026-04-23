import { Brain, CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { MotionCard } from "./motion";

export function AIPanel({ decisions }: { decisions: { text: string; active: boolean }[] }) {
  return (
    <MotionCard className="glass-card glass-card-hover p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="size-9 rounded-xl bg-gradient-to-br from-[var(--neon-green)] to-[var(--neon-cyan)] grid place-items-center text-background shadow-[0_0_20px_var(--neon-green)]"
          >
            <Brain className="size-5" />
          </motion.div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">AI Optimization Engine</h2>
            <p className="text-xs text-muted-foreground">Real-time decision stream</p>
          </div>
        </div>
        <span className="size-2 rounded-full bg-[var(--neon-green)] animate-pulse-glow" />
      </div>

      <ul className="space-y-2">
        <AnimatePresence mode="popLayout">
          {decisions.map((d, i) => (
            <motion.li
              key={d.text}
              layout
              initial={{ opacity: 0, x: -16, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 16, filter: "blur(4px)" }}
              transition={{ type: "spring", stiffness: 200, damping: 22, delay: i * 0.05 }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-background/50 border border-border transition-colors hover:border-[color-mix(in_oklab,var(--neon-green)_40%,transparent)]"
            >
              <span className="relative flex size-2.5">
                {d.active && (
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--neon-green)] opacity-60 animate-ping" />
                )}
                <span className={`relative inline-flex size-2.5 rounded-full ${d.active ? "bg-[var(--neon-green)]" : "bg-muted-foreground/40"}`} />
              </span>
              <span className="text-sm flex-1">{d.text}</span>
              {d.active && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400, damping: 14 }}>
                  <CheckCircle2 className="size-4 text-[var(--neon-green)]" />
                </motion.span>
              )}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </MotionCard>
  );
}
