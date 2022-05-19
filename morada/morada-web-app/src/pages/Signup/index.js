import {Page} from "../../components/Page";
import React, {useState} from "react";

import {Button} from "../../components/Button";
import {FormControl, FormControlAction, FormControlInput, PageTitle} from "../../globalStyles";
import {ButtonIcon} from "../../components/ButtonIcon";
import {IoEye, IoEyeOff} from "react-icons/io5";

export const Signup = () => {
    const [visiblePass, setVisiblePass] = useState(false);
    const [visibleConfirmPass, setVisibleConfirmPass] = useState(false);

    const tooglePasswordVisible = () => {
        setVisiblePass(!visiblePass);
    }

    const tooglePasswordConfirmVisible = () => {
        setVisibleConfirmPass(!visibleConfirmPass);
    }

    return (
        <Page hideMenu>
            <PageTitle>Registro</PageTitle>
            <br/>
            <form>
                <FormControl>
                    <FormControlInput>
                        <label>Nombre</label>
                        <input type="text"/>
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Apellidos</label>
                        <input type="text"/>
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Numero de identificación</label>
                        <input type="number"/>
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Correo electrónico</label>
                        <input type="email"/>
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Contraseña</label>
                        <input type={visiblePass ? "text" : "password" } />
                    </FormControlInput>
                    <FormControlAction>
                        <ButtonIcon icon={visiblePass ? IoEyeOff : IoEye} onPress={tooglePasswordVisible} />
                    </FormControlAction>
                </FormControl>

                <FormControl>
                    <FormControlInput>
                        <label>Confirmar contraseña</label>
                        <input type={visibleConfirmPass ? "text" : "password" } />
                    </FormControlInput>
                    <FormControlAction>
                        <ButtonIcon icon={visibleConfirmPass ? IoEyeOff : IoEye} onPress={tooglePasswordConfirmVisible} />
                    </FormControlAction>
                </FormControl>
                <br/>
                <Button label="Guardar" onPress={() => alert("Registro")}/>
            </form>
        </Page>
    );
}


