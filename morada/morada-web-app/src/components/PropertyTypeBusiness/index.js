import React from 'react';
import { getBusinessTypeLabel } from '../../utils/GetDataConstants';
import {PropertyTypeBusinessWrapper} from "./styled";
import { IoPricetags } from "react-icons/io5";
export const PropertyTypeBusiness = ({businessType}) => {
    return (
        <PropertyTypeBusinessWrapper>
            <IoPricetags />
            <p>{getBusinessTypeLabel(businessType)}</p>
        </PropertyTypeBusinessWrapper>
    );
};
