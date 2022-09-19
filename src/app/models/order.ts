import {Reciepe} from "./reciepe";
import {Ingredient} from "./ingredient";
import {Deal} from "./deal";

export class Order {
    id: number;
    time: string;
    date: string;
    hour: string;
    discount: string;
    cutlery: string;
    number: string;
    price: string;
    Reciepes: Array<Reciepe>
    Deals: Array<Deal>
}