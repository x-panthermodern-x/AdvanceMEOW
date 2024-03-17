# AdvanceMEOW
A way for musicians and managers to automatically advance their tour bookings

Overview

This guide demonstrates how to use Google Apps Script to send emails with PDF attachments from Google Drive. You'll learn to automate emails for a list of recipients, customize your message, and include multiple CCs. This script is for musicians and managers to quickly advance their tours with multiple venues and include appropiate subject lines

Prerequisites
A Google account with access to Google Drive and Google Sheets.
PDF files - Stage Plot and Rider
A list of recipients in a Google Sheet.

Step 1: Prepare Your Google Sheet
I made an example here: 
https://docs.google.com/spreadsheets/d/1ir14MiC9dyjGmjILyKTsqj_5AZ9j37Eyv8eIqmq6jRw/edit?usp=sharing

Just duplicate it and fill it out accordingly or ask your booking agent to fill it out for you. It can be as long as you need

Step 2: Open Google Apps Script
Open the Google Sheet.
Click on Extensions > Apps Script.
Delete any code in the script editor and prepare to paste the provided script.

Step 3: The Script
Copy and paste the AdvanceMEOW.js script into the Google Apps Script editor. Make sure to replace placeholders like 'YOUR_FIRST_FILE_NAME.pdf' and 'YOUR_SECOND_FILE_NAME.pdf' with the actual names of your PDF files in Google Drive.

Step 4: Run the Script
Save your script.
Click on the play/run button to execute your script.
You'll be prompted to review permissions. Review and allow them to let your script access your Google Sheet and send emails.

DONT FORGET:
Customize the email Body variable within the loop to change your email message.
Ensure the email addresses and file names in your Google Sheet match those in your Google Drive.
