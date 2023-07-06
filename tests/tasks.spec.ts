import { test, expect } from '@playwright/test'
import { TasksPage } from './pages/tasks'

let tasksPage: TasksPage

test.beforeEach(({ page }) => {
    tasksPage = new TasksPage(page)
})

test.describe('Comprar bilhete', () => {
    test('Comprar bilhete com pagamento pix', async () => {
        await tasksPage.go()
        await tasksPage.login()
        await tasksPage.travelSearch()
        await tasksPage.travelSelect() 
        await tasksPage.selecionarAssento()
        await tasksPage.checkout()         
    })
})

