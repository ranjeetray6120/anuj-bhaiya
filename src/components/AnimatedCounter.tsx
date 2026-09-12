"use client";

import { useRef } from "react";
import CountUp from "react-countup";
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
  duration = 2.2,
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
  // Examples:
  // "+ 644%" -> prefix="+ ", number="644", suffix="%"
  // "- 45%" -> prefix="- ", number="45", suffix="%"
  // "₹300Cr+" -> prefix="₹", number="300", suffix="Cr+"
  // "₹42,311" -> prefix="₹", number="42,311", suffix=""
  // "764K" -> prefix="", number="764", suffix="K"
  // "1.7%" -> prefix="", number="1.7", suffix="%"
  // "11.2" -> prefix="", number="11.2", suffix=""
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

  if (!isParsable) {
    return <span className={className}>{rawStr}</span>;
  }

  return (
    <span ref={ref} className={`inline-block tabular-nums ${className}`}>
      {isInView ? (
        <CountUp
          start={0}
          end={targetNum}
          duration={duration}
          delay={delay}
          decimals={hasDecimals}
          separator={useCommaSeparator ? "," : ""}
          prefix={prefix}
          suffix={suffix}
          useEasing={true}
        />
      ) : (
        <span>
          {prefix}
          {hasDecimals > 0 ? (0).toFixed(hasDecimals) : "0"}
          {suffix}
        </span>
      )}
    </span>
  );
}
