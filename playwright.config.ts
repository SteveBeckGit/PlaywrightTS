import { PlaywrightTestConfig } from "@playwright/test";

//Screenshots on test completion

const config: PlaywrightTestConfig = {
    use:{
        headless: false,
        screenshot: "on"
    },
    reporter : [['experimental-allure-playwright'],['line']],
};

export default config;