import { Page } from '@playwright/test';
import { AbstractPage } from '../../util/abstractpage';
import { InventoryCard } from '../components/inventorycard';
import { InventoryItem } from '../models/inventoryitem';

export class InventoryPage extends AbstractPage{

    constructor(page: Page){
        super(page);
    }

    inventoryCard!: InventoryCard;
    inventory :string = "id=inventory_container";
    cartLink : string = "xpath=//a[@class='shopping_cart_link']"
    cartBadge : string = "xpath=//span[@class='shopping_cart_badge']";

    async pageLoad(){
        await this.page.waitForSelector(this.inventory);
        return true;
    }

    async addItemToCart(item : InventoryItem){
        this.inventoryCard = new InventoryCard(item.Name, this.page);
        await this.inventoryCard.addToCart();
        console.log("Attempted to add "+item.Name+" to cart");
    }

    async removeItemFromCart(item: InventoryItem){
        this.inventoryCard = new InventoryCard(item.Name, this.page);
        await this.inventoryCard.removeItemFromCart();
    }

    async removeItemsFromCart(items : string[]){
        for(var item of items){
           await this.removeItemFromCart(new InventoryItem({Name:item}));
        }
    }

    async getShoppingCartCounter(){
        return await this.page.innerText(this.cartBadge);
    }

    async getAllInventoryItems(){

    }



}