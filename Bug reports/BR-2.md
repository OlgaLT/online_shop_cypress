
# Alert message on the main page instead of item images

**ID**: BR-2    
**Test case ID**:     
**Environment**: Chrome    
**Priority**: Medium    
**Severity**: High

### **Preconditions:**


### **Steps for reproduction:**

1. Open main page [http://www.automationpractice.pl/index.php?](http://www.automationpractice.pl/index.php)
2. Scroll down under the slider
3. Find element `#homefeatured"`

### **Expected Result:**

If there are no images for this element, then it should not display on the Frontend

### **Actual Result:**

The element displays on the frontend and looks like a warning (or error) message.   This could frustrate users

### **Attachment:**

![Screenshot](Bug%20reports/BC-2%bug%screenshot.png)