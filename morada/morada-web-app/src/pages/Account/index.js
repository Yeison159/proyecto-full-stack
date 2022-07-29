import { Button } from "../../components/Button";
import { Page } from "../../components/Page";
import { UserContext } from "../../contexts/UserContext";
import { PageTitle } from "../../globalStyles";
import React, {useContext} from "react";
import {removeToken} from "../../utils/TokenLS";
import { Link } from "react-router-dom";

export const Account = () => {

    const { user, setUser } = useContext(UserContext);

    const closeSession = () => {
        setUser({
            name: '',
            phone:'',
            role: 0,
            identification:'',
            email:'',
            isAuthenticated: false,
        });
        removeToken()
    }
    const UserInfo = () => (
        <div>
            <h3>{user.name}</h3>
            <h5>{user.phone}</h5>
            <p>{user.email}</p>
            <Link to='/favorites'> Ver favoritos</Link>

            <hr />

            <Button
                label="Cerrar sesión"
                onPress={closeSession }
            />
        </div>
    )

    const UserUnauthorized = () => (
        <div>
            <h2>No estás autenticado</h2>
            <p>Para acceder a tu perfil de usurio debes iniciar sesión</p>
            <hr />
            <Button label="Iniciar sesión" linkTo="/login" />
        </div>
    )

    return (
        <Page>
            <PageTitle>Mi cuenta</PageTitle>
            {
                user.isAuthenticated ? <UserInfo /> : <UserUnauthorized />
            }
        </Page>
    )
};
