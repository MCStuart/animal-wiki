$(document).ready(function() {
  $("form.change").submit(function(event) {
    event.preventDefault();
    var selection = $('#animal').val();
    console.log(selection);
    function ohMy(selection) {
      if (selection === "lions") {
        $("#lionCard").show();
        $("#tigerCard").hide();
        $("#bearCard").hide();
      }
      else if (selection === "tigers") {
        $("#lionCard").hide();
        $("#tigerCard").show();
        $("#bearCard").hide();
      }
      else if (selection === "bears") {
        $("#lionCard").hide();
        $("#tigerCard").hide();
        $("#bearCard").show();
      }
      else {
        $("#lionCard").hide();
        $("#tigerCard").hide();
        $("#bearCard").hide();
      }
    };
    ohMy(selection);
  });
});
