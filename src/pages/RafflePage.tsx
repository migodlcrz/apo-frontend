import { useState } from "react";
import { Wheel } from "react-custom-roulette";

const RafflePage: React.FC = () => {
  const [names, setNames] = useState<string[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [spinning, setSpinning] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState<number | null>(null);
  const [winner, setWinner] = useState<string | null>(null);

  // Default segment when no names are added
  const wheelData =
    names.length > 0
      ? names.map((name) => ({ option: name }))
      : [{ option: "" }];

  // Handle adding names from textarea
  const addNames = () => {
    const newNames = inputText
      .split("\n")
      .map((name) => name.trim())
      .filter((name) => name !== "");

    const uniqueNames = Array.from(new Set([...names, ...newNames]));
    setNames(uniqueNames);
    setInputText("");
  };

  // Handle spinning the wheel
  const spinWheel = () => {
    if (names.length > 1) {
      const newPrizeNumber = Math.floor(Math.random() * names.length);
      setPrizeNumber(newPrizeNumber);
      setSpinning(true);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center p-8">
      <div className="flex flex-col w-1/2 h-full items-center">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Spin the Wheel Raffle
        </h1>

        {/* Wheel Container */}
        <div
          className={`flex flex-col items-center p-8 ${
            names.length < 2 ? "grayscale opacity-50" : ""
          }`}
        >
          <Wheel
            mustStartSpinning={spinning}
            prizeNumber={prizeNumber ?? 0}
            data={wheelData}
            backgroundColors={["#034882", "#e8d794", "#f4a261", "#2a9d8f"]}
            textColors={["#ffffff"]}
            fontSize={18}
            outerBorderWidth={2}
            innerBorderWidth={1}
            radiusLineWidth={1}
            onStopSpinning={() => {
              setSpinning(false);
              if (prizeNumber !== null && names.length > 1) {
                const winnerName = wheelData[prizeNumber].option;
                setWinner(winnerName);

                // Remove the winner from the list
                setNames((prevNames) =>
                  prevNames.filter((name) => name !== winnerName)
                );
              }
            }}
          />
        </div>
        {names.length <= 1 && (
          <span className="text-center text-gray-700">
            Enter at least two names to start the raffle
          </span>
        )}
      </div>

      <div className="flex flex-col w-full lg:w-1/2 h-full items-center">
        {/* Winner Announcement */}
        {winner && (
          <h2 className="text-xl font-bold text-green-500 mt-4">
            Winner: {winner}
          </h2>
        )}

        {/* Textarea Input for Multiple Names */}
        <div className="mt-6 w-full max-w-md">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter names (one per line)..."
            className="border-2 border-gray-300 rounded p-2 w-full h-32 resize-none"
          />
          <button
            onClick={addNames}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Add Names
          </button>
        </div>

        {/* Spin Button */}
        <button
          onClick={spinWheel}
          className="mt-4 bg-green-500 text-white px-6 py-2 rounded disabled:bg-gray-400"
          disabled={names.length < 2 || spinning}
        >
          {spinning ? "Spinning..." : "Spin the Wheel"}
        </button>
      </div>
    </div>
  );
};

export default RafflePage;
