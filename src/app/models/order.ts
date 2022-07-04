import {Reciepe} from "./reciepe";

export class Order {
    id: number;
    time: string;
    discount: string;
    cutlery: string;
    number: string;
    price: string;
    Reciepes: Array<Reciepe>
}