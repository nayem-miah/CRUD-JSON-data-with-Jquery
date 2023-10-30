
$(document).ready(function() {
  // Handle form submission
  $('#myForm').on('submit', function(e) {
    e.preventDefault(); // Prevent the form from actually submitting

    // Serialize the form data into a query string
    var formData = $(this).serialize();

    // You can also use serializeArray() to get the form data as an array of objects
    // var formDataArray = $(this).serializeArray();

    // Log the serialized data to the console
    console.log('this is the data here...',formData);

    // You can now send the data to a server or perform other actions with it.
  });
});

