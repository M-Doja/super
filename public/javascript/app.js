$(document).ready(function(){
    $("#send_email").click(function(){
        var from;
        var to = "photolisana@gmail.com";
        var subject = document.getElementById("subject").value;
        var text = document.getElementById("text").value;
        console.log(to);
        if (text == "" && subject == "") {
          console.log('No data entered. Send cancelled');
          $("#message").html("<p style='font-family:arial black'>There is missing information!</p>");
          return;
        }
        $("#message").html("<p style='font-family:arial black'>Sending Message...Please wait</p>");
        $.get("/send",{to:to,subject:subject,text:text},function(data){
        // if(data=="sent")
        // {
        //     $("#message").empty().html("<br><br><br><h4 id='sent'>Email has been sent to "+to+".<br> Thanks for the message! I'll get back to you as soon as I can.</h4>");
        // }
      });
      document.getElementById("subject").value = '';
      document.getElementById("text").value = '';
    });

});
