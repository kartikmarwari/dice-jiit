import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import MiniDice from "@/components/dice/MiniDice";

export default function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        data-testid="page-loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
        style={{ background: "#06060c" }}
      >
        <div className="w-32 h-32">
          <Canvas camera={{ position: [0, 0, 4], fov: 40 }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={2} color="#8b5cf6" />
            <pointLight position={[-5, -3, 3]} intensity={1.4} color="#22d3ee" />
            <MiniDice fast />
          </Canvas>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 font-mono text-xs tracking-[0.4em] text-white/60"
        >
          INITIALIZING · DICE
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
