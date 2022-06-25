import {Page} from "../../components/Page";
import React, {useState} from "react";

import {Button} from "../../components/Button";
import {FormControl, FormControlAction, FormControlInput, PageTitle} from "../../globalStyles";
import {ButtonIcon} from "../../components/ButtonIcon";
import {IoEye, IoEyeOff} from "react-icons/io5";
import {useForm} from "react-hook-form";
import {requestHttp} from "../../utils/HttpRequest";
import {showAlert, SW_ICON} from "../../utils/SwAlert";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [visiblePass, setVisiblePass] = useState(false);
    const [visibleConfirmPass, setVisibleConfirmPass] = useState(false);
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm();
    const navigate = useNavigate();
    const tooglePasswordVisible = () => {
        setVisiblePass(!visiblePass);
    }

    const tooglePasswordConfirmVisible = () => {
        setVisibleConfirmPass(!visibleConfirmPass);
    }
    const onSubmit = async (data ) =>{
        await singUpRequest(data);
    }

    const singUpRequest = async (data) =>{
        try {
            const response = await requestHttp({
                endpoint: "/users/signup",
                body: data,
            });
            console.log(response);
            showAlert(
                "Bienvenido",
                "Validación correcta",
                SW_ICON.SUCCESS,
                () => { navigate('/login') }
            );
        } catch (error) {
            console.log("error", error);
            showAlert("Error", "Credenciales incorrectas", SW_ICON.ERROR);
        }
    }
    return (
        <Page hideMenu>
            <PageTitle>Registro</PageTitle>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <FormControlInput>
                        <label>Nombre</label>
                        <input type="text"  {...register("name", { required: true })}/>
                        {errors.name?.type === "required" && (
                            <span>El campo correo es requerido</span>
                        )}
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Tipo de documento</label>
                        <select  {...register("documentType", { required: true })}>
                            <option value="">seleccione</option>
                            <option value="1">Cedula</option>
                            <option value="2">Cedula de extrangería</option>
                        </select>
                        {errors.documentType?.type === "required" && (
                            <span>El campo correo es requerido</span>
                        )}
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Numero de identificación</label>
                        <input type="number" {...register("document", { required: true, maxLength: 12 })}/>
                        {errors.document?.type === "required" && (
                            <span>El campo correo es requerido</span>
                        )}
                        {errors.document?.type === "maxLength" && (
                            <span>El campo debe ser máximo de 12 caracteres</span>
                        )}
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Correo electrónico</label>
                        <input type="email"  {...register("email", {
                            required: true,
                            pattern: /\S+@\S+\.\S+/,
                        })}/>
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
                        <input type={visiblePass ? "text" : "password" }  {...register("password", { required: true, maxLength: 10})} />
                        {errors.password?.type === "required" && (
                            <span>El campo contraseña es requerido</span>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <span>El campo debe ser máximo de 10 caracteres</span>
                        )}
                    </FormControlInput>
                    <FormControlAction>
                        <ButtonIcon icon={visiblePass ? IoEyeOff : IoEye} onPress={tooglePasswordVisible} />
                    </FormControlAction>
                </FormControl>

                <FormControl>
                    <FormControlInput>
                        <label>Confirmar contraseña</label>
                        <input type={visibleConfirmPass ? "text" : "password" } {...register("confirmPassword", { required: true, maxLength: 10})} />
                        {errors.confirmPassword?.type === "required" && (
                            <span>El campo contraseña es requerido</span>
                        )}
                    </FormControlInput>
                    <FormControlAction>
                        <ButtonIcon icon={visibleConfirmPass ? IoEyeOff : IoEye} onPress={tooglePasswordConfirmVisible} />
                    </FormControlAction>
                </FormControl>
                <br/>
                <Button

                    type="submit"
                    onPress={() => {}}
                    label="Ingresar"
                />
            </form>
        </Page>
    );
}


