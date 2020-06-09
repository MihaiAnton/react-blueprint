import React from 'react';
import {BrowserRouter} from "react-router-dom"

import './App.css';
import Layout from "./hoc/Layout/Layout";
import MainBlock from "./containers/MainBlock/MainBlock";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Layout>
                    <MainBlock/>
                </Layout>
            </div>
        </BrowserRouter>
    );
}

export default App;
