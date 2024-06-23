# quipu_test_assignment

### Table of Contents
1. [Introduction](#introduction)
2. [Setup and Installation](#setup-and-installation)
3. [Running the Tests](#running-the-tests)
4. [Project scope](#project-scope)
5. [Feedback](#feedback)


### Introduction
This project is aimed at automating tests for an e-commerce site available at http://www.automationpractice.pl/index.php. The goal is to ensure the site's functionality, performance, and security through automated testing.

### Setup and Installation

#### Prerequisites
- Node.js
- npm or yarn

#### Installation
1. Clone the repository:
    ```sh
    git clone git@github.com:OlgaLT/quipu_test_assignment.git
    ```
2. Navigate to the project directory:
    ```sh
    cd your-repo
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
   or
    ```sh
    yarn install
    ```

### Running the Tests

#### Running All Tests
To run all the tests:
```sh
npx cypress open 
```
or
```sh
yarn cypress open
```

### Project scope
- Test plan & strategy in [testPlanStrategy.md](https://github.com/OlgaLT/quipu_test_assignment/blob/15745cef91fc29cf9ad658752262d0cad3ada9d9/Test%20cases/testPlanStrategy.md)
- Designing test cases in [Test cases](https://github.com/OlgaLT/quipu_test_assignment/blob/4e4fdec00ac368b1ca64a1514840943bca018c26/Test%20cases) folder.
- Execution of manual tests based on the designed test cases. [Test Report](https://github.com/OlgaLT/quipu_test_assignment/blob/4e4fdec00ac368b1ca64a1514840943bca018c26/Test%20cases/testReport.md)
- Bug reporting in [Bug reports](https://github.com/OlgaLT/quipu_test_assignment/blob/4e4fdec00ac368b1ca64a1514840943bca018c26/Bug%20reports) folder.
- Writing and running automated tests in Cypress. For reference, some checks in the tests are disabled so that the tests don't fail.
- Executing tests in different browsers (chrome, firefox).
- Testing of various types including E2E, Functional, Navigation and Usability.

### Feedback

#### How much time I spent in the task
By the time the last project update was published, I had spent about 31 hours on the task.

#### Challenges I faced
1. The main challenge was to set up a local personal machine to run the project and decide on the tools. 😅 In work projects there is usually already a certain stack of tools. It may have disadvantages, but you don't have to spend time selecting all the tools and setting up the system.  For example, you don't have to choose a TMS or set up templates for test cases. The company usually already has a working tool that you can start working with right away.
2. The second difficulty was time estimation. Initially, the project didn't seem very complicated and probably would have been if I did not have to start from scratch. Unfortunately, there is not much I have done in 2 days.
3. Probably the biggest challenge was figuring out how to pass data for forms like adding an address. An API request with such a form does not return an error message, the status code is always 200, and the response to the request is an HTML document. As a result, it was not clear why no changes are made to the user. As a result of a long research I managed to find out that the form is sensitive to the token passed in the request. In this case, the token is a property of the page and changes on every reload. I managed to find this out by replacing cy.request() with cy.visit(), passing in the latter the parameters for the former. As a result, the HTML of the page was displayed with a notification that the token is invalid. If the request would return an adequate error message, the time spent on debugging would be much less.
4. And as a final point, I might add that the test was working without being able to discuss issues with the developer.


---

### Additional Notes
- **Contact:** For any queries, contact us at [buolabuis@gmail.com].
