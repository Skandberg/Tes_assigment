   $(document).on("click", "#check_text",function(){
     
       var field_name=$('#name');
       var field_surname=$('#surname');
       var field_personal_code=$('#personal_code');
       
       if (field_name.val()==''|| field_surname.val()==''||field_personal_code.val()=='')
       {
          var missing_fields='';
          if(field_name.val()=='')
          { 
            missing_fields+="Name; ";
            $("#name").css('background-color','pink');
          }
          if (field_surname.val()=='')
          {
            missing_fields+="Surname; ";
            $("#surname").css('background-color','pink');
          }
          if (field_personal_code.val()=='')
          {
            missing_fields+="Personal code; "
            $("#personal_code").css('background-color','pink');
          }
          alert("Please fill the following fields " + missing_fields);
       }
      else
      {
        alert ("Succesfully completed ");
        location.reload();
      }
     });  
     

   