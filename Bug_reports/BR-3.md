
# Extra results in search results for `dress`

**ID**: BR-3    
**Test case ID**: TC-6    
**Environment**: All    
**Priority**: Medium    
**Severity**: High

### **Preconditions:**
- [http://www.automationpractice.pl/index.php](http://www.automationpractice.pl/index.php) is opened

### **Steps for reproduction:**

1. Enter a product name (e.g., "dress")
2. Click the search button
3. Verify the search results and the product titles

### **Expected Result:**

All product titles should contain the word "dress"

### **Actual Result:**

Search results contain also t-shirt and blouse items. The reason is, that these items contain word `dress` in More 
Info section

### **Attachment:**
