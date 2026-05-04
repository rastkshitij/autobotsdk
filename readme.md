This is my react sdk to use this is 
1 npm install autobot-react-sdk
I have added a sample component to use my npm package
import ChatWidget from "autobot-react-sdk";
function App() {
  return (
    <div>
      <h1>Testing Autobot</h1>

      <ChatWidget apiKey="abc123" />
    </div>
  );
}

export default App;
