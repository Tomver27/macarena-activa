"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: string;
  as?: "h1" | "h2" | "h3";
  style?: React.CSSProperties;
  className?: string;
  start?: string;
}

export default function AnimatedTitle({
  children,
  as: Tag = "h2",
  style,
  className,
  start = "top 80%",
}: Props) {
  const containerRef = useRef<HTMLElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const words = children.split(" ");

  useEffect(() => {
    const els = wordRefs.current.filter((el): el is HTMLSpanElement => Boolean(el));
    if (!els.length || !containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(els, {
        y: "115%",
        stagger: 0.07,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions: "play reverse play reverse",
        },
      });
    });
    return () => ctx.revert();
  }, [start]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={(el: any) => { containerRef.current = el; }} style={style} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
            paddingBottom: "0.12em",
            marginBottom: "-0.12em",
          }}
        >
          <span
            ref={(el) => { wordRefs.current[i] = el; }}
            style={{ display: "inline-block" }}
          >
            {word}{i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
