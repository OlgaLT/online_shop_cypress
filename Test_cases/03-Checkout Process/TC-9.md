### TC-9 Checkout with payment by cheque for user with filled address 

**ID**: TC-9  
**Functionality**: Checkout  
**Automated**: Yes

### Preconditions:
1. Register new user.
2. Fill shipping address for the user
3. The user is logged into the website [http://www.automationpractice.pl/index.php](http://www.automationpractice.pl/index.php).
4. Add item to the Cart

| Steps:                                                             | Expected results:                                                                                                                                                      |  
|--------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| 1. Navigate to the cart.<br>2. Click `Proceed to checkout` button. | Addresses step should open. And Sign in step should be skipped.  In oder steps bar  `Address` step should be highlighted. URL should contain `controller=order&step=3` |  
| 3. Check addresses fields                                          | Delivery and Bulling addresses should be filled with register address. `Update` buttons are available for both addresses.                                              |  
| 4. Click `Proceed to checkout` button                              | Shipping step should open. In oder steps bar  `Shipping` step should be highlighted. URL should contain `controller=order&step=4`                                      |  
| 5.Check shipping options                                           | If there is only one option, it should be chosen (radio button should be checked                                                                                       |  
| 6. Review `Terms of service` checkbox                              | It should be unchecked. And `Proceed to checkout` button should be unactive                                                                                            |  
| 7. Check in `Terms of service` checkbox                            | `Proceed to checkout` button should become active.                                                                                                                     |  
| 8. Clik `Proceed to checkout` button                               | Payment step should open. In oder steps bar  `Payment` step should be highlighted. URL should contain `controller=order&step=5`                                        |
| 9. Choose `Payment by check` option and click                      | Check payment confirmation should display. URL should contain `controller=payment`                                                                                     |
| 10. Click `I confirm my oder` button                               | Oder confirmation page should open. `Your order on My Shop is complete.` notification should be displayed. URL should contain `controller=order-confirmation`          |
| 11. Navigate to Oder History page                                  | The last order should be displayed in the history                                                                                                                      |
  

