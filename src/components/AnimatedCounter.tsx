"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delay?: number;
}

export default function AnimatedCounter({
  value,
  duration = 2.0,
  className = "",
  prefix: explicitPrefix,
  suffix: explicitSuffix,
  decimals: explicitDecimals,
  delay = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const rawStr = String(value).trim();

  // Regex to extract prefix, numeric value (supports commas & decimals), and suffix
  const match = rawStr.match(/^([^\d.-]*|[+-]\s*)([0-9][0-9,]*\.?[0-9]*)(.*)$/);

  let prefix = explicitPrefix ?? "";
  let suffix = explicitSuffix ?? "";
  let targetNum = 0;
  let hasDecimals = explicitDecimals ?? 0;
  let useCommaSeparator = false;
  let isParsable = false;

  if (match) {
    if (explicitPrefix === undefined) {
      prefix = match[1];
    }
    if (explicitSuffix === undefined) {
      suffix = match[3];
    }
    const cleanNum = match[2].replace(/,/g, "");
    targetNum = parseFloat(cleanNum);
    useCommaSeparator = match[2].includes(",");

    if (explicitDecimals === undefined && cleanNum.includes(".")) {
      hasDecimals = cleanNum.split(".")[1]?.length || 0;
    }
    isParsable = !isNaN(targetNum);
  }

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isInView || !isParsable) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const timeoutId = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = (timestamp - startTimestamp) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutExpo
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = easeOut * targetNum;

        setCount(currentVal);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCount(targetNum);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, isParsable, targetNum, duration, delay]);

  if (!isParsable) {
    return <span className={className}>{rawStr}</span>;
  }

  const formattedNumber = count.toLocaleString("en-US", {
    minimumFractionDigits: hasDecimals,
    maximumFractionDigits: hasDecimals,
    useGrouping: useCommaSeparator,
  });

  return (
    <span ref={ref} className={`inline-block tabular-nums ${className}`}>
      {prefix}
      {isInView ? formattedNumber : (0).toFixed(hasDecimals)}
      {suffix}
    </span>
  );
}
