import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export type ChartPoint = { t: string; energy: number; hydrogen: number };

export function ChartPanel({ data }: { data: ChartPoint[] }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setReady(true), 800);
    return () => clearTimeout(id);
  }, []);
  return (
    <div className="glass-card glass-card-hover p-5 animate-fade-in">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">System Analytics</h2>
          <p className="text-lg font-bold mt-0.5">Energy Input vs Hydrogen Output</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[var(--neon-cyan)]" /> Energy (kW)</span>
          <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[var(--neon-green)]" /> Hydrogen (kg/hr)</span>
        </div>
      </div>

      <div className="h-[280px] w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="gradEnergy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.85 0.18 200)" stopOpacity={0.5} />
                <stop offset="100%" stopColor="oklch(0.85 0.18 200)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradH2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.86 0.24 145)" stopOpacity={0.5} />
                <stop offset="100%" stopColor="oklch(0.86 0.24 145)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 8%)" />
            <XAxis dataKey="t" stroke="oklch(0.7 0.02 260)" fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke="oklch(0.7 0.02 260)" fontSize={11} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                background: "oklch(0.21 0.025 260)",
                border: "1px solid oklch(1 0 0 / 12%)",
                borderRadius: 12,
                fontSize: 12,
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
              labelStyle={{ color: "oklch(0.7 0.02 260)" }}
            />
            <Area type="monotone" dataKey="energy" stroke="oklch(0.85 0.18 200)" strokeWidth={2.5} fill="url(#gradEnergy)" />
            <Area type="monotone" dataKey="hydrogen" stroke="oklch(0.86 0.24 145)" strokeWidth={2.5} fill="url(#gradH2)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
