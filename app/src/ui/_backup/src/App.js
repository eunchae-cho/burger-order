import {Route, Routes} from "react-router-dom";
import Main from './pages/main'
import {RecoilRoot} from "recoil";

function App() {
  return (
    <div className="App">
        <RecoilRoot>
          <Routes>
            <Route path="/" exact={true} element={<Main />} />
          </Routes>
        </RecoilRoot>
    </div>
  );
}

export default App;
