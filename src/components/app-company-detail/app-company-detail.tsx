import './app-company-detail.css'

import logo from '../../assets/images/photosnap.svg'
import React from 'react';


function AppCompanyDetail() {



    return (
        <div className="AppCompanyDetail">

            <div className="CompanyDetail__wrapper">
                <div className="CompanyDetail__logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="CompanyDetail__text">

                    <div className="CompanyDetail__company">
                        <div className="companyTitle">
                            Photosnap
                        </div>

                        <div className="isNew">
                            NEW!
                        </div>
                        <div className="isFeatured">
                            FEATURED
                        </div>

                    </div>
                    <div className="CompanyDetail__title">
                        Senior Fronted Developer
                    </div>
                    <div className="CompanyDetail__description">

                        <ul className="description">
                            <li className="descriptionItem">1d ago</li>
                            <li className="descriptionItem">Full Time</li>
                            <li className="descriptionItem">USA Only</li>
                        </ul>

                    </div>

                </div>
            </div>


            <div className="CompanyDetail__filters">
                <div className="CompanyDetail_filterItem">Frontend</div>
                <div className="CompanyDetail_filterItem">Senior</div>
                <div className="CompanyDetail_filterItem">HTML</div>
                <div className="CompanyDetail_filterItem">CSS</div>
                <div className="CompanyDetail_filterItem">JavaScript</div>
            </div>
        </div>
    );
}

export default AppCompanyDetail;
