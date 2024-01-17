$(document).ready(function() {
    var data = [
      { id: 1, text: 'Apple' },
      { id: 2, text: 'Banana' },
      { id: 3, text: 'Orange' },
      { id: 4, text: 'Jackfruit' },
      { id: 5, text: 'pineapple' },
      { id: 6, text: 'Guava' },
      // Add more objects as needed
    ];
  
    $('#selectSearch').select2({
      data: data,
      placeholder:'arrey dynamic search',

    //tags: true means we can create dynamic option
      tags:true,
    });
  });

  