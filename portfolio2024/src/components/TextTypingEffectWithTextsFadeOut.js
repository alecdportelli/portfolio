import React, { useState, useEffect } from "react";
import useTypingEffect from "./useTypingEffect.js"; 
import './TextTypingEffect.css'; 

const TextTypingEffectWithTextsFadeOut = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [fadeText, setFadeText] = useState(false); // Start with false for fade-in

  const texts = [
    "I'm Alec",
    "I'm an engineer with interests at the intersection of:",
    "artificial intelligence",
    "simulation",
    "and human-centered design",
    "Currently building autonomous systems at the MITRE Corporation",
    "And pursuing a master's in robotics at Johns Hopkins"
  ];

  const TIME_TO_FADE = 1000;  // Fade duration in milliseconds
  const TIME_PER_LETTER = 150; // Typing speed per letter in milliseconds
  const TIME_INTERVAL = 3000;  // Total time to display each text before fading out

  const textToShow = useTypingEffect(texts[textIndex], TIME_PER_LETTER, false);

  useEffect(() => {
    // Trigger fade-in effect when the textIndex changes
    setFadeText(true);

    const fadeOutTimeout = setTimeout(() => {
      setFadeText(false);
    }, TIME_INTERVAL - TIME_TO_FADE);

    const nextTextTimeout = setTimeout(() => {
      setTextIndex((prevIndex) =>
        prevIndex >= texts.length - 1 ? 0 : prevIndex + 1
      );
    }, TIME_INTERVAL);

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(nextTextTimeout);
    };
  }, [textIndex]);

  return (
    <div
      className={`inline text-black dark:text-white transition-opacity duration-${TIME_TO_FADE} ${
        fadeText ? "opacity-100" : "opacity-0"
      }`}
      key={textIndex}
    >
      <span>
        {textToShow}
      </span>
    </div>
  );
};

export default TextTypingEffectWithTextsFadeOut;
