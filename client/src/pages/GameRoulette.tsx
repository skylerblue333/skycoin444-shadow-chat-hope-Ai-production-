import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, TrendingUp } from "lucide-react";

export default function GameRoulette() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSpin = () => {
    setSpinning(true);
    setTimeout(() => {
      setResult(["🎉 WIN!", "Try Again", "Almost!"][Math.floor(Math.random() * 3)]);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-black p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Game Roulette</h1>

        <Card className="bg-slate-900 border-slate-800 p-8">
          <div className="flex flex-col items-center gap-8">
            <div className={`w-48 h-48 rounded-full border-4 border-purple-500 flex items-center justify-center text-4xl font-bold text-white ${spinning ? "animate-spin" : ""}`}>
              {result || "🎲"}
            </div>

            <Button onClick={handleSpin} disabled={spinning} size="lg" className="w-full">
              {spinning ? "Spinning..." : "Spin Roulette"}
            </Button>

            <div className="grid grid-cols-2 gap-4 w-full">
              <Card className="bg-slate-800 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-slate-400">Bet Amount</span>
                </div>
                <p className="text-2xl font-bold text-white">100 SKY</p>
              </Card>
              <Card className="bg-slate-800 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-slate-400">Potential Win</span>
                </div>
                <p className="text-2xl font-bold text-green-400">300 SKY</p>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
