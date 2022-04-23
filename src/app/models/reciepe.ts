import { Candidate } from "./candidate";
import { Ingredient } from "./ingredient";

export class Reciepe {
    id: number;
    image: string;
    description: string;
    titre: string;
    time_cooking: number;
    difficulty: string;
    Ingredients: Array<Ingredient>
    Candidates: Array<Candidate>;
}