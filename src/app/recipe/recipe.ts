export class Recipe {
    id?: number;
    name: string = '';
    minute: number = 0;
    feature: string = '';
    manner: string = '';
    serve?: number;
    ingre?: {
        name: string;
        amount: string;
    }[];
}