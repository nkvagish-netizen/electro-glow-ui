export function StorageTank({ percent, capacity }: { percent: number; capacity: number }) {
  const filled = (percent / 100) * capacity;
  const color =
    percent > 90 ? "var(--danger)" : percent > 70 ? "var(--warning)" : "var(--neon-green)";
  const radius = 70;
  const circ = 2 * Math.PI * radius;
  const dash = (percent / 100) * circ;

  return (
    <div className="glass-card glass-card-hover p-5 animate-fade-in">
      <div className="mb-2">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Hydrogen Storage</h2>
        <p className="text-xs text-muted-foreground">Pressurized tank · 350 bar</p>
      </div>

      <div className="flex items-center justify-center my-3">
        <div className="relative">
          <svg width="180" height="180" className="-rotate-90">
            <circle cx="90" cy="90" r={radius} stroke="var(--muted)" strokeWidth="12" fill="none" />
            <circle
              cx="90" cy="90" r={radius}
              stroke={color}
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${circ}`}
              style={{ filter: `drop-shadow(0 0 8px ${color})`, transition: "stroke-dasharray 0.7s ease, stroke 0.5s ease" }}
            />
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <p className="text-3xl font-bold tabular-nums" style={{ color }}>{percent.toFixed(0)}%</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Capacity</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-sm pt-2 border-t border-border">
        <span className="text-muted-foreground">Stored</span>
        <span className="font-bold tabular-nums">
          <span style={{ color }}>{filled.toFixed(0)}</span>
          <span className="text-muted-foreground"> / {capacity} kg</span>
        </span>
      </div>
    </div>
  );
}
