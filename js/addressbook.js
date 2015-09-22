$(document).ready(function() {
  $("#new-contact").submit(function(event) {
    event.preventDefault();

    var userInputFirstName = $("#new-first-name").val();
    var userInputLastName = $("#new-last-name").val();
    var userInputAddress = $("#new-address").val();
    var userInputPhoneNum = $("#new-phone-num").val();
    var userInputEmail = $("#new-email").val();
    var newContact = {
        firstName: userInputFirstName,
        lastName: userInputLastName,
        address: userInputAddress,
        phoneNumber: userInputPhoneNum,
        email: userInputEmail};

    $("#contacts").append("<li><span class='contact'>" +
    newContact.firstName + " " + newContact.lastName + "</span></li>");

    $("#new-first-name").val("");
    $("#new-last-name").val("");
    $("#new-address").val("");
    $("#new-phone-num").val("");
    $("#new-email").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".address").text(newContact.address);
      $(".phoneNumber").text(newContact.phoneNumber);
      $(".email").text(newContact.email);
    });

  });

});
