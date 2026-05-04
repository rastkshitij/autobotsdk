# 🚀 Autobot React SDK

Install the package:

```bash
npm install autobot-react-sdk
```

## Usage

Import the component and use it in your React application:

```jsx
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
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `apiKey` | `string` | ✅ Yes | Your Autobot API key |

## Example

After integration, your chatbot widget will appear inside your React application.
