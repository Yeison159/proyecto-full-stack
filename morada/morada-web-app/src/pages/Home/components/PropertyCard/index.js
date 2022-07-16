import React from 'react';
import {
    PropertyImageWrapper,
    PropertyTypeCardWrapper,
    PropertyInfoWrapper,
    PropertyValueWrapper
} from "./styled";
import {SubTitle} from "../../../../globalStyles";
import { getCurrencyFormat } from "../../../../utils/CurrencyFormat";
import { getCityZoneLabel } from "../../../../utils/GetDataConstants";
import { getStaticImage } from "../../../../utils/StaticImage";
import {PropertyTypeLabel} from "../../../../components/PropertyTypeLabel";
import {PropertyTypeBusiness} from "../../../../components/PropertyTypeBusiness";

export const PropertyCard = (props) => {
    console.log(getStaticImage(props.mainImage))
    return (
        <PropertyTypeCardWrapper to={`/property/${props._id}`}>
            <PropertyImageWrapper>
                <img alt="foto propiedad" src={getStaticImage(props.mainImage)} />
            </PropertyImageWrapper>
            <PropertyInfoWrapper>
                <h3>{props.title}</h3>
                <SubTitle>{getCityZoneLabel(props.city, props.zone)}</SubTitle>

                <PropertyTypeLabel typeId={props.propertyType} />
                <PropertyTypeBusiness businessType={props.businessType}/>
                <PropertyValueWrapper>{getCurrencyFormat(props.value)}</PropertyValueWrapper>
            </PropertyInfoWrapper>
        </PropertyTypeCardWrapper>
    );
};
