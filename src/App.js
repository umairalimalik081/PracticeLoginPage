import LoginForm from "./Components/LoginForm";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default App;
