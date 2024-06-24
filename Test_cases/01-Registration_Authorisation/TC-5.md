
# TC-5 Create new account with existing email

**ID**: TC-5  
**Functionality**: Registration / Authorisation  
**Automated**: No

### Preconditions:
1. Create new account.
2. Log out
3. Open [http://www.automationpractice.pl/index.php?controller=authentication&back=my-account](http://www.automationpractice.pl/index.php?controller=authentication&back=my-account)

| Steps:                                                                                         | Expected results:                                                                                                                                      |  
|------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|  
| 1. On the Create an account form input email of created account                                | Frontend validation should be positive (green). Correspondent `div` elements should have class `form-ok`                                               |  
| 2. Click Create an account button                                                              | Error message should appear<br>`”An account using this email address has already been registered. Please enter a valid password or request a new one”` |  
| 3. Check API request<br>POST `http://www.automationpractice.pl/index.php?rand={rundom_number}` | Status code should be 400 Bad request                                                                                                                  |