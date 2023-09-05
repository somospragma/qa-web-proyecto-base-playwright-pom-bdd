import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => { // explicación sintaxis  
  
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
/**
 * test('get started link', async ({ page }) => { 
 * Primero va la palabra test () se abren parentesis como una función
 * y se escribe un nombre del test (No repetir) 
 * Luego se pasa async para indicar que es una función asincrona
 * pasamos el objeto page, el cual nos va a permitir interactuar con los elementos de la pagina
 * });
 
*/