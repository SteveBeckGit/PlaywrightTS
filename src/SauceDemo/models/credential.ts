export class Credential{
    username! : string;
    password! : string;

    constructor(init?: Partial<Credential>){
        Object.assign(this,init);
    }
}