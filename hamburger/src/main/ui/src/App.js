import {Route, Routes} from "react-router-dom";
import Main from '../src/pages/main'
import Ordering from "./pages/ordering";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<Main />} />
        <Route path="/order" element={<Ordering />} />
      </Routes>
    </div>
  );
}

export default App;
