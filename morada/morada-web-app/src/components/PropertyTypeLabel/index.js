import React from 'react';
import { getPropertyTypeLabel } from "../../utils/GetDataConstants";
import {PropertyTypeLabelWrapper} from "./styled";

export const PropertyTypeLabel = ({typeId}) => {
    return (
        <PropertyTypeLabelWrapper>
            <p>{ getPropertyTypeLabel(typeId) }</p>
        </PropertyTypeLabelWrapper>
    );
};

