import { Page } from "@playwright/test";
import { InventoryPage } from "./pages/inventorypage";
import { LoginPage } from "./pages/loginpage";

export class Application{
    
    loginPage : LoginPage;
    inventoryPage : InventoryPage;

    constructor(page : Page){
        this.loginPage = new LoginPage(page);
        this.inventoryPage = new InventoryPage(page);
    }

}