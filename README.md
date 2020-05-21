# Hackerrank
**In-Scope Items:**

Create an automation script to open https://www.etsy.com in Firefox and code the following scenarios:
1. Create an account into the site.
2. Create an automate script to test the required fields
3. Create an account into the site using gmail option.
4. login into the site with different users using a Data Driven Framework (At least 3) the assertions must validate the successful login.
5. Create an automated script to test a failed attempt to login.
6. Create an automated script to add a product to cart, you can go directly through PDP and the assertion must validate the product is in the cart.

**Repository:**

https://github.com/ozair-10P/Hackerrank/

**Tool:**

Cypress (Mocha Framework)

**Installation:**

Cypress node modules will be required.

- **Install Cypress via npm:**

cd /your/project/path

npm install cypress --save-dev

[https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing)

**Commands:**

- For custom command used to run in headless and create mocha reports:

-npm run test

- To open GUI:

-npx cypress open

- To run in CLI (headless):

-npx cypress run

- To run in chrome:

-npx cypress run --browser chrome

**Reports:**

- Mochawesome Reports are available in \cypress\reports\mochareports\report.html
