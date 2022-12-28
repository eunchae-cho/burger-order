// import logo from './assets/logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {getTest} from "./services/main";

function App() {
  const [data, setData] = useState()

  useEffect( () => {
    loadData()
  }, [])

  const loadData = async () => {
    const response = await getTest()
    setData(response)
  }

  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}

      {data}
      
      HEY

    </div>
  );
}

export default App;
