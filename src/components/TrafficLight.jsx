import { useState, useEffect } from "react";
import { Circle } from "lucide-react";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState("red");
  const [isAutomatic, setIsAutomatic] = useState(false);

  useEffect(() => {
    let timer;

    if (isAutomatic) {
      timer = setInterval(() => {
        setActiveLight((current) => {
          switch (current) {
            case "red":
              return "green";
            case "green":
              return "yellow";
            case "yellow":
              return "red";
            default:
              return "red";
          }
        });
      }, 2000);
    }

    return () => clearInterval(timer);
  }, [isAutomatic]);

  const getLightClass = (color) => {
    const baseClasses =
      "w-24 h-24 rounded-full border-4 border-gray-700 flex items-center justify-center transition-all duration-300";
    const activeClasses = {
      red:
        activeLight === "red"
          ? "bg-red-500 shadow-lg shadow-red-500/50"
          : "bg-red-900/30",
      yellow:
        activeLight === "yellow"
          ? "bg-yellow-400 shadow-lg shadow-yellow-400/50"
          : "bg-yellow-900/30",
      green:
        activeLight === "green"
          ? "bg-green-500 shadow-lg shadow-green-500/50"
          : "bg-green-900/30",
    };
    return `${baseClasses} ${activeClasses[color]}`;
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="bg-gray-800 p-8 rounded-3xl shadow-xl">
        <div className="flex flex-col gap-4">
          <div className={getLightClass("red")}>
            <Circle
              className={`w-16 h-16 ${
                activeLight === "red" ? "text-red-100" : "text-red-950"
              }`}
            />
          </div>
          <div className={getLightClass("yellow")}>
            <Circle
              className={`w-16 h-16 ${
                activeLight === "yellow" ? "text-yellow-100" : "text-yellow-950"
              }`}
            />
          </div>
          <div className={getLightClass("green")}>
            <Circle
              className={`w-16 h-16 ${
                activeLight === "green" ? "text-green-100" : "text-green-950"
              }`}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => setIsAutomatic(!isAutomatic)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {isAutomatic ? "Stop Automatic" : "Start Automatic"}
        </button>

        {!isAutomatic && (
          <div className="flex gap-2">
            <button
              onClick={() => setActiveLight("red")}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Red
            </button>
            <button
              onClick={() => setActiveLight("yellow")}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Yellow
            </button>
            <button
              onClick={() => setActiveLight("green")}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Green
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrafficLight;
