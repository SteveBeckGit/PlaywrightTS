import {test, expect} from '@playwright/test'
import { Console } from 'console';
import { Application } from '../src/SauceDemo/application';
import { LoginPage } from '../src/SauceDemo/pages/loginpage';
import {Credential} from "../src/SauceDemo/models/credential";
import { InventoryItem } from '../src/SauceDemo/models/inventoryitem';



test.beforeEach(async({page}) => {
    const app = new Application(page);
    await app.loginPage.login(new Credential({username:"standard_user",password:"secret_sauce"}));
    await app.inventoryPage.pageLoad();
    console.log("Login Success");
})

test.describe('Inventory tests',() =>{
    
    test('Add item to cart', async({page}) => {
    
        const item = new InventoryItem({Name: "Sauce Labs Backpack"});
        const app = new Application(page);
        await app.inventoryPage.addItemToCart(item);
        expect(await app.inventoryPage.getShoppingCartCounter()).toBe("1");
        console.log("Item added to cart");
    
    });

    test('Add another item to cart', async({page}) => {
    
        const item = new InventoryItem({Name: "Sauce Labs Backpack"});
        const app = new Application(page);
        await app.inventoryPage.addItemToCart(item);
        expect(await app.inventoryPage.getShoppingCartCounter()).toBe("1");
        console.log("Item added to cart");
    
    });
});


