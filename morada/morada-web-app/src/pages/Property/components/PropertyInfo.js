import React from 'react';

import {SubTitle} from "../../../globalStyles";
import {IoPricetags, IoStarSharp} from "react-icons/io5";
import {PropertyTypeLabel} from "../../../components/PropertyTypeLabel";
import {PropertyInforWrapper} from "./styled";
import {getCityZoneLabel, getPropertyTypeLabel} from "../../../utils/GetDataConstants";
import {getCurrencyFormat} from "../../../utils/CurrencyFormat";


export const PropertyInfo = ({data}) => {

    return (
        <PropertyInforWrapper>
            <h3>{data.title}</h3>
            <div className="container-subtitle">
                <SubTitle>{getCityZoneLabel(data.city, data.zone)}</SubTitle>
                <div className="rate">
                    <IoStarSharp /> <span>4.5 <small>(250 vistas)</small></span>
                </div>
            </div>

            <div className="info-secudary">
                <div className="container-secundary">
                    <div className="info-secudary-type">
                        <IoPricetags/>
                        <p className="info-type-margin"> {getPropertyTypeLabel(data.propertyType)}</p>
                    </div>
                    <div className= "info-container-secudary-type">
                        <PropertyTypeLabel typeId={data.propertyType}/>
                    </div>
                </div>

            </div>

            <p className="price">{getCurrencyFormat(data.value)}</p>
        </PropertyInforWrapper>
    );
};

