
$(document).ready(function() {

  if (typeof(FileReader) != "undefined") {

    $('#submit').click(function(e) {
      var $file = $('#file');
      var file = $file[0].files[0];
      var reader = new FileReader();

      reader.onload = function(e) {
        var text = reader.result;

        if (file.type === "application/json") {
          window.json = JSON.parse(text);
          console.log(window.json);
        } else {
          console.log(text);
        }
      }

      reader.readAsText(file);
    });

  }

});
