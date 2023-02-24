import './App.css';
import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWorks from "./my works/MyWorks";
import Contact from "./contact/contact";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
