import { Sparkles } from "lucide-react";
import { useState } from "react";

function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative h-16 w-16 cursor-pointer" onClick={handleClick}>
      {/* div do 3D*/}
      <div
        className={`preserve-3d h-full w-full ${isFlipped && "rotate-y-180"} transition-transform duration-700`}
      >
        {/* card back */}
        <div className="backface-hidden absolute flex h-full w-full items-center justify-center rounded-xl border-2 border-white/20 bg-pink">
          <Sparkles className="h-6 w-7 text-white" />
        </div>

        {/* card front */}
        <div className="backface-hidden rotate-y-180 absolute flex h-full w-full items-center justify-center rounded-xl border-2 border-purple-200 bg-white">
          🍭
        </div>
      </div>
    </div>
  );
}

export default Card;
