import Navbar from "./components/Navbar";
import BentoProfile from "./components/BentoProfile";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Background Subtle Gradient Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 right-[5%] w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-[5%] w-[30rem] h-[30rem] bg-purple-500/5 rounded-full blur-[150px] animate-pulse"></div>
      </div>
      
      <Navbar />
      <BentoProfile />
      
      {/* Small Clean Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 pb-24 mt-12 flex items-center justify-between text-white/20 text-[10px] uppercase font-mono font-bold tracking-[0.4em]">
        <div></div>
        <div>ARCHITECTED FOR PRECISION</div>
      </div>
    </div>
  );
}
