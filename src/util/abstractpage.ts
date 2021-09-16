import {Page} from "@playwright/test"

/**
 * The abstract page is used for reducing the length of script commands by wrapping methods here
 */
export abstract class AbstractPage{

    page : Page;

    constructor(page : Page){
        this.page = page;
    }

    async navigate(url : string){
        await this.page.goto(url);
    }

    async type(locator: string, text : string){
        await this.page.type(locator,text);
    }

    async click(locator: string){
        await this.page.click(locator);
    }

}