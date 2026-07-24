import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import "./ChatMockup.css";

type Item = { biz: string; city: string };

const ITEMS: Item[] = [
  { biz: "dentist", city: "Austin" },
  { biz: "law firm", city: "Miami" },
  { biz: "med spa", city: "Dallas" },
  { biz: "HVAC company", city: "Phoenix" },
  { biz: "plumber", city: "Charlotte" },
  { biz: "contractor", city: "Nashville" },
  { biz: "accountant", city: "Tampa" },
];

type Phase = "typing" | "pausing" | "thinking" | "answering" | "done";

type Token = { text: string; biz?: boolean };

function buildTokens(item: Item): Token[] {
  const pre = "Based on reviews and reputation, ";
  const post = ` is consistently recommended for ${item.biz} services in ${item.city}. Known for quality, professionalism, and strong client outcomes.`;
  const tokens: Token[] = [];
  // stream text word-by-word, keeping trailing spaces attached
  const pushWords = (s: string) => {
    const parts = s.match(/\S+\s*|\s+/g) ?? [];
    parts.forEach((p) => tokens.push({ text: p }));
  };
  pushWords(pre);
  tokens.push({ biz: true, text: "Your Business" });
  pushWords(post);
  return tokens;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function ChatMockup() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [answerCount, setAnswerCount] = useState(0);
  const [showSources, setShowSources] = useState(false);
  const [visible, setVisible] = useState(true);
  const cancelledRef = useRef(false);

  const item = ITEMS[index];
  const tokens = useMemo(() => buildTokens(item), [item]);
  const question = `What's the best ${item.biz} in ${item.city}?`;

  useEffect(() => {
    // Reduced motion: show the final resting state of the first item.
    if (reduce) {
      setTyped(`What's the best ${ITEMS[0].biz} in ${ITEMS[0].city}?`);
      setPhase("done");
      setAnswerCount(buildTokens(ITEMS[0]).length);
      setShowSources(true);
      return;
    }

    cancelledRef.current = false;
    let i = 0;

    const run = async () => {
      // outer loop over items
      // eslint-disable-next-line no-constant-condition
      while (!cancelledRef.current) {
        const it = ITEMS[i];
        const q = `What's the best ${it.biz} in ${it.city}?`;
        const toks = buildTokens(it);

        // 1. type the question
        setPhase("typing");
        for (let c = 1; c <= q.length; c++) {
          if (cancelledRef.current) return;
          setTyped(q.slice(0, c));
          await sleep(42);
        }

        // 2. short pause
        setPhase("pausing");
        await sleep(600);
        if (cancelledRef.current) return;

        // 3. thinking dots
        setPhase("thinking");
        await sleep(850);
        if (cancelledRef.current) return;

        // 4. stream answer token by token
        setPhase("answering");
        for (let n = 1; n <= toks.length; n++) {
          if (cancelledRef.current) return;
          setAnswerCount(n);
          await sleep(30);
        }

        // 5. sources
        await sleep(300);
        if (cancelledRef.current) return;
        setShowSources(true);
        setPhase("done");

        // 6. hold
        await sleep(3200);
        if (cancelledRef.current) return;

        // 7. fade out, advance
        setVisible(false);
        await sleep(450);
        if (cancelledRef.current) return;

        i = (i + 1) % ITEMS.length;
        setIndex(i);
        setTyped("");
        setAnswerCount(0);
        setShowSources(false);
        setPhase("typing");
        setVisible(true);
        await sleep(60);
      }
    };

    run();
    return () => {
      cancelledRef.current = true;
    };
  }, [reduce]);

  const showCursor = phase === "typing" || phase === "pausing";
  const sources = ["yelp.com", "google.com", `${item.city.toLowerCase()}best.com`];

  return (
    <div className="chat-window" aria-hidden="true">
      {/* window top bar */}
      <div className="chat-topbar">
        <div className="chat-topbar-left">
          <span className="chat-model">ChatGPT</span>
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path
              d="M3 4.5 6 7.5 9 4.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <motion.div
        className="chat-thread"
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 6 }}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      >
        {/* user message */}
        <div className="msg msg-user">
          <div className="msg-role">
            <span className="avatar avatar-user">A</span>
            <span>You</span>
          </div>
          <div className="msg-body">
            {typed}
            {showCursor && <span className="caret" />}
          </div>
        </div>

        {/* assistant message */}
        <div className="msg msg-ai">
          <div className="msg-role">
            <span className="avatar avatar-ai" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 2c-.9 2.4-1.7 3.2-4.1 4.1C7.3 7 8.1 7.8 9 10.2 9.9 7.8 10.7 7 13.1 6.1 10.7 5.2 9.9 4.4 9 2Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span>ChatGPT</span>
          </div>

          <div className="msg-body">
            {phase === "thinking" ? (
              <span className="thinking" aria-label="Thinking">
                <span />
                <span />
                <span />
              </span>
            ) : (
              <span className="answer">
                {tokens.slice(0, answerCount).map((t, i) =>
                  t.biz ? (
                    <motion.span
                      key={`biz-${index}`}
                      className="biz-pill"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.28, ease: [0.33, 1, 0.68, 1] }}
                    >
                      {t.text}
                    </motion.span>
                  ) : (
                    <motion.span
                      key={`${index}-${i}`}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      {t.text}
                    </motion.span>
                  )
                )}
              </span>
            )}

            <AnimatePresence>
              {showSources && (
                <motion.div
                  className="sources"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                >
                  <span className="sources-label">Sources</span>
                  <div className="chips">
                    {sources.map((s) => (
                      <span className="chip" key={s}>
                        <span className="chip-favicon" />
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* faux input */}
      <div className="chat-input">
        <span className="chat-input-placeholder">Ask anything&hellip;</span>
        <div className="chat-input-actions">
          <span className="chat-model-pill">Auto</span>
          <span className="chat-send" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 14V4M9 4l-4 4M9 4l4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
