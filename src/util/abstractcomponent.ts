import {Page, Locator} from "@playwright/test"

export abstract class AbstractComponent{
    
    page : Page;
    abstract scope : string;
    
    constructor(page :Page){
        this.page = page;
    }

    async click(locator : string){

        var ele = await this.page.locator(this.scope);
        await ele.locator(locator).click();
    }
}