# supreme-autofill-chrome
Checkout assistant for www.supremenewyork.com. Automatically fills out your billing and credit card information with one key.

## Disclaimers
- I'm not responsible for any failures during checking out. 
- Always have your credit card info prepared in case any of the fields do not autofill.
- This is just a basic Chrome extension for autofill. If there's enough interest, I may release a fully automated checkout extension. 
- Confirmed working on 11/02/2017 release.

## General Usage
- Make a copy of the info.sample.js file in the js folder and name it info.js.
- Update your billing info in info.js in a text editor of your choice.
- Open Chrome Extensions in settings.
- Click on load unpacked extension and select the project folder. 
- You're good to go! Just press the "`" key on the checkout page and your info will be filled out automatically.
- You can also add multiple addresses and credit cards and map them to a different key to autofill. See below for details.
- Make sure to reload the extension every time you update your billing info. 

## Updating The Autofill Key
- Open info.js in a text editor.
- Replace the following text at the bottom with any key in the first argument or copy the line and add another key/billing info profile.
```
autofillOnClick('`', BILLING_INFO);
```
- Save and reload!

## Issues
Please submit issues in the repo.

