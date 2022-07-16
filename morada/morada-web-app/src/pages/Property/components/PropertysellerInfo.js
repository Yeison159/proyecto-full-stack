import React from 'react';
import {PropertysellerInfoWrapper} from "./styled";
import {SubTitle} from "../../../globalStyles";
import {IoLogoWechat, IoLogoWhatsapp} from "react-icons/io5";


export const PropertysellerInfo = ({propietario}) => {
    return (
        <PropertysellerInfoWrapper>
            <div className="sale-info">
                <div className="imagen">
                    <img width="100%" height="80%" src={require("../../../assets/img/profile.jpg")}/>
                </div>
                <div className="seller-info">
                    <SubTitle>Propietario</SubTitle>
                    <hr/>
                    <h4>{propietario.name} </h4>
                    <h4>{propietario.email} </h4>
                </div>
            </div>
            <div className="info-sale-icon">
                <div className="icons message"><IoLogoWechat /></div>
                <div className="icons whatsapp"><IoLogoWhatsapp /></div>
            </div>
        </PropertysellerInfoWrapper>
    );
};


