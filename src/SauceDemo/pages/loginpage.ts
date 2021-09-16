import { Page } from '@playwright/test';
import { AbstractPage } from '../../util/abstractpage';
import {Credential} from "../models/credential";

export class LoginPage extends AbstractPage{
    usernamefield : string = "id=user-name";
    passwordfield : string = "id=password";
    loginbtn : string = "id=login-button";

    constructor(page){
        super(page);
    }

    async login(credential : Credential){
        await this.navigate("http://saucedemo.com");
        await this.type(this.usernamefield, credential.username);
        await this.type(this.passwordfield, credential.password);
        await this.click(this.loginbtn);
    }
}