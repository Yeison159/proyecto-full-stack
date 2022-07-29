import React, {useContext, useEffect, useState} from 'react';
import {Page} from "../components/Page";
import {FormControl, FormControlInput, PageTitle} from "../../globalStyles";
import {POCUploadImage} from "../POCUploadImage";
import Hr from "../../components/Hr";
import {useForm} from "react-hook-form";
import {requestHttp} from "../../utils/HttpRequest";
import {BUSINESS_TYPE_SELECT, CITIES, CITIES_SELECT, PROPERTY_TYPE_SELECT} from "../../constantes/data";
import {Button} from "../../components/Button";
import {UserContext} from "../../contexts/UserContext";
import {showAlert, SW_ICON} from "../../utils/SwAlert";


const PropertyAdmin = () => {
    const {register, handleSubmit, watch, resetField, formState: {errors, isValid}} = useForm();
    const [mainImage, setmainImage] = useState(null);
    const {user} = useContext(UserContext);
    const [zoneList, setZoneList] = useState([]);
    const watchShowCitie = watch("city");

    useEffect(() => {

        const zonesObjet = CITIES_SELECT.find((city) => {
            if (Number(watchShowCitie) === Number(city.id)) {
                return Number(watchShowCitie) === Number(city.id);
            }
        })

        if (zonesObjet !== undefined) {
            const {zones} = zonesObjet
            setZoneList(zones);
        }

    }, [watchShowCitie]);


    const getImageName = (e) => {
        setmainImage(e)
    }

    const onSubmit = async (data) => {
        try {
            const payLoad = {
                ...data,
                ownerId: user.idUser,
                status: 1,
                images: [],
                mainImage
            }

            const response = await requestHttp({
                endpoint: "/properties",
                body: payLoad,
            });

            showAlert(
                "Éxito",
                'Propiedad agregada de manera correcta',
                SW_ICON.SUCCESS,
                () => {
                    resetField('title');
                    resetField('propertyType');
                    resetField('businessType');
                    resetField('city');
                    resetField('zone');
                    resetField('value');
                    resetField('shortDescription');
                    resetField('description');
                    setZoneList([]);
                    setmainImage(null)
                }
            );

        } catch (e) {
            showAlert("Error", e.response.data, SW_ICON.ERROR);
        }

    }

    return (
        <Page>
            <PageTitle>Agregar Propiedad</PageTitle>
            {mainImage === null && <POCUploadImage getNameImage={getImageName}/>}
            <Hr/>
            {mainImage !== null &&
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl>
                        <FormControlInput>
                            <label>Titulo</label>
                            <input type="text"  {...register("title", {required: true})}/>
                            {errors.title?.type === "required" && (
                                <span>El campo correo es requerido</span>
                            )}
                        </FormControlInput>
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>Tipo de propiedad</label>
                            <select  {...register("propertyType", {required: true})}>
                                <option value="">seleccione</option>
                                {PROPERTY_TYPE_SELECT.map((itm, i) => <option key={i}
                                                                              value={itm.id}>{itm.name}</option>)}
                            </select>
                            {errors.propertyType?.type === "required" && (
                                <span>El campo correo es requerido</span>
                            )}
                        </FormControlInput>
                    </FormControl>

                    <FormControl>
                        <FormControlInput>
                            <label>Tipo de negocio</label>
                            <select  {...register("businessType", {required: true})}>
                                <option value="">seleccione</option>
                                {BUSINESS_TYPE_SELECT.map((itm, i) => <option key={i}
                                                                              value={itm.id}>{itm.name}</option>)}
                            </select>
                            {errors.businessType?.type === "required" && (
                                <span>El campo correo es requerido</span>
                            )}
                        </FormControlInput>
                    </FormControl>

                    <FormControl>
                        <FormControlInput>
                            <label>Ciudad</label>
                            <select  {...register("city", {required: true})}>
                                <option value="">seleccione</option>
                                {CITIES_SELECT.map((itm, i) => <option key={i} value={itm.id}>{itm.name}</option>)}
                            </select>
                            {errors.city?.type === "required" && (
                                <span>El campo correo es requerido</span>
                            )}
                        </FormControlInput>
                    </FormControl>
                    {zoneList.length > 0 && <FormControl>
                        <FormControlInput>
                            <label>Zonas</label>
                            <select  {...register("zone", {required: true})}>
                                <option value="">seleccione</option>
                                {zoneList.map((itm, i) => <option key={i} value={itm.id}>{itm.name}</option>)}
                            </select>
                            {errors.zone?.type === "required" && (
                                <span>El campo correo es requerido</span>
                            )}
                        </FormControlInput>
                    </FormControl>}
                    <FormControl>
                        <FormControlInput>
                            <label>Valor</label>
                            <input type="number"  {...register("value", {required: true})}/>
                            {errors.value?.type === "required" && (
                                <span>El campo correo es requerido</span>
                            )}
                        </FormControlInput>
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>Descripción corta</label>
                            <textarea {...register("shortDescription", {required: true, maxLength: 50})} rows={2}>
                            </textarea>
                            {errors.shortDescription?.type === "required" && (
                                <span>El campo correo es requerido</span>
                            )}
                            {errors.shortDescription?.type === "maxLength" && (
                                <span>campo máximo de 50 caractere</span>
                            )}
                        </FormControlInput>
                    </FormControl>

                    <FormControl>
                        <FormControlInput>
                            <label>Descripción</label>
                            <textarea {...register("description", {required: true, maxLength: 80})} rows={3}>
                            </textarea>
                            {errors.description?.type === "required" && (
                                <span>El campo correo es requerido</span>
                            )}
                            {errors.description?.type === "maxLength" && (
                                <span>campo máximo de 80 caractere</span>
                            )}
                        </FormControlInput>
                    </FormControl>
                    <br/>
                    <Button

                        type="submit"
                        onPress={() => {
                        }}
                        label="Guardar"
                    />
                </form>}
        </Page>
    );
};

export default PropertyAdmin;
