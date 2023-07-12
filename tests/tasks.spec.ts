import { test } from '@playwright/test'
import { TasksPage } from './pages/tasks'

let tasksPage: TasksPage

test.beforeEach(({ page }) => {
    tasksPage = new TasksPage(page)
})

test.describe('Login', () => {
    test('Realizar um login com informações válidas', async () => {
        await tasksPage.go()
        await tasksPage.login()
        await tasksPage.validarLogin()
    })

    test('Realizar logout do usuário', async () => {
        await tasksPage.go()
        await tasksPage.login()
        await tasksPage.logout()
    })

    test('Realizar um login com informações inválidas', async () => {
        await tasksPage.go()
        await tasksPage.loginInvalido()
    })

    test('Validar mensagem ao iserir um email inválido', async () => {
        await tasksPage.go()
        await tasksPage.msgEmailInvalido()
    })

    test('Validar mensagem ao inserir uma senha invalida', async () => {
        await tasksPage.go()
        await tasksPage.msgSenhaInvalida()
    })
})

