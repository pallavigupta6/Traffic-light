import TrafficLight from './components/TrafficLight';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8">Interactive Traffic Light</h1>
      <TrafficLight />
      <p className="text-gray-400 mt-8 text-center max-w-md">
        Click the buttons to control manually or enable automatic mode to see the traffic light cycle through its states.
      </p>
    </div>
  );
}

export default App;