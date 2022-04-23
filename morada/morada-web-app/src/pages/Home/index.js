import React from "react";
import {PropertyTypeButton} from "./components/PropertyTypeButton";
import {
    PropertyTypesContainer,
    PropertyTypesContainerDos,
    PropertyTypesContainerIcon,
    PropertyTypesContainerProfile
} from "./styles";

import {PropertyProfile} from "./components/PropertyProfile";
import { IoNotificationsOutline } from "react-icons/io5";
import {IoBusiness, IoHome, IoMap, IoPrism, IoLocation} from "react-icons/io5";
import {PropertyCard} from "./components/PropertyCard";
import {Page} from "../../components/Page";

const PropertyTypes = [
    {icon: IoBusiness, label: "Apartamentos"},
    {icon: IoHome, label: "Casas"},
    {icon: IoMap, label: "Lotes"},
    {icon: IoPrism, label: "Fincas"},
    {icon:IoLocation, label: "Locales"},
]
export const Home = () =>
    (
        <Page>
            <PropertyTypesContainerProfile>
                <PropertyProfile />
                <PropertyTypesContainerIcon>
                    <IoNotificationsOutline  />
                </PropertyTypesContainerIcon>
            </PropertyTypesContainerProfile>

            <PropertyTypesContainerDos>
                <p> Find</p>
                <p className="descripcion"> best place <span>nearby</span></p>
            </PropertyTypesContainerDos>

            <PropertyTypesContainer>
                {
                    PropertyTypes.map((item, key) => <PropertyTypeButton icon={item.icon} label={item.label} key={key}/>)
                }

            </PropertyTypesContainer>

            <PropertyCard />
        </Page>
    );
