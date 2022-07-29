export const PROPERTY_TYPE = {
    1: 'Apartamento',
    2: 'Casa',
    3: 'Lote',
    4: 'Finca',
    5: 'Local'
};

export const BUSINESS_TYPE = {
    1: 'Venta',
    2: 'Renta'
};

export const CITIES = {
    1: {
        city: 'Medellín',
        zones: {
            1: 'Ciudad del Rio',
            2: 'Laureles',
            3: 'Estadio'
        }
    },
    2: {
        city: 'Sabaneta',
        zones: {
            1: 'Parque'
        }
    },
    3: {
        city: 'Rionegro',
        zones: {
            1: 'Llanogrande'
        }
    },
    4: {
        city: 'Envigado',
        zones: {
            1: 'La Paz'
        }
    }
};

export const PROPERTY_TYPE_SELECT = [
    {id: 1, name: 'Apartamento'},
    {id: 2, name: 'Casa'},
    {id: 3, name: 'Lote'},
    {id: 4, name: 'Finca'},
    {id: 5, name: 'Finca'},
];

export const BUSINESS_TYPE_SELECT = [
    {id: 1, name: 'Venta'},
    {id: 2, name: 'Renta'},
];

export const CITIES_SELECT = [
    {
        id: 1,
        name: 'Medellín',
        zones: [
            {id: 1, name: 'Ciudad del Rio'},
            {id: 2, name: 'Laureles'},
            {id: 3, name: 'Estadio'},
        ]
    }, {
        id: 2,
        name: 'Sabaneta',
        zones: [
            {id: 1, name: 'Parque'},
        ]
    }, {
        id: 3,
        name: 'Rionegro',
        zones: [
            {id: 1, name: 'Llanogrande'},
        ]
    }, {
        id: 4,
        name: 'Envigado',
        zones: [
            {id: 1, name: 'La Paz'},
        ]
    },
];

