// src/animation/SlideIn.jsx
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const SlideIn = ({
  children,
  direction = "left",
  delay = 0,
  duration = 0.8,
  once = false, // ✅ prop to control "once" behavior
}) => {
  const controls = useAnimation();
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.3,
    once: once, // ✅ uses the "once" prop passed by the user
  });

  const distance = 80;

  const getHiddenPosition = () => {
    switch (direction) {
      case "left":
        return { x: -distance, y: 0 };
      case "right":
        return { x: distance, y: 0 };
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      default:
        return { x: 0, y: 0 };
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getHiddenPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
