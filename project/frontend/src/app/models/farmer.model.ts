export interface Farmer {
    id          : number;
    document    : Document;
    name        : string;
    address     : Address;
}

export interface Document {
    documentNumber   : string;
    documentType    : string;
}

export interface Address {
    street   : string;
    state    : string;
    address  : string;
    country  : string;
}