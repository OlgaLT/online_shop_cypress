
# TC-2 Click on the Sign in button opens authorisation page

**ID**: TC-2    
**Functionality**: Registration / Authorisation    
**Automated**: Yes

### Preconditions:
- [http://www.automationpractice.pl/index.php](http://www.automationpractice.pl/index.php) is opened
- The user is not authorised


| Steps:                         | Expected results:                                                             |  
|--------------------------------|-------------------------------------------------------------------------------|  
| 1. Click on the Sign in button | Authorisation page should open                                                |  
| 2. Check page URL              | It should contain “controller=authentication&back=my-account”                 |  
| 3. Check the page layout       | It should contain 2 forms:  <br>- Create an account  <br>- Authorisation form |