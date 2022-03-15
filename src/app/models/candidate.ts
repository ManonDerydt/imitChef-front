import { Reciepe} from "./reciepe";

export class Candidate {
    id: number;
    lastname: string;
    firstname: string;
    image: string;
    Reciepes: Array<Reciepe>
}