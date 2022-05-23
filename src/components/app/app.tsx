import React from 'react';
import './app.css'
import desktopImage  from '../../assets/images/bg-header-desktop.svg'
import mobileImage from '../../assets/images/bg-header-mobile.svg'
import AppFilter from "../app-filter/app-filter";
import AppCompanyList from "../app-company-list/app-company-list";




function App() {
    const imageUrl = window.innerWidth >= 375 ? desktopImage : mobileImage

    return (
        <div className="App">
            <header className="header" style={{backgroundImage: `url(${imageUrl})`}}>

            </header>

            <AppFilter/>

            <AppCompanyList/>

        </div>
    );
}

export default App;
