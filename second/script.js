$(document).ready(function() {
    


    $.getJSON('data.json', function(data) {
       
        const itemsPerPage = 10;
        let currentPage = 1;


  
    //  data, tableBody, itemsPerPage,currentPage
        function displayData(items,wrapper,rowsPerPage, page) {
    
            wrapper.html('');
            page--;
    
            let start = rowsPerPage * page;
      
            let end = start + rowsPerPage;
        
    
            let paginatedItems = items.slice(start, end);
            // return paginatedItems

            for (let i = 0; i < paginatedItems.length; i++) {
                wrapper.append(
                    // `<tr><td>${paginatedItems[i].id}</td><td>${paginatedItems[i].name}</td><td>${paginatedItems[i].email}</td></tr>`
                    `<tr>
                    <td>${paginatedItems[i].no}</td>
                    <td>${paginatedItems[i].courseLevel}</td>
                    <td>${paginatedItems[i].courseCode}</td>
                    <td>${paginatedItems[i].subject}</td>
                    <td>${paginatedItems[i].group}</td>
                    <td>${paginatedItems[i].marks}</td>
                    <td>
                        <a id="btnUpdate" class="btn btn-secondary mx-1 rounded-circle" data-bs-toggle="modal" data-bs-target="#exampleModal2" href="">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </a>

                        
                        <a id="btnDlt" class="btn btn-danger mx-1 rounded-circle" data-bs-toggle="modal" href="">
                            <i class="fa-solid fa-trash"></i>
                        </a>
                  
                   </td>
                    
                </tr>`
                );   

                  
            }

        }
    

        function setupPagination(items, wrapper, rowsPerPage) {
            wrapper.empty();
            let pageCount = Math.ceil(items.length / rowsPerPage);
            for (let i = 1; i <= pageCount; i++) {
                wrapper.append(`


                <li class="page-item"><a href="#" class="page-link pagination-link">${i}</a></li>`
                
                
                );
            }
        }

        
        displayData(data,$('#table-body'),itemsPerPage,currentPage)

        // setupPagination(data,table,itemsPerPage)
        setupPagination(data, $('.pagination'), itemsPerPage);


        $('#pagination').on('click', '.pagination-link', function(e) {
            e.preventDefault();
            const currentP = parseInt($(this).text());
            displayData(data, $('#table-body'),itemsPerPage, currentP);
        });
        
    });











// delete confirmation.....................
    function confirmFun(row) {
    
        if (confirm("Are you sure you want to delete?")) {

        row.remove();
        var primaryKey = row.find("td:first").text(); // Assuming the first cell contains the primary key

        console.log(primaryKey)
        
        } 
    }


// Function to delete a row
   $('#table-body').on('click', '#btnDlt', function() {
    // $(this).closest('tr').remove();

    const row =$(this).closest('tr')
    confirmFun(row)

    });



// funtion to bring data from form and to send it to server

    $('#submitBtn').on('click', function() {
       

        var formDataArray = $('#myForm').serializeArray();

        // Convert the array to an object with key-value pairs
        var formData = {};
        $.each(formDataArray, function(i, field) {
        formData[field.name] = field.value;
        });

        // Log the key-value pairs to the console
        console.log(formData);
    
        // You can now send the serialized data to a server or perform other actions with it.


      });


// funtion to bring updated data from update form and to send it to server

    $('#updateButton').on('click', function() {
       

        var formDataArray = $('#updateForm').serializeArray();

        // Convert the array to an object with key-value pairs
        var formData = {};
        $.each(formDataArray, function(i, field) {
        formData[field.name] = field.value;
        });

        // Log the key-value pairs to the console
        console.log(formData);
    
        // You can now send the serialized data to a server or perform other actions with it.


      });



    // function to update the data
    $.getJSON('data.json', function(data) {
        
            //    Function to update a row
            $('#data-table').on('click', '#btnUpdate', function() {


                const primaryKey = $(this).closest("tr").children().html();   
                

                        $.each(data, function(index,item){
                          
                        
                            if (item.no == primaryKey){
                    

                                $("#updateNum").val(item.no)
                                $("#updateLev").val(item.courseLevel)
                                $("#updateCode").val(item.courseCode)
                                $("#updateTitle").val(item.subject)
                                $("#updateGroup").val(item.group)
                                $("#updateMarks").val(item.marks)
                            

                            }
                            
                        });
            
            });
  
      });


 


});

