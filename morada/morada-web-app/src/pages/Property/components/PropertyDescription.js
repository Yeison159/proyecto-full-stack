import React from 'react';
import {PropertyDescripcitionWrapper} from "./styled";



export const PropertyDescription = ({description}) => {
    return (
        <PropertyDescripcitionWrapper>
            <h4>descripcion</h4>
            <p>{description}</p>
        </PropertyDescripcitionWrapper>
    );
};


