function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var startRow = 2; // Start at the second row because the first row contains the headers.
  var numRows = sheet.getLastRow() - 1; // Number of rows to process.
  var dataRange = sheet.getRange(startRow, 1, numRows, 6); // Adjust if you have more columns.
  var data = dataRange.getValues();
  
  // File names for the PDF files to attach.
  var fileName1 = 'YOUR_FIRST_FILE_NAME.pdf'; // Update to your file name.
  var fileName2 = 'YOUR_SECOND_FILE_NAME.pdf';; // Update to your file name.
  
  // Retrieve the files by name.
  var files1 = DriveApp.getFilesByName(fileName1);
  var files2 = DriveApp.getFilesByName(fileName2);
  
  if (!files1.hasNext() || !files2.hasNext()) {
    Logger.log("Error: One or both files not found.");
    return; // Exit if any file is not found.
  }
  
  var file1Blob = files1.next().getAs(MimeType.PDF);
  var file2Blob = files2.next().getAs(MimeType.PDF);

  for (var i = 0; i < data.length; ++i) {
    var row = data[i];
    var emailAddress = row[3]; // Assumes email addresses are in the fourth column.
    var subject = row[4]; // Assumes subjects are in the fifth column.
    var emailBody = "Your email message here.";
    
    // Send the email with attachments and CC.
    MailApp.sendEmail({
      to: emailAddress,
      cc: "cc-email@example.com", // Add CC email addresses.
      subject: subject,
      body: emailBody,
      attachments: [file1Blob, file2Blob] // Attach the PDF files.
    });
  }
}
