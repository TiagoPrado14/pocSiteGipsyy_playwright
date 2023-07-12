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
        await inputEmail.fill('tiago.silva@gipsyy.com.br')
        const inputPassword = this.page.locator('#password')
        await inputPassword.fill('Nova1010-')
        await this.page.click('button[type=submit]')
        
    }

    async logout() {
        await this.page.click('div[class*="UserMenu_user"]')
        await this.page.click("//span[@class='UserMenu_text__SE8CN'][contains(.,'Sair')]")
        const target = this.page.locator('div[class*="UserMenu_user"]')
        await expect(target).toBeVisible()
    }

    async validarLogin() {
        const target = this.page.locator('div[class*="loggedUser"]')
        await expect(target).toBeVisible()
    }

    async loginInvalido () {
        await this.page.click('div[class*="UserMenu_user"]')
        const inputEmail = this.page.locator('#login_email')
        await inputEmail.fill('jose@teste.com.br')
        const inputPassword = this.page.locator('#password')
        await inputPassword.fill('Nova1010-')
        await this.page.click('button[type=submit]')
        const target = this.page.locator("//div[@class='mt-2 SignIn_error__1m21R'][contains(.,'Email não encontrado.')]")
        await expect(target).toBeVisible()
    }

    async msgEmailInvalido() {
        await this.page.click('div[class*="UserMenu_user"]')
        const inputEmail = this.page.locator('#login_email')
        await inputEmail.fill('andregipsyy.com.br')
        await this.page.click('#password')
        const target = this.page.locator("//div[@class='SignIn_error__1m21R'][contains(.,'Por favor digite um E-Mail válido (e.g. name@email.com)')]")
        await expect(target).toBeVisible()
    }

    async msgSenhaInvalida() {
        await this.page.click('div[class*="UserMenu_user"]')
        const inputEmail = this.page.locator('#login_email')
        await inputEmail.fill('tiago.silva@gipsyy.com.br')
        const inputPassword = this.page.locator('#password')
        await inputPassword.fill('Nova1010')
        await this.page.click('button[type=submit]')
        const target = this.page.locator("//div[@class='mt-2 SignIn_error__1m21R'][contains(.,'Senha inválida.')]")
        await expect(target).toBeVisible()
    }

    // async travelSearch() {
    //     const inputOriginTo = this.page.locator('#origin-to')
    //     await inputOriginTo.fill('brasilia')
    //     await this.page.click('p[title="BRASILIA - DF"]')
    //     const inputGoingTo = this.page.locator('#going-to')
    //     await inputGoingTo.fill('sao paulo')
    //     await this.page.click('p[title="SAO PAULO (TIETÊ) - SP"]')
    //     await this.page.click('input[placeholder="Selecione Data"]')
    //     await this.page.click('td[class*="CalendarDay__today"]')
    //     await this.page.click('//button[text()="Buscar passagem"]')
    // }

    // async travelSelect() {
    //     await this.page.click("//button[contains(@id,'0')][@type='button'][contains(.,'Selecione esta viagem')]")
    // }

    // async selecionarAssento() {

    //     let indexAssento = 0;

    //     // while (true) {
    //     //     let assento = `#seat_${indexAssento}`;
    //     //     try {
    //     //         this.page.setDefaultTimeout(300)
    //     //         await this.page.waitForSelector(assento, { state: 'visible' });
    //     //         await this.page.click(assento)
    //     //         break;
    //     //     } catch (error) {
    //     //         indexAssento += 1
    //     //     }
    //     // }

    //     await this.page.click('xpath=//button[text()="Escolher"]')

    // }

    // async checkout() {
    //     await this.page.click('div[class*="InputBase-formControl"]')
    //     await this.page.click('//li[text()="Teste Payer Primeiro"]')
    //     await this.page.click('#btnViagem_0')
    // }

}