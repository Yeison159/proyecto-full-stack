import React from 'react';
import {PropertyImageWrapper, PropertyInfoWrapper, PropertyTypeCardWrapper} from "./styled";
import {SubTitle} from "../../../../globalStyles";
import {PropertyTypeLabel} from "../../../../components/PropertyTypeLabel";
import {PropertyTypeBusiness} from "../../../../components/PropertyTypeBusiness";

export const PropertyCard = () => {
    return (
        <PropertyTypeCardWrapper>
            <PropertyImageWrapper>
                <img
                    src="https://images.ctfassets.net/8lc7xdlkm4kt/5XZ6f7kcqu0cVgTnFoFnLt/52ac8951ab8edd991e28b383a6eac830/61M2.jpg"
                    alt="apartamento"/>
            </PropertyImageWrapper>
            <PropertyInfoWrapper>
               <h3> Apartamento en laures</h3>
                <SubTitle>Laureles, Medellin</SubTitle>

                <PropertyTypeLabel />
                <PropertyTypeBusiness />
                <p>$400.000</p>
            </PropertyInfoWrapper>
        </PropertyTypeCardWrapper>
    );
};
