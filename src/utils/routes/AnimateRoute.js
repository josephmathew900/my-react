import { motion } from "framer-motion";
import React, { Children } from "react";
import { Route } from "react-router-dom";

export default function AnimateRoute({ children, ...rest }) {
  return (
    <Route {...rest}>
      <motion.div initial={{ x: 200 }} animate={{ x: 0 }} exit={{ scale: 0 }}>
        {children}
      </motion.div>
    </Route>
  );
}
