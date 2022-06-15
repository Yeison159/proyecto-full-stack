# API Morada App

## Modules
- Usuarios
- Propiedades

## API Reference

### Usuarios

Method | Endpoint | Data        | Auth Required
------ | -------- | ----------- | -------------
`POST` | /user/login   | body: { email, password } | No
`POST` | /user/info   |                             | Si


### Propiedades

Method | Endpoint | Data        | Auth Required | Description
------ | -------- | ----------- | ------------- | ------------
`GET` | /properties | query: type, businessType | No | Obtener todas las propiedades con opción de filtro
`GET` | /properties/:id | url: id               | No | Obtener una sola propiedad / detalle
`POST` | /properties | body: { title, ... }     | Si | Agregar una propiedad
`DELETE` | /properties/:id | url: id            | Si | Eliminar una propiedad
`PUT` | /properties/:id | body: { title, ... }  | Si | Actualizar una propiedad
`POST` | /properties/:id | body: {comentario}   | Si | Notificar interés sobre una propiedad