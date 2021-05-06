import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Footer from "./Components/Footer/Footer";

const App = () => {

    return (
        <div className="Grid">
            <Header/>
            <Sidebar />
            <Content />
            <Footer />
        </div>
    );
    }
export default App;