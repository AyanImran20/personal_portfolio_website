
function getRandomSpeed() {
  return 0.8 + Math.random() * 0.7;
}

function LetterDisplay({ word }) {
  return (
    <span className="word inline-flex whitespace-nowrap">
      {word.split("").map((char, i) => (
        <span
          key={i}
          className="letter inline-block font-semibold text-[clamp(48px,12vw,150px)]"
        >
          {char}
        </span>
      ))}
    </span>
  );
}


export default LetterDisplay;