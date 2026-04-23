import { Atom, Power, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [aiOn, setAiOn] = useState(true);
  return (
    <motion.header
      initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="glass-card flex flex-col md:flex-row md:items-center justify-between gap-4 px-5 py-4 mb-6"
    >
      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{ rotate: 180, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="size-10 rounded-xl bg-gradient-to-br from-[var(--neon-green)] to-[var(--neon-cyan)] grid place-items-center shadow-[0_0_20px_var(--neon-green)]"
        >
          <Atom className="size-5 text-[var(--background)]" />
        </motion.div>
        <div>
          <h1 className="text-lg md:text-xl font-bold tracking-tight">
            Green Hydrogen <span className="shimmer-text">Smart System</span>
          </h1>
          <p className="text-xs text-muted-foreground">Industrial AI Energy Management</p>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <motion.div
          animate={{ boxShadow: ["0 0 0 0 color-mix(in oklab, var(--neon-green) 50%, transparent)", "0 0 0 10px transparent"] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color-mix(in_oklab,var(--neon-green)_15%,transparent)] border border-[color-mix(in_oklab,var(--neon-green)_40%,transparent)]"
        >
          <span className="size-2 rounded-full bg-[var(--neon-green)] animate-pulse-glow" />
          <span className="text-xs font-medium text-[var(--neon-green)]">AI Optimization Active</span>
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          onClick={() => setAiOn(v => !v)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold transition-colors ${
            aiOn
              ? "bg-[color-mix(in_oklab,var(--neon-cyan)_15%,transparent)] border-[var(--neon-cyan)] text-[var(--neon-cyan)]"
              : "bg-muted border-border text-muted-foreground"
          }`}
        >
          <Power className="size-3.5" />
          AI Mode {aiOn ? "ON" : "OFF"}
          <span className={`relative w-8 h-4 rounded-full transition-colors ${aiOn ? "bg-[var(--neon-cyan)]" : "bg-muted-foreground/30"}`}>
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 500, damping: 28 }}
              className={`absolute top-0.5 size-3 rounded-full bg-background ${aiOn ? "left-4" : "left-0.5"}`}
            />
          </span>
        </motion.button>

        <motion.div
          whileHover={{ scale: 1.08, rotate: 5 }}
          className="size-10 rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-cyan)] grid place-items-center text-sm font-bold text-background ring-2 ring-[color-mix(in_oklab,var(--neon-cyan)_40%,transparent)]"
        >
          <User className="size-5" />
        </motion.div>
      </div>
    </motion.header>
  );
}
