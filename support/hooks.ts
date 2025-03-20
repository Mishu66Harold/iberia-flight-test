import { Before, After } from '@cucumber/cucumber';

Before(() => {
  console.log('Test is starting...');
});

After(() => {
  console.log(' Test finished.');
});
