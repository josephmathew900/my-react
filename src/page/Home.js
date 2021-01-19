import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <div className="flex h-screen">
      <motion.h1
        // initial={{ opacity: 0, y: -400 }}
        // animate={{
        //   scale: 2,
        //   opacity: 1,
        //   transition: { duration: 2 },
        //   y: 0,
        //   rotate: 360,
        // }}
        className="m-auto text-3xl"
      >
        Welcome Home
      </motion.h1>
    </div>
  );
}
