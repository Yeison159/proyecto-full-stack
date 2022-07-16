import React, { useState, useEffect, useContext  } from "react";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer } from "./styles";
import {
    IoBusiness,
    IoHome,
    IoMap,
    IoPrism,
    IoLocation,
} from "react-icons/io5";
import { PropertyCard } from "./components/PropertyCard";
import { Page } from "../../components/Page";
import { UserContext } from "../../contexts/UserContext";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";
const ALL_PROPERTIES_TYPES = 0;

const PropertiesTypes = [
    { id: 1, icon: IoBusiness, label: "Apartamentos" },
    { id: 2, icon: IoHome, label: "Casas" },
    { id: 3, icon: IoMap, label: "Lotes" },
    { id: 4, icon: IoPrism, label: "Fincas" },
    { id: 5, icon: IoLocation, label: "Locales" },
];

export const Home = () => {

    const [propertyTypeSelected, setPropertyTypeSelected] = useState(ALL_PROPERTIES_TYPES);
    const { user, setUser } = useContext(UserContext);
    const [properties, setProperties] = useState([]);
    const propertyTypeHandler = (idNewSelected) => {
        setPropertyTypeSelected(propertyTypeSelected === idNewSelected
            ? ALL_PROPERTIES_TYPES : idNewSelected);
    };

    useEffect(() => {
        // acciones a ejecutar
        requestProperties();
    }, [propertyTypeSelected]);

    const requestProperties = async () => {
        try {
            const response = await requestHttp({
                method: HTTP_VERBS.GET,
                endpoint: "/properties",
                params: makePropertiesFilter()
            });
            setProperties(response.data.properties);
        } catch (error) {
            // TODO
        }
    };

    const makePropertiesFilter = () => {
        const filters = {};
        if (propertyTypeSelected !== ALL_PROPERTIES_TYPES) {
            filters['propertyType'] = propertyTypeSelected;
        }
        return filters;
    }

    return (
        <Page>
            <h1>Home - morada</h1>
            <h4>{user.name}</h4>
            <PropertyTypesContainer>
                {PropertiesTypes.map((item, key) => (
                    <PropertyTypeButton
                        selected={propertyTypeSelected === item.id}
                        icon={item.icon}
                        label={item.label}
                        id={item.id}
                        onPress={propertyTypeHandler}
                        key={key}
                    />
                ))}
            </PropertyTypesContainer>

            {
                properties.map((item, key) => <PropertyCard {...item} key={key} /> )
            }
        </Page>
    );
};
