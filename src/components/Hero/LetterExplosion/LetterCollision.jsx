// LetterCollision.jsx
"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetterDisplay from "./LetterDisplay";

gsap.registerPlugin(ScrollTrigger);

const HEADER_H = 64;

const lines = ["Transforming", "raw", "data", "into", "intelligent", "solutions"];

export default function LetterCollision() {
  const ref = useRef(null);
  const inited = useRef(false);

  useLayoutEffect(() => {
    if (inited.current) return;
    inited.current = true;

    const container = ref.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const letters = container.querySelectorAll(".letter");
      const containerHeight = container.offsetHeight;
      const travel = containerHeight + 120;

      letters.forEach((letter, i) => {
        if (!letter.dataset.speed) letter.dataset.speed = (0.8 + Math.random() * 0.7).toString();
        if (!letter.dataset.rot)   letter.dataset.rot = String(((i * 13) % 60) - 30);

        gsap.fromTo(
          letter,
          { y: 0, rotation: 0 },
          {
            y: -(1 - parseFloat(letter.dataset.speed)) * travel,
            rotation: parseFloat(letter.dataset.rot),
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: container,
              start: `top top+=${HEADER_H}`,
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: false,
            },
          }
        );
      });
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(".letter");
      inited.current = false;
    };
  }, []);

  return (
    <section
      ref={ref}
      className="ml-8 flex flex-col justify-center items-start pb-8 text-matte"
      style={{ minHeight: `calc(100vh - ${HEADER_H}px)`, paddingTop: 24, paddingBottom: 24 }}
    >
      <div className="mb-8">
        <div className="space-y-2">
          {/* line 1 */}
          <div className="flex flex-wrap gap-x-4 sm:gap-x-10">
            <LetterDisplay word={lines[0]} />
            <LetterDisplay word={lines[1]} />
          </div>
          {/* line 2 */}
          <div className="flex flex-wrap gap-x-4 sm:gap-x-10">
            <LetterDisplay word={lines[2]} />
            <LetterDisplay word={lines[3]} />
          </div>
          {/* line 3 */}
          <div className="flex flex-wrap gap-x-4 sm:gap-x-10">
            <LetterDisplay word={lines[4]} />
            <LetterDisplay word={lines[5]} /> {/* <-- add this */}
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col items-end w-full justify-end animate-bounce">
        <div className="flex flex-col items-center text-center p-1">
          <p>Scroll Down</p>
          <svg width="22" height="22" viewBox="0 0 24 24" className="fill-matte">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 3c.552 0 1 .448 1 1v13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 5.707 12.293L11 17.586V4c0-.552.448-1 1-1Z"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
