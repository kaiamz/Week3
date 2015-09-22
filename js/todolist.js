$(document).ready(function() {

  var listID = 0;

  for( listID = 0; listID < sessionStorage.length; listID++) {
    $("#showTaskList").append("<li><span id='list" + listID + "'>" + sessionStorage.getItem('list'+listID) + " </span><button class='btn btn-info btn-xs pull-right' id='delete" + listID + "'>Done</button></li>");
  }

// Adding a task
  $("#enterTask").submit(function(event) {
    event.preventDefault();

    var userNewTask = $("#newtask").val();

    if ( userNewTask != "" ) {
      sessionStorage.setItem("list" + listID, userNewTask);

      $("#showTaskList").append("<li><span id='list" + listID + "'>" + sessionStorage.getItem('list'+listID) + " </span><button class='btn btn-info btn-xs pull-right' id='delete" + listID + "'>Done</button></li>");

      $("#showTask").show();

      $("#newtask").val("");
      $("#newtask").focus();

    listID++;
    }

    $("#delete" + listID).click(function() {
      sessionStorage.removeItem(this).parent().remove();
    });

  });

// Remove a task


  // $("#showTask").click(function () {
  //   sessionStorage.removeItem($(this).parent().attr("id"));
  //   $(this).parent().hide();
  //   for (listID = 0; listID < localStorage.length; listID++) {
  //     if (!sessionStorage.getItem("list" + listID)) {
  //       sessionStorage.setItem("list" + listID, sessionStorage.getItem('list' + (listID + 1) ) );
  //       sessionStorage.removeItem('list' + (listID + 1) );
  //     }
  //   }
  // });

});
