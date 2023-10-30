$(document).ready(function() {
    const data = [
        { id: 1, name: 'John', email: 'john@example.com' },
        { id: 2, name: 'Jane', email: 'jane@example.com' },
        { id: 3, name: 'Bob', email: 'bob@example.com' },
        { id: 4, name: 'Nayem', email: 'nayem@example.com' },
        { id: 5, name: 'Emran', email: 'bob@example.com' },
        { id: 6, name: 'Rashel', email: 'bob@example.com' },
        { id: 7, name: 'Romana', email: 'bob@example.com' },
        { id: 8, name: 'Maysha', email: 'bob@example.com' },
        { id: 9, name: 'Himel', email: 'bob@example.com' },
        { id: 10, name: 'Rifat', email: 'kate@example.com' },
        { id: 11, name: 'Raka', email: 'kate@example.com' },
        { id: 12, name: 'Obaidul', email: 'kate@example.com' },
        
    ];

    const itemsPerPage = 5;
    let currentPage = 1;
                 //  data, tableBody, itemsPerPage,currentPage
    function displayData(items, wrapper, rowsPerPage, page) {

        wrapper.html('');
        page--;

        let start = rowsPerPage * page;
        
        let end = start + rowsPerPage;
      

        let paginatedItems = items.slice(start, end);
      

        for (let i = 0; i < paginatedItems.length; i++) {
            wrapper.append(
                `<tr><td>${paginatedItems[i].id}</td><td>${paginatedItems[i].name}</td><td>${paginatedItems[i].email}</td></tr>`
            );
        }
    }

    function setupPagination(items, wrapper, rowsPerPage) {
        wrapper.empty();
        let pageCount = Math.ceil(items.length / rowsPerPage);
        for (let i = 1; i <= pageCount; i++) {
            wrapper.append(`<li><a href="#" class="pagination-link">${i}</a></li>`);
        }
    }

    displayData(data, $('#table-body'), itemsPerPage, currentPage);
    setupPagination(data, $('.pagination'), itemsPerPage);

    $('#pagination').on('click', '.pagination-link', function(e) {
        e.preventDefault();
        currentPage = parseInt($(this).text());
        displayData(data, $('#table-body'), itemsPerPage, currentPage);
    });
});
