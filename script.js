$("#sendMail").on("click", function(){
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var message = $("#message").val().trim();

    if(name == ""){
        $("#errorMess").text("Vvedite email");
        return false;
    } else if(email == ""){
        $("#errorMess").text("Vvedite name");
        return false;
    } else if(message == ""){
        $("#errorMess").text("Vvedite message");
        return false;
    }

    $("#errorMess").text("");

    $.ajax({
        url: 'mail.php',
        type: 'POST',
        cache : false,
        data: { 'name': name, 'email': email, 'message': message },
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").prop("disabled", true);
        },
        success: function(data) {
            alert(data);
            $("#sendMail").prop("disabled", false);
        }
    });
});
