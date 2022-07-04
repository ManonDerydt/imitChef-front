import {Reciepe} from "./reciepe";

export class Restaurant {
    id: number;
    name: string;
    city: string;
    country: string;
    category: string;
    chef: string;
    image: string;
    description: string;
    discount: string;
    adress: string;
    number: string;
    email: string;
    Reciepes: Array<Reciepe>
}