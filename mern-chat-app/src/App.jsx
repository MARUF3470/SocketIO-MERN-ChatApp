import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/Router";

function App() {
  return (
    <div style={{ fontFamily: "poppins" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
