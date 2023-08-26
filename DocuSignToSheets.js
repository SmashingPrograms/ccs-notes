// BELOW IS THE MAP for which columns from the Raw Data in DocuSign will go to which columns of the Paoli Tracker's non-reserved list
var nameColumn = "U";
var itemInStorageName = "Item In Storage";

var columnMap = {
  "U": "A", // recipients[1].tabs.Name (Name of Renter) -> People who moved out but are not reserved for Winter 2023
  "AM": "Plate Number", //recipients[1].tabs.Text (License No) -> Plate Number
  "AK": itemInStorageName, //recipients[1].tabs.Text (Make/model) -> Item In Storage
  "AL": "Length", //recipients[1].tabs.Text (Length) -> Length
  "AN": "Height", //recipients[1].tabs.Text (Height Clearance) -> Height
  "AO": "Monthly Rate", //recipients[1].tabs.Text (Lease Costs) -> Monthly Rate
  "T": "Email Address", //recipients[1].tabs.Email (Email) -> Email
  "AI": "Phone Number", // recipients[1].tabs.Text (Phone) -> Phone Number
  "AJ": "Mailing Address", // recipients[1].tabs.Text (Address) -> Mailing Address
};

var paoliTrackerSheetId = "<your_reservation_sheet_id>";
var nonReservedTabName = "Winter 2023 Non-Reserved List";
var dataSheetId = "<your_raw_data_sheet_id>";
var rawDataTabName = "Raw Data";

var paoliTrackerSpreadsheet = SpreadsheetApp.openById(paoliTrackerSheetId);
var nonReservedTab = paoliTrackerSpreadsheet.getSheetByName(nonReservedTabName);
var dataSpreadsheet = SpreadsheetApp.openById(dataSheetId)
var rawDataTab = dataSpreadsheet.getSheetByName(rawDataTabName);

function getLastRowWithContent(tab) {
  var columnAValues = tab.getRange("A:A").getValues(); // Get all values in column A
  
  for (var row = columnAValues.length; row > 0; row--) {
    if (columnAValues[row - 1][0] !== "") {
      Logger.log("Last row in column A with content: " + row);
      return row;
    }
  }
}

function getLatestItem(description) {
  var rawDataColumn = Object.keys(columnMap).filter(key => columnMap[key] === description);
  var rawDataRow = getLastRowWithContent(rawDataTab);
  var rawDataCell = `${rawDataColumn}${rawDataRow}`
  var cellContent = rawDataTab.getRange(rawDataCell).getValue()

  return cellContent;
}

function nameAndItemAreInPaoliTracker() {
  name = getLatestItem("A");
  itemInStorage = getLatestItem(itemInStorageName)
  
  var lastRow = nonReservedTab.getLastRow();
  var columnBValues = nonReservedTab.getRange("A1:A" + lastRow).getValues();
  
  for (var i = 0; i < columnBValues.length; i++) {
    if (columnBValues[i][0] === name) {


      var nameRowNumber = i + 1; // Adding 1 to convert to actual row number
      nameRowNumber = nameRowNumber.toString()
      var itemInStorageColumn = getPaoliColumnByName(itemInStorageName)

      var itemInStorageCell = `${itemInStorageColumn}${nameRowNumber}`
      var itemInStorageContent = nonReservedTab.getRangez(itemInStorageCell).getValue();

      if (itemInStorage === itemInStorageContent) {
        console.log(true)
        return true;
      }
    }
  }
  console.log(false)

  return false;
}

function lastRowsAreTheSame(rawDataRow, paoliPreviousRow) {
  paoliPreviousRow = paoliPreviousRow.toString();
  rawDataRow = rawDataRow.toString();
  var paoliCell = `A${paoliPreviousRow}`;
  var rawDataCell = `${nameColumn}${rawDataRow}`;
  

  var lastPaoliContent = nonReservedTab.getRange(paoliCell).getValue();
  var lastDataContent = rawDataTab.getRange(rawDataCell).getValue();

  console.log(lastPaoliContent)
  console.log(lastDataContent)
  
  if (lastPaoliContent === lastDataContent) {
    return true;
  } return false;
}

function getPaoliColumnByName(name) {
  var firstRow = nonReservedTab.getRange(1, 1, 1, nonReservedTab.getLastColumn()).getValues()[0];
  
  for (var i = 0; i < firstRow.length; i++) {
    if (firstRow[i] === name) {
      var columnLetter = String.fromCharCode('A'.charCodeAt(0) + i);
      console.log(columnLetter)
      return columnLetter;
    }
  }
  
  return "A";
}

function copyContent(column1, row1, column2, row2, tab1, tab2) {
  column1 = column1.toString()
  column2 = column2.toString()

  var dataCell = `${column1}${row1}`
  var paoliTrackerCell = `${column2}${row2}`

  var contentToCopy = tab1.getRange(dataCell).getValue();
  
  console.log(contentToCopy)

  tab2.getRange(paoliTrackerCell).setValue(contentToCopy);
}

function migrateDocuSignData() {

  var rawDataRow = getLastRowWithContent(rawDataTab)
  var paoliPreviousRow = getLastRowWithContent(nonReservedTab)
  var paoliCurrentRow = paoliPreviousRow + 1

  if (nameAndItemAreInPaoliTracker() === false) {
    nonReservedTab.insertRowAfter(paoliPreviousRow);

    for (var rawDataColumn in columnMap) {
      var paoliColumnName = columnMap[rawDataColumn];
      var paoliColumn = getPaoliColumnByName(paoliColumnName)
      copyContent(rawDataColumn, rawDataRow, paoliColumn, paoliCurrentRow, rawDataTab, nonReservedTab)
    }
  }
  
}
