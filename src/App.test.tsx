// TEST 

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); // searches for an element that contains the text "learn react" (case insensitive due to /i).
  expect(linkElement).toBeInTheDocument(); // asserts that the element exists in the document.
});

/*   ANATOMY OF A TEST

Here all we need in a test file is a test() method

The test(name, fn, timeout) accept 3 arguments ::

1. name => The test name used to identify the test

2. fn => The function that contains the expectations to test

3. timeout => Optional argument for specifying how long to wait before aborting the test. The default timeout is 5 seconds. 

In above example ::

The name of test is "renders learn react link", The 2nd argument which is a callback function is where RTL comes to he picture, We begin by creating a virtual DOM a <App/> component using "render()" from RTL, Then we use "screen" from RTL which is an object that contains methods to interact with virtual DOM, In our example we searches for an element that contains the text "learn react" (case insensitive due to /i) and then assert that whether element exists in the document or not. 

Here we have not imported neither "test()" nor "expect()" from any package still it is working because of Jest's global environment. 

Jest automatically provides global functions like: test(), expect() etc. So we don't need to import them in our test files. 

If you're using Create React App (CRA), Jest is pre-configured. CRA adds Jest as a dependency and configures it under the hood

Without CRA we have to manually configure jest. Create a jest.config.js file to configure Jest. Add jest.setup.ts to enable custom matchers. Run tests using npm test or npx jest. No need to import test() and expect(), as Jest provides them globally.

*/


