# API Morada App

## Modules
- Usuarios
- Propiedades

## API Reference

### Usuarios

Method | Endpoint | Data        | Auth Required
------ | -------- | ----------- | -------------
`GET` | /user/getInfoUser/:id   |  url: id  | Si
`POST` | /user/login   | body: { email, password } | No
`POST` | /user/register   | body: { names, lastnames, id, email, password, confirmPassword } | No


### Propiedades

Method | Endpoint | Data        | Auth Required
------ | -------- | ----------- | -------------
`GET` | /property | query: type, businessType | No
`GET` | /property/:id | url: id               | No
`POST` | /property | body: { title, ... }     | Si
`DELETE` | /property/:id | url: id            | Si
`PUT` | /property/:id | body: { title, ... }  | Si
`POST` | /property/:id | body: {comentario}   | Si