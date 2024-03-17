# AdvanceMEOW
A way for musicians to automatically advance their tour

Prerequisites
- A Gmail.
- Stage Plot and Rider as .PDF files stored on your Google Drive

Step 1: Prepare Your Google Sheet
- I made an example here: 
https://docs.google.com/spreadsheets/d/1ir14MiC9dyjGmjILyKTsqj_5AZ9j37Eyv8eIqmq6jRw/edit?usp=sharing

- Just duplicate it and fill it out accordingly or ask your booking agent to fill it out for you. It can be as long as you need it to be.

Step 2: Add the script to Google Apps Script

- Open the Google Sheet.
- Click on Extensions > Apps Script.
- Delete any code in the script editor and prepare to paste the provided script.
-Copy and paste the AdvanceMEOW.js script into the Google Apps Script editor. Make sure to replace placeholders like 'YOUR_FIRST_FILE_NAME.pdf' and 'YOUR_SECOND_FILE_NAME.pdf' with the actual names of your PDF files in Google Drive.

Step 4: Run the Script

- Save your script.
- Click on the play/run button to execute your script.
- You'll be prompted to review permissions. Review and allow them to let your script access your Google Sheet and send emails.

DONT FORGET:
- Customize the email Body variable within the script to add your advance message. you can use chatgpt to format your text for Javascript, then copy and paste that as well.

- Ensure the file names match those in your Google Drive.
