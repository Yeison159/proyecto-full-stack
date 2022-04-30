import { Page } from "../../components/Page";
import React from "react";

import {Button} from "../../components/Button";
import {FormControl, PageTitle} from "../../globalStyles";

export const Signup = () => (
    <Page hideMenu>
        <PageTitle>Registro</PageTitle>
        <br />
        <form>
            <FormControl>
                <label>Nombre</label>
                <input type="text" />
            </FormControl>
            <FormControl>
                <label>Apellidos</label>
                <input type="text" />
            </FormControl>
            <FormControl>
                <label>Numero de identificación</label>
                <input type="number" />
            </FormControl>
            <FormControl>
                <label>Correo electrónico</label>
                <input type="email" />
            </FormControl>
            <FormControl>
                <label>Contraseña </label>
                <input type="password" />
            </FormControl>
            <FormControl>
                <label>Confirmar contraseña</label>
                <input type="password" />
            </FormControl>
            <br />
            <Button label="Guardar" onPress={() => alert("Registro")} />
        </form>
    </Page>
);


