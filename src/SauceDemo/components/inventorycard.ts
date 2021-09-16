import {Page, Locator} from "@playwright/test";
import { AbstractComponent } from "../../util/abstractcomponent";

export class InventoryCard extends AbstractComponent{

    scope : string;
    addToCartBtn : string = "text=Add to cart";

    constructor(itemName: string, page: Page){
        super(page)
        this.scope = "xpath=//div[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item']";
    }

    async addToCart(){
        await this.click(this.addToCartBtn)
    }


}