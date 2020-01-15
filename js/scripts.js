$(document).ready(function(){
  $("#order-btn").click(function(){
    $("#flavor-col").hide();
    $("#choc").show();
    $("#address-col").show();
  });
  
  $("#details").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var addressInput = $("input#address").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".address").text(addressInput);

    $("#output").show();

    event.preventDefault();
  });
});