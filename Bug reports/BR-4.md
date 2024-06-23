
# URL for checkout doesn't reflect the steps of the checkout

**ID**: BR-4    
**Test case ID**: TC-9    
**Environment**: All    
**Priority**: Medium    
**Severity**: High

### **Preconditions:**
1. Register new user or use the registered on
2. Fill shipping address for the user
3. The user is logged into the website [http://www.automationpractice.pl/index.php](http://www.automationpractice.pl/index.php).
4. Add item to the Cart


### **Steps for reproduction:**

1. Open the Cart, check the URL. There is only `controller=order`
2. From the Cart click `Proceed to checkout` button. (Address step will open)
3. Check the URL for the step 3 Address. `There will be controller=order&step=1`
4. Verify URLs for the Shipping and Payment steps

### **Expected Result:**

URLs should be consistent for all steps of the Check-out and contain steps ids

### **Actual Result:**

For the step Address there is step id, but it is wrong. Instead of step 3 it is 1. And other steps of the Check-out doesn't have step ids in the URL

### **Attachment:**
