import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/");
    socket.onopen = () => {
      console.log("connected");
      setSocket(socket);
    };
    socket.onmessage = (message) => {
      setMessage(message.data);
    };
    setSocket(socket);
  }, []);
  if (!socket) {
    return <div>connecting to WebSocket...</div>;
  }
  return (
    <div>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <br/>
      <button
        onClick={() => {
          socket.send(value);
        }}
      >
        send
      </button>
      <br/>
      {message}
    </div>
  );
}

export default App;
