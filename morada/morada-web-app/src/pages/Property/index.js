import React from 'react';
import {Page} from "../../components/Page";

import {SubTitle} from "../../globalStyles";
import {PropertyTypeLabel} from "../../components/PropertyTypeLabel";
import {IoPricetags, IoChevronBackOutline, IoMenuOutline, IoLogoWhatsapp, IoLogoWechat, IoStarSharp} from "react-icons/io5";
import {
    PropertyDescripcitionWrapper,
    PropertyHeaderWrapper,
    PropertyImageWrapper,
    PropertyInforWrapper,
    PropertysellerInfoWrapper,
    WrapperPropertyButton,

} from "./styled";
import Hr from "../../components/Hr";
import {PropertyInfo} from "./components/PropertyInfo";
import {PropertyDescription} from "./components/PropertyDescription";
import {PropertysellerInfo} from "./components/PropertysellerInfo";


export const Property = () => {
    return (
        <Page>
            <PropertyHeaderWrapper>
                <div className="container-icon"><IoChevronBackOutline /></div>
                <div className="container-icon"> <IoMenuOutline /></div>
            </PropertyHeaderWrapper>
            <PropertyImageWrapper>
                <img
                    src="https://images.ctfassets.net/8lc7xdlkm4kt/5XZ6f7kcqu0cVgTnFoFnLt/52ac8951ab8edd991e28b383a6eac830/61M2.jpg"
                    alt="apartamento"/>
            </PropertyImageWrapper>
            <PropertyInfo />
            <PropertyDescription />
             <PropertysellerInfo />
            <Hr />
            <WrapperPropertyButton>
                <button >Reservar Ahora</button>
            </WrapperPropertyButton>
        </Page>
    );
};

