import { useState, useEffect } from 'react';

export default function TypewriterText({ phrases, speed = 80, pause = 1800 }) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];

    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
      return;
    }

    const delay = deleting ? speed / 2 : speed;
    const t = setTimeout(() => {
      setCharIdx((i) => i + (deleting ? -1 : 1));
      setDisplayed(current.slice(0, charIdx + (deleting ? -1 : 1)));
    }, delay);

    return () => clearTimeout(t);
  }, [charIdx, deleting, phraseIdx, phrases, speed, pause]);

  return (
    <span>
      {displayed}
      <span style={{ opacity: 1, animation: 'blink 1s step-start infinite' }}>|</span>
      <style>{`@keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }`}</style>
    </span>
  );
}
