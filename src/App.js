import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chars from "./components/Characters/chars";
import Characters from "./components/Characters/Characters";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Characters />} />
        <Route path="chars">
          <Route path=":id" element={<Chars />} />
        </Route>
      </Routes>
    </Router>
  );
}
