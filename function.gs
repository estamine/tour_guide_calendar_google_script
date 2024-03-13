function apply_colors(e){

  var guide = e.value;
  var row_index = e.range.getRow();
  var column_index = e.range.getColumn();
  var celula_mudada = as.getRange(row_index, column_index);
 
  if (as.getName() != "Aux") {
  
  celula_mudada.setBackgroundColor(guides_list_color[guides_list.indexOf(guide)]);
   
  } else if (as.getName() == "Aux") {
  
  // if column == 1 then 3-1=2, if column == 2 then 3-2=1
  var celula_mudada2 = as.getRange(row_index, 3-column_index);  
  
  celula_mudada.setBackgroundColor(guides_list_color[guides_list_color.indexOf(guide)]);
  celula_mudada2.setBackgroundColor(guides_list_color[guides_list_color.indexOf(guide)]);
 
  };
};

function check_guide_complete(){
  
    var row_index = 3;
    var guides_of_day = [];
    var errors_found_guides = 0;
    var errors_found_guides_total = 0;

    var column_index = 3;
    var column_max = 37;
    var error_text = "Erros mês: ";
   
    // Set all borders and error cell back to normal
    var celula = as.getRange("C3:AL10");
    celula.setBorder(true, true, true, true, true, true, "black", SpreadsheetApp.BorderStyle.SOLID);

    // Set checking warning
    var celula_erro = as.getRange("B12");
    var celula_erro_local = as.getRange("C12:AL12");
    celula_erro_local.setValue("");
    celula_erro_local.setBackgroundColor("#ffffff");

    var checking_msg = "Checking day: ".concat(column_index-2);
    celula_erro.setValue(checking_msg);
    celula_erro.setBackgroundColor("#ffe119");
    
    // Check for duplicate guides in the whole month
    
  while (column_index <= column_max) {
    
    guides_of_day = [];
    row_index = 3;
    errors_found_guides = 0;
     
    while (row_index <= 10) {
      
      var current_guide = as.getRange(row_index, column_index).getValue();
      
      if (current_guide != "...") {
        
        var celula = as.getRange(row_index, column_index);
        celula_erro_local = as.getRange(12, column_index);
        
        celula.setBackgroundColor(guides_list_color[guides_list.indexOf(current_guide)]);
        
        if (guides_of_day.indexOf(current_guide) > -1) {
          
          //celula.setBackgroundColor("#ff0000");
          celula.setBorder(true, true, true, true, true, true, "red", SpreadsheetApp.BorderStyle.SOLID_THICK);
          errors_found_guides += 1;     
          
        } else {
          
          guides_of_day.push(current_guide);
          
        }
      }
        
        row_index += 1;

      }
    
    celula_erro_local.setValue(errors_found_guides);
    
    if ( errors_found_guides > 0) {
      
      celula_erro_local.setBackgroundColor("#ff0000");
      errors_found_guides_total += errors_found_guides;
      
    };
      
      column_index += 1;
      checking_msg = "Checking day: ".concat(column_index-2);
      celula_erro.setValue(checking_msg);
        
    
    };
    
  celula_erro.setValue(error_text + errors_found_guides_total);
  
  if (errors_found_guides_total > 0) {
    
    celula_erro.setBackgroundColor('#e6194B');
    
    } else {
   
    celula_erro.setBackgroundColor('#3cb44b');
    
    };
    
  ;};

// End of complete check if guide already on the days 
/*
function check_guide_day(e){
  
  if (as.getName() != "Aux") {
   
  guides_list = aux.getRange("A2:A22").getValues().join().split(',').filter(Boolean);
  guides_list_color = aux.getRange("B2:B22").getValues().join().split(',').filter(Boolean);
    
    var row_index = 3;
    var guides_of_day = [];
    var errors_found_guides = 0;

    var column_index = e.range.getColumn();
//    ui.alert(column_index);
    var error_text = "Erros dia: ";
    
    // Set all borders and error cell back to normal
    
    var celula = as.getRange(row_index, column_index, 8, 1);
    celula.setBorder(true, true, true, true, true, true, "black", SpreadsheetApp.BorderStyle.SOLID);

    // Set checking warning
    var celula_erro = as.getRange("B12");
    var checking_msg = "A ver se o Zé\nfez o dia bem...";
    celula_erro.setValue(checking_msg);
    celula_erro.setBackgroundColor("#ffe119");
    
    // Check for duplicate guides in the day
    
    guides_of_day = [];
    row_index = 3;
     
    while (row_index <= 10) {
      
      var current_guide = as.getRange(row_index, column_index).getValue();
      
      if (current_guide != "...") {
        
        var celula = as.getRange(row_index, column_index);
        
        celula.setBackgroundColor(guides_list_color[guides_list.indexOf(current_guide)]);
        
        if (guides_of_day.indexOf(current_guide) > -1) {
          
          //celula.setBackgroundColor("#ff0000");
          celula.setBorder(true, true, true, true, true, true, "red", SpreadsheetApp.BorderStyle.SOLID_THICK);
          errors_found_guides += 1;
          
        } else {
          
          guides_of_day.push(current_guide);
          
        }
      }
        
        row_index += 1;
      }
    
    celula_erro.setValue(error_text + errors_found_guides);
  
  if (errors_found_guides > 0) {
    
    celula_erro.setBackgroundColor('#e6194B');
    
    } else {
   
    celula_erro.setBackgroundColor('#3cb44b');
    
    };
    
  };};

// End of Check if guide already on this day
*/