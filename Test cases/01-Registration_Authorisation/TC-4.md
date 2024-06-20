
# TC-4 Create new account with new email

**ID**: TC-4  
**Functionality**: Registration / Authorisation  
**Automated**: Yes

### Preconditions:
1. The user is not authorised
2. [http://www.automationpractice.pl/index.php?controller=authentication&back=my-account](http://www.automationpractice.pl/index.php?controller=authentication&back=my-account) is opened

| Steps:                                                                                                           | Expected results:                                                                                                                    |  
|------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|  
| 1. Input correct email in Email address field of the Create an account form<br>2. Click Create an account button | Create an account page should open. URL should include `controller=authentication&back=my-account#account-creation`                  |  
| 3. Check API request POST `http://www.automationpractice.pl/index.php?rand={rundom_number}`                      | Its status code should be 200. Payload data should include `email_create` with input value                                           |  
| 4. Check Email field in the form                                                                                 | Used email should be input in the field                                                                                              |  
| 5. Fill in mandatory fields (Fist name, Last name, Password) with proper value and unfocus fields                | Frontend validation should be positive (green). Correspondent `div` elements should have class `form-ok`                             |  
| 6. Leave not mandatory field empty                                                                               |                                                                                                                                      |
| 7. Click Register button                                                                                         | Account page should open. URL should include controller=my-account                                                                   |  
| 8. Check API request POST `http://www.automationpractice.pl/index.php?controller=authentication`                 | Payload should include input data: Fist name, Last name, Email, Password                                                             |  
| 9. Check top navigation bar                                                                                      | Sign in button should become Sign out button. Account header should appear and the name of the user should be present in this header |