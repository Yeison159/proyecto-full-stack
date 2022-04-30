import { Page } from "../../components/Page";
import { FormControl, PageTitle } from "../../globalStyles";
import { Button } from "../../components/Button";
import React from "react";

export const Login = () => (
  <Page hideMenu>
    <PageTitle>Iniciar sesión</PageTitle>
    <br />
    <form>
      <FormControl>
        <label>Correo electrónico</label>
        <input type="email" />
      </FormControl>
      <FormControl>
        <label>Contraseña</label>
        <input type="password" />
      </FormControl>
      <br />
      <Button label="Ingresar" onPress={() => alert("Iniciar sesión")} />
    </form>
  </Page>
);
