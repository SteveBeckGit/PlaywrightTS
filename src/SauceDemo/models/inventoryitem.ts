export class InventoryItem{
    Name! : string;
    Description!: string;
    Price! : number;

    constructor(init?: Partial<InventoryItem>){
        Object.assign(this,init);
    }
}