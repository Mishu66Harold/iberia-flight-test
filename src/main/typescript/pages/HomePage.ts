import { Page, Locator } from '@playwright/test';

export class HomePage {
    private page: Page;
    private originInput: Locator;
    private destinationInput: Locator;
    private departureDateInput: Locator;
    private returnDateInput: Locator;
    private searchFlightsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.originInput = page.locator('id=flight_origin1');
        this.destinationInput = page.locator('id=flight_destiny1');
        this.departureDateInput = page.locator('id=flight_round_date1');
        this.returnDateInput = page.locator('id=flight_return_date1');
        this.searchFlightsButton = page.locator('id=buttonSubmit1');
    }

    async navigate() {
        await this.page.goto('https://www.iberia.com/ec/');
    }

    async selectRoundTrip() {
        await this.page.click('id=flight_round_date1');
    }

    async enterOrigin(origin: string) {
        await this.originInput.fill(origin);
    }

    async enterDestination(destination: string) {
        await this.destinationInput.fill(destination);
    }

    async enterDates(departureDate: string, returnDate: string) {
        await this.departureDateInput.fill(departureDate);
        await this.returnDateInput.fill(returnDate);
    }

    async searchFlights() {
        await this.searchFlightsButton.click();
    }
}