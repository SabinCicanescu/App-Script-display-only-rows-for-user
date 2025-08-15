function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var userEmail = Session.getActiveUser().getEmail();
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
  var values2 = dataRange.getValues();

  for (var j = 1; j < values.length; j++) { // Start from 1 to skip header row
    if (values[j][0] !== userEmail) { // Assuming user email is in column A (index 0)
      sheet.hideRows(j + 1); // j + 1 because rows are 1-indexed
    }
  }
}
