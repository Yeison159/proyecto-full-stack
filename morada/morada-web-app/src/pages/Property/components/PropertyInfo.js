import React from 'react';

import {SubTitle} from "../../../globalStyles";
import {IoPricetags, IoStarSharp} from "react-icons/io5";
import {PropertyTypeLabel} from "../../../components/PropertyTypeLabel";
import {PropertyInforWrapper} from "./styled";


export const PropertyInfo = () => {
    return (
        <PropertyInforWrapper>
            <h3> Apartamento en laures</h3>
            <div className="container-subtitle">
                <SubTitle>Laureles, Medellin</SubTitle>
                <div className="rate">
                    <IoStarSharp /> <span>4.5 <small>(250 vistas)</small></span>
                </div>
            </div>

            <div className="info-secudary">
                <div className="container-secundary">
                    <div className="info-secudary-type">
                        <IoPricetags/>
                        <p className="info-type-margin">Venta</p>
                    </div>
                    <div className= "info-container-secudary-type">
                        <PropertyTypeLabel/>
                    </div>
                </div>

            </div>

            <p className="price">$400.000</p>
        </PropertyInforWrapper>
    );
};

