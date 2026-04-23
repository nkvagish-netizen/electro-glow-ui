import { Leaf, TrendingDown } from "lucide-react";

export function CarbonCard({ tons }: { tons: number }) {
  return (
    <div className="glass-card glass-card-hover p-5 animate-fade-in relative overflow-hidden">
      <div className="absolute -top-10 -right-10 size-32 rounded-full bg-[var(--neon-green)]/20 blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <div className="size-9 rounded-xl bg-[color-mix(in_oklab,var(--neon-green)_18%,transparent)] grid place-items-center text-[var(--neon-green)]">
            <Leaf className="size-5" />
          </div>
          <h2 className="text-sm font-semibold uppercase tracking-wider">Carbon Savings</h2>
        </div>
        <p className="text-5xl font-bold text-glow-green tabular-nums">{tons.toFixed(2)}<span className="text-2xl font-normal"> t</span></p>
        <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
          <TrendingDown className="size-3.5 text-[var(--neon-green)]" />
          CO₂ saved compared to fossil fuels
        </p>
      </div>
    </div>
  );
}
