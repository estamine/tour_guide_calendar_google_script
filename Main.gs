
var ui = SpreadsheetApp.getUi();
var as = SpreadsheetApp.getActiveSheet();
var aux = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Aux");
var guides_list = aux.getRange("A2:A22").getValues().join().split(',').filter(Boolean);
var guides_list_color = aux.getRange("B2:B22").getValues().join().split(',').filter(Boolean);

function onEdit(e){
  
  apply_colors(e);
//  check_guide_day(e);

}
