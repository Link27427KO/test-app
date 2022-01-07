export interface ICompany {
    bs: string
    catchPhrase: string
    name: string
}

export interface IGeo {
    lat: string
    lng: string
}

export interface IAddress {
    city: string
    geo: IGeo
    street: string
    suite: string
    zipcode: string
}

export interface IUser {
    address: IAddress
    company: ICompany
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
}

export interface IPost {
    body: string
    id: number
    title: string
    userId: number
}

export interface IAlbum {
    id: number
    title: string
    userId: number
}