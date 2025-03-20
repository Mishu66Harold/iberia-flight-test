import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../../typescript/pages/HomePage';
import { page } from '../'

let homePage: HomePage;

Given('El usuario está en la página de inicio de Iberia', async () => {
    homePage = new HomePage(page);
    await homePage.navigate();
});

When('Selecciona un billete de ida y vuelta de Barcelona a Madrid', async () => {
    await homePage.selectRoundTrip();
    await homePage.enterOrigin('Barcelona');
    await homePage.enterDestination('Madrid');
});

When('Ingresa 2 adultos y 1 niño', async () => {
    // Implementar lógica para seleccionar pasajeros
});

When('Selecciona fechas de salida y regreso', async () => {
    const departureDate = '2023-11-15'; // Fecha de salida
    const returnDate = '2023-11-18';   // Fecha de regreso
    await homePage.enterDates(departureDate, returnDate);
});

When('Hace click en {string}', async (buttonText: string) => {
    await homePage.searchFlights();
});

Then('Debe ver una lista de vuelos disponibles', async () => {
    const flightList = await page.locator('.flight-list').isVisible();
    expect(flightList).toBeTruthy();
});