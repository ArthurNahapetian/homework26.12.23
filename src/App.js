import React from "react";
import Exercise1 from "./components/exercise 1";
import Exercise2 from "./components/exercise 2";
import "./App.css"

class App extends React.Component {





  render() {
    return <div className={'parent'}>

      <Exercise1 number={'1'} />
      <Exercise2 />




    </div>
  }
}


export default App