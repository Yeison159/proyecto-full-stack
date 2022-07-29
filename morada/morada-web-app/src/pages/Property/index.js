import React, {useContext, useEffect, useState} from 'react';
import {Page} from "../../components/Page";
import { useParams } from "react-router-dom";

import {SubTitle} from "../../globalStyles";
import {PropertyTypeLabel} from "../../components/PropertyTypeLabel";
import {IoPricetags, IoChevronBackOutline, IoMenuOutline, IoLogoWhatsapp, IoLogoWechat, IoStarSharp} from "react-icons/io5";
import {
    PropertyHeaderWrapper,
    PropertyImageWrapper,
    WrapperPropertyButton,

} from "./styled";
import Hr from "../../components/Hr";
import {PropertyInfo} from "./components/PropertyInfo";
import {PropertyDescription} from "./components/PropertyDescription";
import {PropertysellerInfo} from "./components/PropertysellerInfo";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";
import {getStaticImage} from "../../utils/StaticImage";
import {UserContext} from "../../contexts/UserContext";
import {showAlert, SW_ICON} from "../../utils/SwAlert";

export const Property = () => {
    const {idProperty} = useParams()
    const { user, setUser } = useContext(UserContext);

    const [propertyDetail, setPropertyDetail] = useState({});
    
    const addFavorites = async () =>{
        try{
            const payload = {
                propertyId: idProperty,
                userId: user.idUser
            };
            const response = await requestHttp({
                method: HTTP_VERBS.POST,
                endpoint: `/favorites`,
                body: payload
            });



            showAlert(
                "Éxito",
                'Propiedad agregada de a favoritos',
                SW_ICON.SUCCESS,

            );

        }catch (e) {
            console.log()
            showAlert("Error", e.response.data, SW_ICON.ERROR);
        }
    }
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
            {user.isAuthenticated && <WrapperPropertyButton>
                <button >Reservar Ahora</button>

            </WrapperPropertyButton>}
            <Hr />
            {user.isAuthenticated && <WrapperPropertyButton>
                <button onClick={addFavorites} >Agregar a favoritos</button>
            </WrapperPropertyButton>}

        </Page>
    );
};

