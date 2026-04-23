import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { EnergyCard } from "./EnergyCard";
import { ElectrolyzerCard } from "./ElectrolyzerCard";
import { StorageTank } from "./StorageTank";
import { TransportCard } from "./TransportCard";
import { AIPanel } from "./AIPanel";
import { ChartPanel, type ChartPoint } from "./ChartPanel";
import { CarbonCard } from "./CarbonCard";

const rand = (min: number, max: number) => Math.random() * (max - min) + min;
const fmtTime = (d: Date) => d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

export function Dashboard() {
  const [solar, setSolar] = useState(85);
  const [wind, setWind] = useState(62);
  const [hydro, setHydro] = useState(48);
  const [storage, setStorage] = useState(62);
  const [distance, setDistance] = useState(120);
  const [eta, setEta] = useState(95);
  const [carbon, setCarbon] = useState(2.3);
  const [series, setSeries] = useState<ChartPoint[]>(() => {
    const now = Date.now();
    return Array.from({ length: 12 }, (_, i) => ({
      t: fmtTime(new Date(now - (11 - i) * 2000)),
      energy: 150 + rand(-30, 30),
      hydrogen: 100 + rand(-20, 20),
    }));
  });

  useEffect(() => {
    const id = setInterval(() => {
      setSolar(v => Math.max(20, Math.min(140, v + rand(-12, 12))));
      setWind(v => Math.max(15, Math.min(130, v + rand(-10, 10))));
      setHydro(v => Math.max(20, Math.min(110, v + rand(-8, 8))));
      setStorage(v => Math.max(10, Math.min(99, v + rand(-2, 3))));
      setDistance(v => Math.max(0, v - rand(0, 4)));
      setEta(v => Math.max(0, v - rand(0, 3)));
      setCarbon(v => v + rand(0.01, 0.05));
      setSeries(prev => {
        const totalE = solar + wind + hydro;
        const next: ChartPoint = {
          t: fmtTime(new Date()),
          energy: totalE,
          hydrogen: totalE * 0.55 + rand(-5, 5),
        };
        return [...prev.slice(-11), next];
      });
    }, 2000);
    return () => clearInterval(id);
  }, [solar, wind, hydro]);

  const totalEnergy = solar + wind + hydro;
  const efficiency = Math.min(95, 70 + (totalEnergy / 400) * 25);
  const productionRate = totalEnergy * 0.55;

  const decisions = [
    { text: "Producing Hydrogen at optimal rate", active: totalEnergy > 100 },
    { text: storage > 85 ? "Storage Near Capacity — slowing intake" : "Storage levels nominal", active: storage > 85 },
    { text: distance < 80 ? "Dispatch Initiated — tanker en route" : "Awaiting dispatch threshold", active: distance < 80 },
    { text: "Routing surplus energy to grid buffer", active: totalEnergy > 250 },
  ];

  return (
    <div className="min-h-screen p-4 md:p-6 max-w-[1600px] mx-auto">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        <EnergyCard
          sources={[
            { key: "solar", label: "Solar Energy", value: solar },
            { key: "wind", label: "Wind Energy", value: wind },
            { key: "hydro", label: "Hydropower", value: hydro },
          ]}
        />
        <ElectrolyzerCard efficiency={efficiency} rate={productionRate} running={totalEnergy > 80} />
        <StorageTank percent={storage} capacity={1000} />
        <TransportCard delivering={distance < 120 && distance > 0} distance={distance} eta={eta} />

        <div className="xl:col-span-2">
          <AIPanel decisions={decisions} />
        </div>
        <div className="xl:col-span-2">
          <CarbonCard tons={carbon} />
        </div>

        <div className="md:col-span-2 xl:col-span-4">
          <ChartPanel data={series} />
        </div>
      </div>

      <footer className="text-center text-xs text-muted-foreground mt-8 pb-4">
        Smart Green Hydrogen Production System · Live telemetry updated every 2s
      </footer>
    </div>
  );
}
