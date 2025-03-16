import React from "react";
import "./AutoSlider.css";

interface AutoSliderProps {
  images: string[];
  width: string;
  height: string;
  reverse?: boolean;
}

const AutoSlider: React.FC<AutoSliderProps> = ({ images, width, height, reverse = false }) => {
  return (
    <div
      className="slider"
      style={{
        "--width": width,
        "--height": height,
        "--quantity": images.length,
      } as React.CSSProperties}
      data-reverse={reverse ? "true" : undefined}
    >
      <div className="list">
        {images.map((src, index) => (
          <div className="item" style={{ "--position": index + 1 } as React.CSSProperties} key={index}>
            <img src={src} alt={`slider-image-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;