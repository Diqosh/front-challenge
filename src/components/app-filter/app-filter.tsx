import removeIcon from '../../assets/images/icon-remove.svg'
import './app-filter.css'

import React from 'react';


function AppFilter() {
    return (
        <div className="AppFilter">
            <div className="filter__items">

                <div className="filter__item">
                    <div className="item__text">Fronted</div>
                    <div className="item__deleteImage"><img src={removeIcon} alt="Remove Icon"/></div>
                </div>
                <div className="filter__item">
                    <div className="item__text">CSS</div>
                    <div className="item__deleteImage"><img src={removeIcon} alt="Remove Icon"/></div>
                </div>
                <div className="filter__item">
                    <div className="item__text">JavaScript</div>
                    <div className="item__deleteImage"><img src={removeIcon} alt="Remove Icon"/></div>
                </div>

                <input className="filter__addingInput" type="text"/>
            </div>

            <button className="filter__clear">Clear</button>
        </div>
    );
}

export default AppFilter;
