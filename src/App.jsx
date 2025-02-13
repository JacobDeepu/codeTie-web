import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />} >
            <Route path="/login" element={<div>login page</div>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
