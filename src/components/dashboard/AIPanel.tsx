import { Brain, CheckCircle2 } from "lucide-react";

export function AIPanel({ decisions }: { decisions: { text: string; active: boolean }[] }) {
  return (
    <div className="glass-card glass-card-hover p-5 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-xl bg-gradient-to-br from-[var(--neon-green)] to-[var(--neon-cyan)] grid place-items-center text-background shadow-[0_0_20px_var(--neon-green)]">
            <Brain className="size-5" />
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">AI Optimization Engine</h2>
            <p className="text-xs text-muted-foreground">Real-time decision stream</p>
          </div>
        </div>
        <span className="size-2 rounded-full bg-[var(--neon-green)] animate-pulse-glow" />
      </div>

      <ul className="space-y-2">
        {decisions.map((d, i) => (
          <li
            key={i}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-background/50 border border-border transition-all hover:border-[color-mix(in_oklab,var(--neon-green)_40%,transparent)]"
          >
            <span className="relative flex size-2.5">
              {d.active && (
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--neon-green)] opacity-60 animate-ping" />
              )}
              <span className={`relative inline-flex size-2.5 rounded-full ${d.active ? "bg-[var(--neon-green)]" : "bg-muted-foreground/40"}`} />
            </span>
            <span className="text-sm flex-1">{d.text}</span>
            {d.active && <CheckCircle2 className="size-4 text-[var(--neon-green)]" />}
          </li>
        ))}
      </ul>
    </div>
  );
}
