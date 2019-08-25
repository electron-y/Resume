$("#sendMail").on("click", function(){
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var message = $("#message").val().trim();

    if(name == ""){
        $("#errorMess").text("Vvedite name");
        return false;
    } else if(email == ""){
        $("#errorMess").text("Vvedite email");
        return false;
    } else if(message == ""){
        $("#errorMess").text("Vvedite message");
        return false;
    }

    $("#errorMess").text("");

    alert("Thank you! Your message has been sent to Yan!");
});
