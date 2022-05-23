import './app-company-list.css'

import React from 'react';
import AppCompanyDetail from "../app-company-detail/app-company-detail";
import Company from "../../model";


interface Filter {
    name: string;
}


function AppCompanyList(props: { companies: Company[], addFitler: any, filters: string[] }) {

    let addFilter = (filter: string) => {
        props.addFitler(filter)
    }


    const elems = props.companies.map(item => {
        let filtersOfItem = [item.role, item.featured, item.level, ...item.languages, ...item.tools]


        let intersects = props.filters.filter(item => filtersOfItem.includes(item))

        if (props.filters.length === 0) {
            return (
                <AppCompanyDetail key={item.id} company={item} addFilter={addFilter}/>
            )
        } else {
            if (intersects.length > 0) {

                return (
                    <AppCompanyDetail key={item.id} company={item} addFilter={addFilter}/>
                )

            }
        }


    })

    return (
        <div className="AppCompanyList">
            {elems}

        </div>
    );
}

export default AppCompanyList;
