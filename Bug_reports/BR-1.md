# 200 status code instead of 400 when create account with existing email

**ID**: BR-1  
**Test case ID**: TC—5  
**Environment**: All  
**Priority**: Medium  
**Severity**: Low  

### **Preconditions:**

Create new account or use existing one

### **Steps for reproduction:**

1. Log out
2. Open [http://www.automationpractice.pl/index.php?controller=authentication&back=my-account](http://www.automationpractice.pl/index.php?controller=authentication&back=my-account) 
3. On the Create an account form input email of created account
4. Click Create an account button
5. Check API request POST`http://www.automationpractice.pl/index.php?rand={rundom_number}`

### **Expected Result:**

Status code should be 400 Bad request

### **Actual Result:**

Status code is 200 OK, that is not informative

### **Attachment:**

```
curl 'http://www.automationpractice.pl/index.php?rand=1718894462975' \
  -H 'Accept: application/json, text/javascript, */*; q=0.01' \
  -H 'Accept-Language: en-GB,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,en-US;q=0.6' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
  -H 'Cookie: PrestaShop-2ae4d32f6206717abc31030c0cc08275=fMQcpHD0y6I%3DrOt4TMRxLQs%3Dz8gAgVdktXU%3DmBf0XueRPKE%3DV2yp%2BLfvm1E%3D4%2FYAspTMqAk%3DRMT6wdoS4uk%3DOmG%2Fbr2DZYI%3DSaAfSeQqNhM%3D7TT2QbofC%2Bs%3DvfofL%2BSNYH8%3DKVUHkiDMe3E%3DcjtAas0b8Rw%3DGuX%2B01k8izM%3DUqBpTA%2BExjQ%3DDE1euL0ce5M%3DSzIPyNLt4Uo%3D8a504VOXjSE%3Ddpat1RXrgfk%3D4KXJrBOrpVQ%3DJB2J2xcG2hE%3D000160' \
  -H 'DNT: 1' \
  -H 'Origin: http://www.automationpractice.pl' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://www.automationpractice.pl/index.php?controller=authentication&back=my-account' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36' \
  -H 'X-Requested-With: XMLHttpRequest' \
  --data-raw 'controller=authentication&SubmitCreate=1&ajax=true&email_create=comew90250%40egela.com&back=my-account&token=b3492676e6c915578f19a6dfb299608f' \
  --insecure
  
  Response:
  {
    "hasError": true,
    "errors": [
        "An account using this email address has already been registered. Please enter a valid password or request a new one. "
    ],
    "page": "<h1 class=\"page-heading\">Authentication</h1>\n\n\n\t<!---->\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-6\">\n\t\t\t<form action=\"http://www.automationpractice.pl/index.php?controller=authentication\" method=\"post\" id=\"create-account_form\" class=\"box\">\n\t\t\t\t<h3 class=\"page-subheading\">Create an account</h3>\n\t\t\t\t<div class=\"form_content clearfix\">\n\t\t\t\t\t<p>Please enter your email address to create an account.</p>\n\t\t\t\t\t<div class=\"alert alert-danger\" id=\"create_account_error\" style=\"display:none\"></div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"email_create\">Email address</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"is_required validate account_input form-control\" data-validate=\"isEmail\" id=\"email_create\" name=\"email_create\" value=\"\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"submit\">\n\t\t\t\t\t\t<input type=\"hidden\" class=\"hidden\" name=\"back\" value=\"my-account\" />\t\t\t\t\t\t<button class=\"btn btn-default button button-medium exclusive\" type=\"submit\" id=\"SubmitCreate\" name=\"SubmitCreate\">\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<i class=\"icon-user left\"></i>\n\t\t\t\t\t\t\t\tCreate an account\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<input type=\"hidden\" class=\"hidden\" name=\"SubmitCreate\" value=\"Create an account\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6\">\n\t\t\t<form action=\"http://www.automationpractice.pl/index.php?controller=authentication\" method=\"post\" id=\"login_form\" class=\"box\">\n\t\t\t\t<h3 class=\"page-subheading\">Already registered?</h3>\n\t\t\t\t<div class=\"form_content clearfix\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"email\">Email address</label>\n\t\t\t\t\t\t<input class=\"is_required validate account_input form-control\" data-validate=\"isEmail\" type=\"text\" id=\"email\" name=\"email\" value=\"comew90250@egela.com\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"passwd\">Password</label>\n\t\t\t\t\t\t<input class=\"is_required validate account_input form-control\" type=\"password\" data-validate=\"isPasswd\" id=\"passwd\" name=\"passwd\" value=\"\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"lost_password form-group\"><a href=\"http://www.automationpractice.pl/index.php?controller=password\" title=\"Recover your forgotten password\" rel=\"nofollow\">Forgot your password?</a></p>\n\t\t\t\t\t<p class=\"submit\">\n\t\t\t\t\t\t<input type=\"hidden\" class=\"hidden\" name=\"back\" value=\"my-account\" />\t\t\t\t\t\t<button type=\"submit\" id=\"SubmitLogin\" name=\"SubmitLogin\" class=\"button btn btn-default button-medium\">\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<i class=\"icon-lock left\"></i>\n\t\t\t\t\t\t\t\tSign in\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\t",
    "token": "a180f290da91cdbdd9cbd87c20dc2991"
}
```