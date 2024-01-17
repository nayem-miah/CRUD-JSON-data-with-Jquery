$(document).ready(function() {
    $('#mySelect').select2({
        ajax: {
            url: 'https://jsonplaceholder.typicode.com/users', // Replace with your endpoint URL
            dataType: 'json', // Adjust according to your API response format
            delay: 250, // Delay in milliseconds before the request is sent
            processResults: function(data) {

                // Modify fetched data format to suit Select2

                console.log(data)
                return {
                    results: data.map(function(user) {
                        return {

                            id: user.id,
                            text: user.email,
                            
                            // Other fields if needed
                        };
                    })
                };
            },
            cache: true // Enable caching to avoid duplicate requests
        },


        minimumInputLength: 1,// Set minimum input length before triggering the AJAX call
        placeholder:'search with ajax..'

    });
});
