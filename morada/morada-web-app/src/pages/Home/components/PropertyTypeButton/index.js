import React from 'react';
import {IconWrapper, PropertyTypeButtonWrapper} from './styles';
export const PropertyTypeButton = ({icon: Icon, label}) => {
    return (
        <PropertyTypeButtonWrapper>
            <IconWrapper>
                <Icon />
            </IconWrapper>
            <p> {label}</p>
        </PropertyTypeButtonWrapper>
    );
};
