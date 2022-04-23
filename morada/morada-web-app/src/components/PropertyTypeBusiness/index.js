import React from 'react';
import {PropertyTypeBusinessWrapper} from "./styled";
import { IoPricetags } from "react-icons/io5";
export const PropertyTypeBusiness = ({businessType}) => {
    return (
        <PropertyTypeBusinessWrapper>
            <IoPricetags />
           <p>Venta</p>
        </PropertyTypeBusinessWrapper>
    );
};
