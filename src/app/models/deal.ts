import { Restaurant } from "./restaurant";

export class Deal {
    id: number;
    deadline: string;
    max_people: string;
    price: string;
    Restaurants: Array<Restaurant>
}