import { Page } from "../../components/Page";

import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../../contexts/UserContext";
import {HTTP_VERBS, requestHttp} from "../../utils/HttpRequest";
import {PropertyCard} from "../Home/components/PropertyCard";
import {PageTitle} from "../../globalStyles";

export const Favorites = () => {
    const { user } = useContext(UserContext);
    const [favoriteList, setFavoriteList] = useState([]);

    const requestGetFavorites = async () => {
        try {
            if (user.idUser !== 0 && user.idUser !== undefined) {
                const id = user.idUser;
                const response = await requestHttp({
                    method: HTTP_VERBS.GET,
                    endpoint: `/favorites/${id}`,
                });
                const data = response.data;

                setFavoriteList(data.favorites)
            }

        } catch (error) {
            // TODO
        }
    };
    useEffect(() => {
        requestGetFavorites()
    }, [user.idUser]);


    return (
        <Page>
            <PageTitle>Favoritos</PageTitle>
            {
                favoriteList.length > 0 && favoriteList.map((item, key) => <PropertyCard {...item.propertyId} key={key} /> )
            }
        </Page>
    );
};
