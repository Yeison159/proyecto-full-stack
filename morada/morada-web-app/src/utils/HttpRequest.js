import axios from "axios";
import { getToken } from "./TokenLS";

export const HTTP_VERBS = {
    POST: "post",
    GET: "get",
    PUT: "put",
    DELETE: "delete",
};

export const CONTENT_TYPES = {
    APPLICATION_JSON: 'application/json',
    MULTIPART_FORM_DATA: 'multipart/form-data'
}

const headersConfig = (contentType, token) => {
    return {
        "Content-Type": "application/json",
        Accept: contentType,
        Authorization: `Bearer ${token}`
    }
};

export const requestHttp = async ({
                                      method = HTTP_VERBS.POST,
                                      endpoint = '/',
                                      body = {},
                                      params = {}, //query params
                                      token = null,
                                      contentType = CONTENT_TYPES.APPLICATION_JSON
                                  }) => {
    try {
        const url = process.env.REACT_APP_BASE_API + endpoint;
        const authToken = token || getToken();
        const options = {
            url,
            method,
            data: body,
            params,
            headers: headersConfig(contentType, authToken)
        };
        return await axios(options);
    } catch (error) {
        throw error;
    }
};
