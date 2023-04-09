import React from "react"
// import {Routes, Route} from "react-router-dom"
// import {DataContext} from "./context/dataContext"
// import {UserContext} from "./context/userContext"
import Nav from "./components/Nav"
import About from "./components/About"
import Footer from "./components/Footer"


function App(props) {

  return (
    <>
        <Nav />
        <About />
        <Footer />
    </>
  );
}

export default App;
