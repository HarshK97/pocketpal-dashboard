// AnimatedProgressProvider.jsx
import { useState, useEffect } from "react";

const AnimatedProgressProvider = ({
  valueStart,
  valueEnd,
  duration,
  easingFunction,
  children,
}) => {
  const [value, setValue] = useState(valueStart);

  useEffect(() => {
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / (duration * 1000), 1);
      const eased = easingFunction(percent);
      setValue(valueStart + (valueEnd - valueStart) * eased);

      if (percent < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [valueStart, valueEnd, duration, easingFunction]);

  // ✅ This line avoids the TypeError you're getting
  return typeof children === "function" ? children(value) : null;
};

export default AnimatedProgressProvider;
