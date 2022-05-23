import './app-company-list.css'

import React from 'react';
import AppCompanyDetail from "../app-company-detail/app-company-detail";
import Company from "../../model";


interface Filter {
    position: string
    role: string
    level: string
    postedAt: string
    languages: string[]

}


function AppCompanyList(props: { companies: Company[], addFitler: any, userFilters: string[] }) {

    let addFilter = (filter: string) => {
        props.addFitler(filter)
    }


    const elems = props.companies.map(company => {
        let filtersOfCompany = [company.role,  company.position,  company.level, ...company.languages, ...company.tools]

        let intersects = filtersOfCompany.filter(item => props.userFilters.includes(item))


        if (props.userFilters.length === 0) {
            return (
                <AppCompanyDetail key={company.id} company={company} addFilter={addFilter}/>
            )
        } else {
            if (intersects.length === props.userFilters.length) {

                return (
                    <AppCompanyDetail key={company.id} company={company} addFilter={addFilter}/>
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
