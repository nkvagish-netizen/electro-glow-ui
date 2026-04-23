import { Truck, MapPin, Clock } from "lucide-react";
import { MotionCard, AnimatedNumber } from "./motion";

export function TransportCard({ delivering, distance, eta }: { delivering: boolean; distance: number; eta: number }) {
  const etaH = Math.floor(eta / 60);
  const etaM = Math.floor(eta % 60);
  return (
    <MotionCard className="glass-card glass-card-hover p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Transport System</h2>
          <p className="text-xs text-muted-foreground mt-0.5">Tanker Fleet · H₂ Logistics</p>
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
          delivering
            ? "bg-[color-mix(in_oklab,var(--neon-cyan)_15%,transparent)] text-[var(--neon-cyan)] border-[color-mix(in_oklab,var(--neon-cyan)_40%,transparent)]"
            : "bg-muted text-muted-foreground border-border"
        }`}>
          {delivering ? "Delivering" : "Idle"}
        </span>
      </div>

      {/* Animated road */}
      <div className="relative h-14 rounded-xl bg-background/60 border border-border overflow-hidden mb-4">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)]/40 to-transparent" />
        <div className={`absolute top-1/2 -translate-y-1/2 left-0 ${delivering ? "animate-truck" : ""}`}>
          <div className="size-10 rounded-lg bg-[color-mix(in_oklab,var(--neon-cyan)_20%,transparent)] border border-[var(--neon-cyan)] grid place-items-center text-[var(--neon-cyan)]">
            <Truck className="size-5" />
          </div>
        </div>
        <MapPin className="absolute right-2 top-1/2 -translate-y-1/2 size-5 text-[var(--neon-green)]" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-muted/40 p-3 border border-border">
          <p className="text-[11px] uppercase text-muted-foreground tracking-wider flex items-center gap-1"><MapPin className="size-3" /> Distance</p>
          <p className="text-xl font-bold tabular-nums mt-0.5">
            <AnimatedNumber value={distance} /><span className="text-xs font-normal text-muted-foreground"> km</span>
          </p>
        </div>
        <div className="rounded-xl bg-muted/40 p-3 border border-border">
          <p className="text-[11px] uppercase text-muted-foreground tracking-wider flex items-center gap-1"><Clock className="size-3" /> ETA</p>
          <p className="text-xl font-bold tabular-nums mt-0.5">{etaH}h {etaM}m</p>
        </div>
      </div>
    </MotionCard>
  );
}
