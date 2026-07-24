import { motion } from "framer-motion";
import ChatMockup from "./ChatMockup";
import "./Hero.css";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <motion.a
          href="#audit"
          className="hero-badge"
          initial={{ opacity: 0, filter: "blur(1.5px)", y: 8 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span>Free AI visibility audit for your business</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.64646 2.64645C4.4512 2.84171 4.4512 3.15829 4.64646 3.35355L7.29291 6L4.64646 8.64645C4.4512 8.84171 4.4512 9.15829 4.64646 9.35355C4.84172 9.54882 5.15831 9.54882 5.35357 9.35355L8.35357 6.35355C8.54883 6.15829 8.54883 5.84171 8.35357 5.64645L5.35357 2.64645C5.15831 2.45118 4.84172 2.45118 4.64646 2.64645Z"
              fill="currentColor"
            />
          </svg>
        </motion.a>

        <motion.h1
          className="hero-title font-display text-balance"
          initial={{ opacity: 0, filter: "blur(1.5px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
        >
          Be the answer when your customers ask AI.
        </motion.h1>

        <motion.p
          className="hero-sub text-balance"
          initial={{ opacity: 0, filter: "blur(1.5px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.12 }}
        >
          We get local businesses recommended by ChatGPT, Perplexity, Gemini and
          Google AI Overviews.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
        >
          <a className="btn btn-outline hero-cta-secondary" href="#call">
            Book a call
          </a>
          <a className="btn btn-primary" href="#audit">
            Get your free audit
          </a>
        </motion.div>

        <motion.div
          className="hero-mockup"
          initial={{ opacity: 0, y: 24, filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.28 }}
        >
          <ChatMockup />
        </motion.div>
      </div>
    </section>
  );
}
