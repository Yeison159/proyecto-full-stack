import React from 'react';
import {PropertyTypeDesc, PropertyTypeImg, PropertyTypeProfile} from "./styles";


export const PropertyProfile = () => {
    return (
        <PropertyTypeProfile>
            <PropertyTypeImg>
               <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="img" width="50px" height="50px"/>
            </PropertyTypeImg>
            <PropertyTypeDesc>
                <p style={{fontWeight: '400', textTransform: 'uppercase', color: '#DADCE5'}}>hi,</p>
                <p style={{fontWeight: '700', textTransform: 'Capitalize', color: '#4A546C'}}>yeison estiven guzman</p>
            </PropertyTypeDesc>

        </PropertyTypeProfile>
    );
};
