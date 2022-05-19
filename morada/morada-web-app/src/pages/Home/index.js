import React, { useState, useEffect } from "react";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer } from "./styles";
import { IoBusiness, IoHome, IoMap, IoPrism, IoLocation } from 'react-icons/io5'
import { PropertyCard } from "./components/PropertyCard";
import { Page } from "../../components/Page";

const PropertiesTypes = [
    { id: 1, icon: IoBusiness, label: 'Apartamentos' },
    { id: 2, icon: IoHome, label: 'Casas' },
    { id: 3, icon: IoMap, label: 'Lotes' },
    { id: 4, icon: IoPrism, label: 'Fincas' },
    { id: 5, icon: IoLocation, label: 'Locales' },
];

export const Home = () => {

    const [propertyTypeSelected, setPropertyTypeSelected] = useState(1);

    const propertyTypeHandler = (id) => {
        setPropertyTypeSelected(id);
    }

    useEffect(() => {
        // acciones a ejecutar
        console.log('propertyTypeSelected ', propertyTypeSelected);
    }, [propertyTypeSelected]);

    return (
        <Page>
            <h1>Home - morada</h1>
            <PropertyTypesContainer>
                {
                    PropertiesTypes.map((item, i) =>
                        <PropertyTypeButton
                            key={i}
                            selected={propertyTypeSelected === item.id}
                            icon={item.icon}
                            label={item.label}
                            id={item.id}
                            onPress={propertyTypeHandler}
                        /> )
                }
            </PropertyTypesContainer>

            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
        </Page>
    );
};
