import { runTests } from '@cucumber/cucumber';
import { createRunner } from '@cucumber/cucumber/lib/runtime/runner';

const options = {
    paths: ['src/test/resources/features'],
    require: ['src/main/typescript/stepdefs/**/*.ts'],
    format: ['json:test-results/cucumber.json'],
};

runTests(options);