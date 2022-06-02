# Contact Us Website Form

The folder called "Website code" has code for a website. This includes index.html for the form and conditional.js for conditional form fields.

index.html uses bootstrap css for demo purposes, but the style can be modified to fit your website without impacting the funtionality. 

The form requires jQuery.

You can use the conditional.js file in the Website Code folder or use a code resource in the HTML that is hosted on Marketing Cloud. This is JavaScript that controls the conditional nature of the form. It can be excluded if you do not need conditional form fields.

A successful form submission displays an alert if the email is invalid or thank you content if it’s valid. There is some CSS that hides the success messages. Alter this to fit your website needs.

A code resource MUST be hosted in Marketing Cloud to process the form. Sample code can be found in the Marketing Cloud folder. To create a Code Resource, under CloudPages create a JSON code resource.

In the HTML form, replace url: 'https://cloud.e.YOURDOMAIN.com/contact-us-processing' with the URL of your processing page.

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

There are three sample actions in this processor: add to publication lists, add to a data extention, fire into a Journey. Note that firing into a Journey will also populate a data extension. 

7. The Processor then returns two pieces of information to the form:
    1. “ok” - is the email valid or not valid?
        1. an invalid email will trigger an alert on the customer-facing form.
        2. a value email will trigger showing the confirmation message and hiding the form
    2. “message”
        1. if the email is invalid, the message is “Please enter a valid email address”
        2. if the email is valid, the message passes back either “hi” or “log” depending on the submission type. The customer-facing page displays a confirmation message that corresponds to Log or HI.