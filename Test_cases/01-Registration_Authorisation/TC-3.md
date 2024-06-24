
# TC-3 Email validation on the Create an account form

**ID**: TC-3  
**Functionality**: Registration / Authorisation  
**Automated**: No

### Preconditions:

1. The user is not authorised
2. [http://www.automationpractice.pl/index.php?controller=authentication&back=my-account](http://www.automationpractice.pl/index.php?controller=authentication&back=my-account) is opened

| Steps:                                                                                                                                                                               | Expected results:                                                                                                             |  
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|  
| 1. Focus Email input  <br>2. Unfocus, leaving the field empty                                                                                                                        | Frontend validation should appear. The field can’t be empty.<br>Correspondent div element should have ```form-error``` class. |  
| 3. Delete form-error in the Elements (or reload the page). <br>4. Input 1 space.<br>5. Unfocus the field.                                                                            | Frontend error validation should appear. Correspondent ```div``` element should have ```form-error``` class.                  |  
| Repeat steps 3 - 5 for the following cases:<br>- ```xy```<br>- ```xy@```<br>- ```xy@xy```<br>- ```_xy@xy.xy```<br>- ```!xy@xy.xy``` <br>**In real project the list should be longer* | Frontend error validation should appear. Correspondent ```div``` element should have ```form-error``` class.                  |  
| 6. Delete form-error in the Elements (or reload the page)<br>7. Input proper email address ```xx@yy.zz```<br>8. Unfocus the field                                                    | Frontend positive validation should appear. Correspondent ```div``` element should have ```form-ok``` class.                  |  
| Repeat steps 6 - 8 for the following cases:<br>- ```x_x@yy.zz```<br>- ```xx123@yy.zz```<br>- ```x.x@yy.zz```<br>**In real project the list should be longer*                         | Frontend positive validation should appear. Correspondent `div` element should have `form-ok` class.                          |