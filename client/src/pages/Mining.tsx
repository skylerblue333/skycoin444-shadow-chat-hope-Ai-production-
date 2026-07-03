import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cpu, TrendingUp, Zap } from "lucide-react";

export default function Mining() {
  const [mining, setMining] = useState(false);
  const [earnings, setEarnings] = useState(0);

  const handleMine = () => {
    setMining(!mining);
    if (!mining) {
      const interval = setInterval(() => {
        setEarnings((prev) => prev + 0.001);
      }, 1000);
      return () => clearInterval(interval);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-black p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Crypto Mining</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <span className="text-slate-400">Hash Rate</span>
            </div>
            <p className="text-2xl font-bold text-white">2.5 GH/s</p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <span className="text-slate-400">Daily Earnings</span>
            </div>
            <p className="text-2xl font-bold text-white">{earnings.toFixed(4)} BTC</p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="text-slate-400">Power Usage</span>
            </div>
            <p className="text-2xl font-bold text-white">1200W</p>
          </Card>
        </div>

        <Card className="bg-slate-900 border-slate-800 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Mining Status</h2>
              <p className="text-slate-400 mb-4">
                {mining ? "Mining in progress..." : "Click to start mining"}
              </p>
            </div>
            <Button onClick={handleMine} size="lg" className="w-full">
              {mining ? "Stop Mining" : "Start Mining"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
