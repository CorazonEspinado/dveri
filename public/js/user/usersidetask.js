function TaskList() {

    $.ajax({
        type: 'GET',
        url: '/tasks/GetUserTasks',

        success: function (data) {
            console.log('Task list received');
            $('#task_info').empty().append(data);

            $.each(data, function (i, value) {

                var tr = $("<tr id=uzd"+value.id+"/>");
                tr.append( {

                });


                tr.append($("<td/>", {
                    text: value.id
                }));

                tr.append($("<td/>", {
                    text: value.uzdevums
                }));

                tr.append($("<td/>", {
                    text: value.name
                }));

                tr.append($("<td/>", {
                    text: value.status
                }));

                tr.append($("<td/>", {
                    text: value.created_at,

                }));

                tr.append($("<td/>", {
                    text: value.Izpildit_lidz
                }));

                tr.append($("<td/>", {
                    html:
                    ' <button class="btn btn-warning btn-xs" id="izpildits"  data-izpildits="izpildits'+value.id+'" ' +
                    'data-id2="'+value.id+'">Исполнено</button>'




                }));
                $('#task_info').append(tr);



                var now = moment();//.format('YYYY-MM-DD  h:mm:ss ');
                tmp=moment(value.Izpildit_lidz).format('YYYY-MM-DD');
              //  console.log(tmp);
                tmp1=moment().format('YYYY-MM-DD');
        //        console.log(tmp1);

                // console.log (now);
                //    console.log (value.Izpildit_lidz);


                if (value.status=="Выполнено") {
                    $('#uzd' + value.id).css({ 'background-color' : '#00ffff' });

                    $('[data-izpildits=izpildits'+value.id+']').hide();
                    $('[data-edit=edittask'+value.id+']').hide();
                    $('[data-delete=deletetask'+value.id+']').hide();

                } else

                if (moment(value.Izpildit_lidz) < now) {

                    $('#uzd' + value.id).css({ 'background-color' : '#cc6699' });
                  //  ClientDelaysTask();
              //      setInterval(ClientDelaysTask, 5000);


                } else
                if (tmp==tmp1) {

                    $('#uzd' + value.id).css({ 'background-color' : '#ffff00' });

                }

            })
        },
        error: function (data) {
            console.log('Error');
        }
    });
}


//------------------------------------------------------------------------------------------------------------------------------------------





function CheckDelayedTasks() {


    $.ajax({

        type: 'GET',
        url: '/tasks/GetUserTasks',
        success:function(delay){
       RecordsNumber=delay.length;

     n=0;
     // alert (m);
            $('#delay').empty().append(delay);
            $('#delayed').empty();
            $('#delayed').append("<table bgcolor='#00FF00'>");



            TimeNow=moment().format('YYYY-MM-DD');

            $.each(delay, function(i, value) {


        //  console.log (value.id+'izpildit'+moment(value.Izpildit_lidz).format('YYYY-MM-DD')+'now'+TimeNow);

               if (moment(value.Izpildit_lidz)< moment() && value.status=='Выдано поручение') {
              //     alert ('a');


       //      console.log ('id'+value.id+'izpildit'+moment(value.Izpildit_lidz).format('YYYY-MM-DD')+'time now'+TimeNow);

                   n=n+1;
                $('#delay').html('<h4 align="center">Невыполненных задач:  '+n+'</h4>');

                   $('#delayed').append("<tr><td bgcolor='#ff4500'>"+value.id+"</td><td bgcolor='#ff4500'>"+value.name+"</td>" +
                       "<td bgcolor='#ff4500'>"+value.uzdevums+"</td><td bgcolor='#ff4500'>"+value.Izpildit_lidz+"</td></tr>");



               } else {



               }
                $('#delayed').append("</table>");



            });


        },
        error: function (delay) {
            console.log ('Error');
        }
    });

}

//------------------------------------------------------------------------------------------------------------------------------------------


function MailNotification() {

    $.ajax({

        type: 'GET',
        url: '/tasks/GetUserTasks',
        success: function (mail) {
         //   console.log(mail);
var ids=[];
//---------------------------
            $.each(mail, function(i, value) {
                if (moment(value.Izpildit_lidz)< moment() && value.status=='Выдано поручение') {
                 //   alert ('a');
                //    console.log('id' + value.id + 'izpildit' + moment(value.Izpildit_lidz).format('YYYY-MM-DD') + 'time now' + TimeNow);

                   
                    ids.push(value.id)


                }


            });
//------------------------------

           $.ajax({
               type:'POST',
               data:{ids:ids},
               url:'/tasks/DelayedTaskNotification',
               
               success:function(response){
                   
               },
               error:function (response) {
                   
               }
               
           });
//--------------------           
        },

        error: function(mail) {
            console.log ('mail error')
        }
    });

}



//--------------------------------------------------------------------------------------------------------------------------------------------

$(document).ready(function () {

    test='oj';

    console.log('Task list ready');



    TaskList();
    CheckDelayedTasks();

    setInterval(TaskList, 5000);
    setInterval(CheckDelayedTasks, 5000);



//------------------------------------------------------------------------------------------------------------------------------------------


    $(document).on('click', '#izpildits', function (e) {
        var id = $(this).attr('data-id2');


        $.post('/tasks/StatusUpdate', {id: id}, function (data) {
            $('[data-izpildits='+data.id+']').hide();
            TaskList();
            CheckDelayedTasks();
            //    $('td').css({'background-color':'green'});

            console.log('Uzdevums Izpildits');

        })
    });


//----------------------------------------------------------------------------------------------------------------------------------------










});