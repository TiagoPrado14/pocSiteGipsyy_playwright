import { Page, expect } from "@playwright/test"



export class TasksPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async go() {
        await this.page.goto('https://stgfrontbr.gipsyy.com.br/')
    }

    async login() {
        await this.page.click('div[class*="UserMenu_user"]')
        const inputEmail = this.page.locator('#login_email')
        await inputEmail.fill('test_payer_1685127824@testuser.com')
        const inputPassword = this.page.locator('#password')
        await inputPassword.fill('Tp@123456')
        await this.page.click('button[type=submit]')
    }

    async travelSearch() {
        const inputOriginTo = this.page.locator('#origin-to')
        await inputOriginTo.fill('brasilia')
        await this.page.click('p[title="BRASILIA - DF"]')
        const inputGoingTo = this.page.locator('#going-to')
        await inputGoingTo.fill('sao paulo')
        await this.page.click('p[title="SAO PAULO (TIETÊ) - SP"]')
        await this.page.click('input[placeholder="Selecione Data"]')
        await this.page.click('td[class*="CalendarDay__today"]')
        await this.page.click('//button[text()="Buscar passagem"]')
    }

    async travelSelect() {
        await this.page.click("//button[contains(@id,'0')][@type='button'][contains(.,'Selecione esta viagem')]")
    }

    async selecionarAssento() {

        let indexAssento = 0;


        while (true) {
            let assento = `#seat_${indexAssento}`;
            const elementHandle = await this.page.$(assento);

            if (elementHandle) {
                const boundingBox = await elementHandle.boundingBox();
                const isEnabled = await elementHandle.isEnabled();

                if (boundingBox && isEnabled && boundingBox.x >= 0 && boundingBox.y >= 0) {
                    await elementHandle.click();
                    break;
                }
            }

            indexAssento += 1;
        }


        // while (true) {
        //     let assento = `#seat_${indexAssento}`;
        //     try {
        //         this.page.setDefaultTimeout(300)
        //         await this.page.waitForSelector(assento, { state: 'visible' });
        //         await this.page.click(assento)
        //         break;
        //     } catch (error) {
        //         indexAssento += 1
        //     }
        // }

        await this.page.click('xpath=//button[text()="Escolher"]')

    }

    async checkout() {
        await this.page.click('div[class*="InputBase-formControl"]')
        await this.page.click('//li[text()="Teste Payer Primeiro"]')
        await this.page.click('#btnViagem_0')
    }

}