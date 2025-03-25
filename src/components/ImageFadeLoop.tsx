import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type ImageSwitcherProps = {
  image1: string;
  image2: string;
  duration?: number;
};

const ImageSwitcher: React.FC<ImageSwitcherProps> = ({ image1, image2, duration = 2 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div>
      <AnimatePresence mode="wait">
        {visible ? (
          <motion.img
            key={image1}
            src={image1}
            alt="Image 1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{maxHeight: "285px" }}
          />
        ) : (
          <motion.img
            key={image2}
            src={image2}
            alt="Image 2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{maxHeight: "285px" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSwitcher;