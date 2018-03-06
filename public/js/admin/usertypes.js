function UserTypeList() {



        $.get('/Usertypes/GetUserTypes', function(data){
    // console.log(data);

        //    console.log(data);
       $('#select_type').empty().html(data);


    });

    console.log('UserType list received')
}



$(document).ready(function () {

    console.log ('UserType list ready');


    UserTypeList();

  //setInterval(UserTypeList, 40000);
    //   $('#user_info').click(function() {
    //       alert (data);

    //  $.ajax({
    //  url: 'testUrl',
    //    type: 'GET',
    //       data: { id: 1 },
    //        success: function(response)
    //        {
    //           $('#something').html(response);
    //        }
    //    });
    //   });


});

