import Home from "./pages/home/Home";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
