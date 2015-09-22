$(document).ready(function() {
  //var toDoList = $("#showTaskList");
  //var userTask = $("#newtask").val;
  var myArray = [];

  $("#enterTask").submit(function(event) {
    event.preventDefault();

    var userTask = $("#newtask").val();

    $("#showTaskList").append("<button type='btn btn-default btn-xs' class='list-group-item'>" + userTask + "</button>");

    $("#showTask").show();

    $("#newtask").val("");
    $("#newtask").focus();

    myArray.push(userTask);

    //need to write a function when the list item is clicked that it will remove it. trying to use array so that we pick the correct list item

  });



});
