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
}