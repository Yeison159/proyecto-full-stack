import React, { useState } from "react";
import { Page } from "../../components/Page";
import {
  FormControl,
  FormControlInput,
  FormControlAction,
  PageTitle,
} from "../../globalStyles";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { IoEye, IoEyeOff } from "react-icons/io5";
import {requestHttp} from "../../utils/HttpRequest";
import { useForm } from "react-hook-form";
import { showAlert, SW_ICON } from "../../utils/SwAlert";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const [visiblePass, setVisiblePass] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const tooglePasswordVisible = () => {
    setVisiblePass(!visiblePass);
  }

  const onSubmitLogin = async (data) => {

   await loginRequest(data);
  };

  const loginRequest = async (data) => {
    try {
      const response = await requestHttp({
        endpoint: "/users/login",
        body: data,
      });
      console.log(response);
      showAlert(
          "Bienvenido",
          "Validación correcta",
          SW_ICON.SUCCESS,
          () => { navigate('/') }
      );
    } catch (error) {
      console.log("error", error);
      showAlert("Error", "Credenciales incorrectas", SW_ICON.ERROR);
    }
  };


  return (
      <Page hideMenu>
        <PageTitle>Iniciar sesión</PageTitle>
        <br />
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          <FormControl>
            <FormControlInput>
              <label>Correo electrónico</label>
              <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /\S+@\S+\.\S+/,
                  })}
              />
              {errors.email?.type === "required" && (
                  <span>El campo correo es requerido</span>
              )}
              {errors.email?.type === "pattern" && (
                  <span>Ingrese un correo electrónico valido</span>
              )}
            </FormControlInput>
          </FormControl>
          <FormControl>
            <FormControlInput>
              <label>Contraseña</label>
              <input
                  type={visiblePass ? "text" : "password"}
                  {...register("password", { required: true })}
              />

              {errors.password?.type === "required" && (
                  <span>El campo contraseña es requerido</span>
              )}
            </FormControlInput>
            <FormControlAction>
              <ButtonIcon
                  icon={visiblePass ? IoEyeOff : IoEye}
                  onPress={tooglePasswordVisible}
              />
            </FormControlAction>
          </FormControl>
          <br />
          <Button
              disabled={!isValid}
              type="submit"
              onPress={() => {}}
              label="Ingresar"
          />
        </form>
      </Page>
  )
};
