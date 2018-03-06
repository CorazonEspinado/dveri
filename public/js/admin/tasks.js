var table;

$(document).ready(function(){

table = $('#task-table').DataTable( {

        processing: true,
        serverSide: true,
          ajax: "/tasks/GetTasks",

              rowId: "id",
              "columns": [
                  {"data": "id"},
                  {"data": "uzdevums"},
                  {"data": "name"},
                  {"data": "status"},
                  {"data": "created_at"},
                  {"data": "Izpildit_lidz"},
                 { "data": null },
        ],
        columnDefs: [{
        searchable: false,
        
        targets: [-1], 
        render: function (a, b, data, d) {

            if (data.status != "Выполнено") {
                 return '<button class="btn btn-warning btn-xs" id="edittask">Редактировать</button>' +
                  '<button class="btn btn-danger btn-xs" id="deletetask">Удалить</button>';
            } 
            return ''
            
            }
    }],
       
              language: {
      "processing": "Подождите...",
      "search": "Поиск:",
      "lengthMenu": "Показать _MENU_ записей",
      "info": "Записи с _START_ до _END_ из _TOTAL_ записей",
      "infoEmpty": "Записи с 0 до 0 из 0 записей",
      "infoFiltered": "(отфильтровано из _MAX_ записей)",
      "infoPostFix": "",
      "loadingRecords": "Загрузка записей...",
      "zeroRecords": "Записи отсутствуют.",
      "emptyTable": "В таблице отсутствуют данные",
      "paginate": {
        "first": "Первая",
        "previous": "Предыдущая",
        "next": "Следующая",
        "last": "Последняя"
      },
      "aria": {
        "sortAscending": ": активировать для сортировки столбца по возрастанию",
        "sortDescending": ": активировать для сортировки столбца по убыванию"
      }
  }
    } );
});

   //          var now = moment();//.format('YYYY-MM-DD  h:mm:ss ');
   //          //    tmp=moment(value.Izpildit_lidz).format('YYYY-MM-DD');
   //
   //              tmp1=moment().format('YYYY-MM-DD');
   
    // var now = moment();//.format('YYYY-MM-DD  h:mm:ss ');
    //             tmp=moment(Izpildit_lidz).format('YYYY-MM-DD');
    //            console.log(tmp);
    //             tmp1=moment().format('YYYY-MM-DD');
   
    //             if (status=="Выполнено") {
    //                $('#uzd' + value.id).css({ 'background-color' : '#00ffff' });
    //
    //                $('#Izpildits'+value.id).hide();
    //                 $('[data-edit=edittask'+value.id+']').hide();
    //                 $('[data-delete=deletetask'+value.id+']').hide();
    //
    //             } else
    //
    //            if (moment(value.Izpildit_lidz) < now) {
    //
    //                $('#uzd' + value.id).css({ 'background-color' : '#cc6699' });
    //            } else
    //                if (tmp==tmp1) {
    //
    //                    $('#uzd' + value.id).css({ 'background-color' : '#ffff00' });
    //
    //
    //            }



function TaskList() {
  table.ajax.reload();
  //Done();


  }



                // var now = moment();//.format('YYYY-MM-DD  h:mm:ss ');
                // tmp=moment(value.Izpildit_lidz).format('YYYY-MM-DD');
    //         //    console.log(tmp);
    //             tmp1=moment().format('YYYY-MM-DD');
    
    
    //             if (value.status=="Выполнено") {
    //                $('#uzd' + value.id).css({ 'background-color' : '#00ffff' });
    
    //                $('#Izpildits'+value.id).hide();
    //                 $('[data-edit=edittask'+value.id+']').hide();
    //                 $('[data-delete=deletetask'+value.id+']').hide();
    
    //             } else
    
    //            if (moment(value.Izpildit_lidz) < now) {
    
    //                $('#uzd' + value.id).css({ 'background-color' : '#cc6699' });
    //            } else
    //                if (tmp==tmp1) {
    
    //                    $('#uzd' + value.id).css({ 'background-color' : '#ffff00' });
    
    //                }
    
    //         });
    
    
    
    
    
    //     },
    //     error: function (data) {
    //         console.log('Error');
    //     }
    // })

//-----------------------------------------




//------------------------------------------------------------
function CheckDelayedTasks() {

TimeNow=moment().format('YYYY-MM-DD HH:mm');
// alert (TimeNow);

    $.ajax({

        type: 'GET',
        data:TimeNow,
        url: '/tasks/GetDelayedTasks',
        success:function(delay){
            RecordsNumber=delay.length;
            n=0;
            $('#admindelay').empty().append(delay);
            $('#delaytable').empty();
            $('#delaytable').append('<table bgcolor="#00FF00">');
            $('#delaytable').append('<tr>');

            TimeNow=moment().format('YYYY-MM-DD');

            $.each(delay, function(i, value) {


                  // console.log (value.id+'izpildit'+moment(value.Izpildit_lidz).format('YYYY-MM-DD')+'now'+TimeNow);

                if (moment(value.Izpildit_lidz)< moment() && value.status=='Выдано поручение') {
                    //    alert ('a');


   //                 console.log ('id'+value.id+'izpildit'+moment(value.Izpildit_lidz).format('YYYY-MM-DD')+'time now'+TimeNow);

                    n=n+1;
                    $('#admindelay').html('<h4 align="center">Невыполненных задач:  '+n+'</h4>');
                    $('#delaytable').append("<tr><td bgcolor='#ff4500'>"+value.id+"</td><td bgcolor='#ff4500'>"+value.name+"</td>" +
                        "<td bgcolor='#ff4500'>"+value.uzdevums+"</td><td bgcolor='#ff4500'>"+value.Izpildit_lidz+"</td></tr>");


                } else {
                    //  alert ('b')
// 

                }

            });

            $('#delaytable').append('</tr>');
            $('#delaytable').append('</table>');

            // $(function () {
            //     $('#taskdelaymessage').dialog({
            //   modal: true,
            //     title: "Невыполненных задач:"+n,
            //      buttons: {
            //           "Приготовить вазелин!": function () {
            //            $(this).dialog("close");
            //       }
            //    }
            //       });
            //    });
        }
    });

}
//-----------------------------------------------------------------------------------

$(document).ready(function() {

    console.log('Task list ready');

    setInterval(TaskList, 5000);
    CheckDelayedTasks();
   setInterval(CheckDelayedTasks, 5000);
//Done();

//----------------------------------------

    $('#addTask').on('submit', function (e) {


          e.preventDefault();
        var otherValue = $(this).find('option:selected').attr('data-othervalue');
         data = $(this).serializeArray();


        data.push({name: 'name', value: otherValue});
        var url = $(this).attr('action');
        var post = $(this).attr('method');
        $('#newuzdevums').val('');
        $('#deadline').val('');
        $('#izpilditajs').val('');


        $.ajax({

            type: post,
            data: data,
            url: '/tasks/storeTask',
            dataType: 'json',
            success: function (data) {
                $('#addNewTask').modal('hide');



                console.log('New task data received');

                TaskList();

            },

            error: function(xhr, status, error) {
                console.log(status);
                var err = eval("(" + xhr.responseText + ")");
                alert(err.message);
            }

        });

    });

    //------------------------------------------------


    $(document).on('click', '#Izpildits', function (e) {
        var id = $(this).data('id');
        temp = $(this);

        $.post('/tasks/StatusUpdate', 
            {id: id}, 
            function (data) {
            temp.css("background", "green");

            TaskList();


            console.log('Uzdevums Izpildits');

        })
    });

//--------------------------------------------------------

    $(document).on('click', '#deletetask', function (e) {

        var data = table.row( $(this).parents('tr') ).data();
        var id = data.id;
        $.post('/tasks/destroy', {id: id}, function (data) {

            TaskList();
            CheckDelayedTasks();
        });
    });

//---------------------------------------------------------------


    $(document).on('click', '#edittask', function (e) {

        var data = table.row( $(this).parents('tr') ).data();
        $.ajax({
            url: '/tasks/editTask',
            type: 'POST',
            data: {id: data.id},
            dataType: 'json',

            success: function (response) {

                if (response && response.taskedit) {
                    $('#editModal').modal('show');
                    $('#editid').val(response.taskedit.id);
                    $('#uzdevums').val(response.taskedit.uzdevums);
                    $('#date').val(response.taskedit.Izpildit_lidz);
                    //    $('#editid').html('value'+response.taskedit.id);
                }
                else {
                    alert('Task not found!!!');
                }
            },

            error: function (response) {
            }
        })

    });

    //------------------------------------------------------------

    $('#updateTask').on('submit', function (e) {
        $('#editModal').modal('toggle');
        e.preventDefault();
        var otherValue = $(this).find('option:selected').attr('data-othervalue');
        data = $(this).serializeArray();
        data.push({name: 'name', value: otherValue});
        var url = $(this).attr('action');
        var post = $(this).attr('method');

        $.ajax({

            type: post,
            url: url,
            data: data,
            DataType: 'json',

            success: function (i, value) {
                console.log('Task updated');

                TaskList();
            }
        })
    });

    //----------------------------------


});


