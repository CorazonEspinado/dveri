function UserList() {

    $.ajax({
        url: '/users/GetUserData',
        type: 'GET',
        dataType: 'json',

        success: function (data) {
            console.log('Task list received');


            $('#user_info').empty().append(data);
               $.each(data, function (i, value) {
                var tr = $("<tr id=uzd"+value.id+"/>");
                tr.append( {
                });
                tr.append($("<td/>", {
                    text: value.id
                }));
                tr.append($("<td/>", {
                    text: value.name
                }));
                   tr.append($("<td/>", {
                       text: value.surname
                   }));
                   tr.append($("<td/>", {
                       text: value.login
                   }));
                   tr.append($("<td/>", {
                       text: value.struktura
                   }));
                   tr.append($("<td/>", {
                       text: value.usertype
                   }));
                   tr.append($("<td/>", {
                       text: value.email
                   }));
                   tr.append($("<td/>", {
                       html:
                       ' <button class="btn btn-info btn-xs" id="changepass"  data-changepass="'+value.id+'" data-id1="changepass'+value.id+'">Изменить пароль</button>'+
                       ' <button class="btn btn-info btn-xs" id="infouser"  data-info="'+value.id+'" data-id1="'+value.id+'">Инфо</button>'+
                       ' <button class="btn btn-warning btn-xs" id="edituser"  data-edit="'+value.id+'" data-id1="'+value.id+'">Редактировать</button>'+
                       ' <button class="btn btn-danger btn-xs" id="deleteuser" data-delete="'+value.id+'"data-id1="'+value.id+'">Удалить</button>'
                         }));

                $('#user_info').append(tr);
            });
        },
        error: function (data) {
        }
    })

}

//--------------------------------------

$(document).ready(function () {

    console.log('User list ready');
    UserList();

//--------------------------------------------------
    $('#adduser ').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        var url = $(this).attr('action');
        var post = $(this).attr('method');


       $.ajax({

            type: post,
            url: url,
            data: data,
            dataType: 'json',
            success: function (data) {

                //   $('#userinfo').modal('show');
                console.log('New user data received');
                $('#myModal').modal('hide');
                $('#genpassword').val('');
                $('#name').val('');

                UserList();
            },
            error: function (data) {
                console.log('Error');
            }
        });
    });
//----------------------------------------------------------


    $(document).on('click', '#deleteuser', function (e) {

        var id = $(this).attr('data-delete');

        $.post('/users/destroy', {id: id}, function (data) {
            console.log(data);
            UserList();
        });
    });

    //---------------------------------------------------

    $(document).on('click', '#changepass', function (e) {

        var id = $(this).attr('data-changepass');
           $.ajax({
            url: '/users/changePassword',
            data: {id: id},
            method: 'POST',
            dataType: 'json',
            success: function (response) {
                $('#changedpass').modal('show');
                $('#pass').html(response.new_password);
            }
        })
    });

    //-----------------------------------------------------

    $(document).on('click', '#genpass', function (e) {

        $.ajax({
            type: 'GET',
            url: '/users/GeneratePassword',


            success: function (response) {
                $('#genpassword').val(response);

            },

            error: function (response) {
                alert('net!');
            }
        });
    });

    //----------------------------------------------------------


    $(document).on('click', '#infouser', function (e) {

        var id = $(this).attr('data-info');

        $.ajax({
            url: '/users/show',
            method: 'POST',
            data: {id: id},
            dataType: 'json',

            success: function (info) {
                console.log('User info received');
                $('#showuserinfo').modal('show');
                $('#infoname').val(info.name);
                $('#infosurname').val(info.surname);
                $('#infologin').val(info.login);
                $('#infostruktura').val(info.struktura);
                $('#infousertype').val(info.usertype);
                $('#infoemail').val(info.email);
                $('#infopilseta').val(info.pilseta);
                $('#infoiela').val(info.iela);
                $('#infohouse').val(info.house);
                $('#inforoom').val(info.room);
                $('#infophone1').val(info.phone1);
                $('#infophone2').val(info.phone2);
            },
            error: function (info) {
                console.log('error');
            }
        });
    });

    //--------------------------------------------------------
    $(document).on('click', '#edituser', function (e) {

        var id = $(this).attr('data-edit');

        $.ajax({
            url: '/users/edit',
            method: 'POST',
            data: {id: id},
            dataType: 'json',

            success: function (info) {
                console.log('User info received for editing');
                $('#edituserinfo').modal('show');
                $('#editname').val(info.name);
                $('#editsurname').val(info.surname);
                $('#editlogin').val(info.login);
                $('#editstruktura').val(info.struktura);
                $('#editusertype').val(info.usertype);
                $('#editemail').val(info.email);
                $('#editpilseta').val(info.pilseta);
                $('#editiela').val(info.iela);
                $('#edithouse').val(info.house);
                $('#editroom').val(info.room);
                $('#editphone1').val(info.phone1);
                $('#editphone2').val(info.phone2);
                $('#editid').val(info.id);
                UserList();
            },
            error: function (info) {
                console.log('error');
            }
        });
    });
    //------------------------------------------------

    $('#edituserform').on('submit', function (e) {
        e.preventDefault();
        data = $(this).serialize();
        $('#edituserinfo').modal('toggle');
        $.ajax({
            url: '/users/UpdateUser',
            method: 'POST',
            data: data,
            dataType: 'json',
            success: function (edit) {
                alert(edit);
            },
            error: function (edit) {

            }
        })
    })

    //-------------------------------------------------


});

