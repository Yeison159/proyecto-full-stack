import React, {useEffect, useState} from 'react';
import {Page} from "../../components/Page";
import { useParams } from "react-router-dom";

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
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";
import {getStaticImage} from "../../utils/StaticImage";

export const Property = () => {
    const {idProperty} = useParams()

    const [propertyDetail, setPropertyDetail] = useState({});
    const requestProperties = async () => {
        try {
            const response = await requestHttp({
                method: HTTP_VERBS.GET,
                endpoint: `/properties/${idProperty}`,
            });
            const data = response.data;
            setPropertyDetail({...data.property})

        } catch (error) {
            // TODO
        }
    };
    useEffect(() => {
        requestProperties()

    }, [idProperty]);

    return (
        <Page>
            <PropertyHeaderWrapper>
                <div className="container-icon"><IoChevronBackOutline /></div>
                <div className="container-icon"> <IoMenuOutline /></div>
            </PropertyHeaderWrapper>
            <PropertyImageWrapper>
                <img alt="foto propiedad" src={getStaticImage(propertyDetail.mainImage)} />
            </PropertyImageWrapper>
            <PropertyInfo data={{...propertyDetail}}  />
           <PropertyDescription description={propertyDetail.description} />
            {propertyDetail.ownerId &&  <PropertysellerInfo propietario={propertyDetail.ownerId}/>}
             <Hr />
            <WrapperPropertyButton>
                <button >Reservar Ahora</button>
            </WrapperPropertyButton>*/}
        </Page>
    );
};

