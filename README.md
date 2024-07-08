# quipu_test_assignment

### Table of Contents
1. [Introduction](#introduction)
2. [Setup and Installation](#setup-and-installation)
3. [Running the Tests](#running-the-tests)
4. [Project scope](#project-scope)
5. [Feedback](#feedback)


### Introduction
This project is aimed to demonstrait my skills with test automation with Cypress. The playground is an e-commerce site available at http://www.automationpractice.pl/index.php. The goal is to check the site's functionality through automated testing and to demonstrate working flow from test design to automated tests and bug reporting.

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
    npm install --save-dev
    ```
   or
    ```sh
    yarn install --dev
    ```

### Running the Tests

#### Running All Tests
To run all the tests in headless mode:
```sh
npx cypress run 
```
or
```sh
yarn cypress run
```

To open Cypress Launchpad:
```sh
npx cypress open 
```
or
```sh
yarn cypress open
```

### Project scope
- Test plan & strategy in [testPlanStrategy.md](Test_cases/testPlanStrategy.md)
- Designing test cases in [Test cases](Test_cases) folder.
- Execution of manual tests based on the designed test cases. [Test Report](Test_cases/testReport.md)
- Bug reporting in [Bug reports](Bug_reports) folder.
- Writing and running automated tests in Cypress. For reference, some checks in the tests are disabled so that the tests don't fail.
- Executing tests in different browsers (chrome, firefox).
- Testing of various types including E2E, Functional, Navigation and Usability.

### Feedback

#### How much time I spent in the task
By the time the last project update was published, I had spent about 40 hours on the task.

---

### Additional Notes
- **Contact:** For any queries, contact me at [email](mailto:buolabuis@gmail.com).
