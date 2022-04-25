import { Candidate } from "./candidate";
import { Ingredient } from "./ingredient";
import { Material } from "./material";
import { Step } from "./step";

export class Reciepe {
    id: number;
    image: string;
    description: string;
    titre: string;
    time_cooking: number;
    difficulty: string;
    Ingredients: Array<Ingredient>
    Steps: Array<Step>
    Materials: Array<Material>
    Candidates: Array<Candidate>;
}