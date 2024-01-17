
$(document).ready(function() {
  $('#myForm').submit(function(e) {


   
    e.preventDefault();

    var formData = [];
    $(this).find(':input').each(function() {
      var inputObject = {
        name: this.name,
        value: $(this).val()
      };
      formData.push(inputObject);
    });

    console.log(formData);

    // You can send the formData array to the server using AJAX or perform any other actions.
  });
});
