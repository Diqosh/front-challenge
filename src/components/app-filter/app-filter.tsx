import removeIcon from '../../assets/images/icon-remove.svg'
import './app-filter.css'

import React, {useState, MouseEvent} from 'react';
import Company from "../../model";

interface Filter {
    name: any;
}
function AppFilter(props: {
    filters: string[],
    deleteFilters: any,
    clearFilters: any
}){

    let className = 'AppFilter '

    if (props.filters.length === 0){
        className += 'minimize'
    }

    let displayFilters = props.filters.map((filter, index) => {


        return (
            <div key={index} className="filter__item">
                <div className="item__text">{filter}</div>
                <div className="item__deleteImage" onClick={() => props.deleteFilters(index)}><img src={removeIcon}
                                                                                             alt="Remove Icon"/></div>
            </div>
        )

    })


    return (


        <div className={className}>
            <div className="filter__items">

                {displayFilters}


                {/*<input className="filter__addingInput" type="text"/>*/}
            </div>

            <button className="filter__clear" onClick={() => props.clearFilters()}>Clear</button>
        </div>
    );
}

export default AppFilter;
