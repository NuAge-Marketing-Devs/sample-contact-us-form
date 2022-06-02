# Sashco Contact Us

The folder called "Website code" has code for a website. It uses bootstrap css for demo purposes, but the style can be modified to fit your website without impacting the funtionality. 

The form requires jQuery.

You can use the conditional.js file in the Website Code folder or use a code resource in the HTML that is hosted on Marketing Cloud. This is JavaScript that controls the conditional nature of the form. It can be excluded if you do not ned conditional form fields.

Currently I have the return JSON display an alert if the email is invalid or display the thank you content if it’s valid. There is some CSS that hides the success messages. Alter this to fit your website needs.

A code resource MUST be hosted in Marketing Cloud to process the form. Sample code can be found in the Marketing Cloud folder. To create a Code Resource, under CloudPages create a JSON code resource.

_Contact Us Processing_

1. Grabs the header information, such as what website data was posted from and the device.
2. Grabs all the form fields.
3. Does a look-up to Salesforce to see if the person already exists. Otherwise, sets the subscriber key as their email address.
4. Validates the email address. This is an API call to Marketing Cloud’s email validation API which will return false if the email address fails one of 3 criteria: 
    1. Syntax Validator checks for typos
    2. MXValidator checks the validitiy of the email address
    3. ListDetectiveValidator rejects email addresses that Marketing Cloud will not send to
5. If the validator returns false, the return is set to false and the rest of the processing is skipped. The person filling out the form will get an alert telling them to check their email address and they can then submit again.
6. If the validator returns true, the processing continues.
7. If the Product Group is Log or all Sashco products, an email notification is fired off to orders@sashco.com.
8. Otherwise, if the region is not in the US, an email notification is fired off to orders@sashco.com.
9. Otherwise, if the product is HI and the Homeowner/Contractor type is not DIY, the person filling out the form is injected into the Journey called *Hi Contact Us:*
    1. If the request is eCommerce related, the contact receives an email letting them know that Sashco is not interested.
    2. Otherwise, if the person is a Contact or Lead, their record is updated. If not, a new Lead is created. 
    3. If they were an existing Lead or Contact, they are added to a Campaign called *HI - Online.*
    4. A Task is created on their record in Salesforce.
10. Otherwise, any submissions that do not fall into the above criteria, an email notification is fired off to orders@sashco.com. 
11. A Data Extension called Contact Us Submissions is populated with all submissions that pass email validation. This can be found in the Data Extension folder HTML Forms → Contact Us
12. In HTML Forms → Contact Us → Archive, there is a Data Extension that has the last 7 days of submissions. This is populated weekly on Sundays at 6pm, so contacts the prior week. This is simply to make reviewing submissions a little easier. 
13. The Processor then returns two pieces of information to the form:
    1. “ok” - is the email valid or not valid?
        1. an invalid email will trigger an alert on the customer-facing form.
        2. a value email will trigger showing the confirmation message and hiding the form
    2. “message”
        1. if the email is invalid, the message is “Please enter a valid email address”
        2. if the email is valid, the message passes back either “hi” or “log” depending on the submission type. The customer-facing page displays a confirmation message that corresponds to Log or HI.

