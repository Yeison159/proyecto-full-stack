import { Fragment, useState } from "react";
import { Button } from "../../components/Button";
import { CONTENT_TYPES, requestHttp } from "../../utils/HttpRequest";
import { showAlert, SW_ICON } from "../../utils/SwAlert";

export const POCUploadImage = ({getNameImage}) => {
    const [file, setFile] = useState(null);

    const fileSelectedHandler = (event) => {
        const fileSelected = event.target.files[0];
        setFile(fileSelected);
        //requestUploadFile(fileSelected);
    };

    const uploadFileHandler = (event) => {
        if (file) {
            requestUploadFile(file);
        } else {
            showAlert("Error", "Selecciona un archivo", SW_ICON.ERROR);
        }
    };

    const requestUploadFile = async (file) => {
        try {
            const formData = new FormData();
            formData.append("propertyImage", file);
            const response = await requestHttp({
                endpoint: "/properties/upload",
                contentType: CONTENT_TYPES.MULTIPART_FORM_DATA,
                body: formData,
            });
            const data = response.data.fileName ? response.data.fileName : '';
            getNameImage(data);
            showAlert('Archivo cargado', 'El archivo fue subido', SW_ICON.SUCCESS);

        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <Fragment>
            <h2>Upload Image</h2>
            <input
                type="file"
                accept="image/png, image/jpeg"
                //multiple
                onChange={fileSelectedHandler}
            />
            <br /><br />
            <Button label={"Subir Imagen"} onPress={uploadFileHandler} />
        </Fragment>
    );
};
