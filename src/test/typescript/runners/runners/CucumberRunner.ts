;

const options = {
    paths: ['src/test/resources/features'],
    require: ['src/main/typescript/stepdefs/**/*.ts'],
    format: ['json:test-results/cucumber.json'],
};

runTests(options);

function runTests(options: { paths: string[]; require: string[]; format: string[]; }) {
    throw new Error('Function not implemented.');
}
