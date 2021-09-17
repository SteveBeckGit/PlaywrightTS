import {Page, Locator} from "@playwright/test";
import { AbstractComponent } from "../../util/abstractcomponent";

export class InventoryCard extends AbstractComponent{

    scope : string;
    addToCartBtn : string = "text=Add to cart";
    removeBtn : string = "text=Remove";

    constructor(itemName: string, page: Page){
        super(page)
        this.scope = "xpath=//div[text()='"+itemName+"']/ancestor::div[@class='inventory_item']";
    }

    async addToCart(){
        await this.click(this.addToCartBtn);
    }

    async removeItemFromCart(){
        await this.click(this.removeBtn);
    }
}