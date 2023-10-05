$(document).ready(function() {



// to get data from JSON file
    $.getJSON('data.json', function(data) {
        var table = $('#data-table tbody');
        
  
        $.each(data, function(index, item) {
            var row = '<tr>' +

                '<td id="primaryID">' + item.no + '</td>' +
                '<td>' + item.Name + '</td>' +
                '<td>' + item.created + '</td>' +
                '<td>'+'<button id="btnUpdate" data-bs-toggle="modal" data-bs-target="#exampleModal2" class="btn btn-info">' + 'update' + '</button>'+'</td>' +
                '<td>'+'<button id="btnDlt" class="btn btn-danger">' + 'delete' + '</button>'+'</td>' +
                '</tr>';

            table.append(row);
        });   
        
    });

    

     // Function to delete a row
     $('#data-table').on('click', '#btnDlt', function() {
        $(this).closest('tr').remove();
    });


    $.getJSON('data.json', function(data) {
        var table = $('#data-table tbody');
        


    //    Function to update a row
     $('#data-table').on('click', '#btnUpdate', function() {

        const primaryKey = $(this).closest("tr").children().html();
        

        $.each(data, function(index,item){
          
            if (item.no == primaryKey)

                $("#updateNo").val(item.no)
                $("#updateTitle").val(item.Name)
            
            })
            
        })

        });

      
    });













