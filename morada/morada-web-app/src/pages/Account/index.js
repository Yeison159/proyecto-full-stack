import { Button } from "../../components/Button";
import { Page } from "../../components/Page";
import { PageTitle } from "../../globalStyles";

export const Account = () => {

    const isAuth = false;

    const UserInfo = () => (
        <div>
            <h3>Jerson</h3>
            <h5>9999991111</h5>
            <p>jerson.suaza@cedesistemas.edu.co</p>
            <hr />
            <Button 
                label="Cerrar sesión" 
                onPress={ () => { alert('cerrar sesión') } } 
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
                isAuth ? <UserInfo /> : <UserUnauthorized />
            }
        </Page>
    )
};
