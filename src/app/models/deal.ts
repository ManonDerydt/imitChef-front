import {Order} from "./order";

export class Deal {
    id: number;
    deadline: string;
    max_people: string;
    price: string;
    image: string;
    adress: string;
    city: string;
    number: string;
    email: string;
    chef: string;
    restaurant: string;
    menu: string;
    Orders: Array<Order>;
}