
function CalendarRefresh() {
  $('#calendar').fullCalendar('refetchEvents');
}

function Calendar() {
	$('#calendar').fullCalendar({

   allDaySlot:false,
		theme:false,
		resources: 'calendar/GetRooms',
		dayClick: function(date, jsEvent, view, eventSources) {
      datenow=moment().format("YYYY-MM-DD HH:mm");
    
			 var clickDate=date.format('YYYY-MM-DD HH:mm');
        NextDate=moment(clickDate).add(1, 'hours').format("YYYY-MM-DD HH:mm");
      
       if (clickDate<datenow){
        alert ('Error! Date already in the past');
       } else {
        
       $('#calendarform1').modal('show');
      $('#room').val(eventSources.id);
      $('#datetimepicker').val(clickDate);
      $('#datetimepicker1').val(NextDate);
     }
		
		},
		eventClick: function(eventSources) {

			data=eventSources.id;
     		$.ajax( {
				type:'POST',
				data:{id:data},
        url:'calendar/GetEventInfo',
				success:function(res) {
          CurrentDateTime=moment().format('YYYY-MM-DD HH:mm');
            if (res.end<CurrentDateTime) {
            $('#showevent').modal('show');
          $('#eventtypeinfo').val(res.title);
          $('#start').val(res.start);
          $('#end').val(res.end);
          $('#Ispolnitelj').val(res.ispolnitelj);
          $('#1234').val(res.resourceId);
          $('#deleteid').val(res.id);
          } else {
            $('#editdeleteevent').modal('show');
            $('#eventtypedelete').val(res.title);
          $('#eventstartdelete').val(res.start);
          $('#eventenddelete').val(res.end);
          $('#ispolniteljdelete').val(res.ispolnitelj);
          $('#eventroomdelete').val(res.resourceId);
          $('#deleteid').val(res.id);
          }
				
					console.log ('Event information');
			
				},
				error:function(res) {
				alert ('Error!')
				},
			})
		},
	
      now: new Date(),
      editable: false, // enable draggable events
      aspectRatio: 1.8,
      scrollTime: '00:00', // undo default 6am scrollTime
     header: {
        left: 'today prev,next',
        center: 'title', 
        right: ''
      },
      
      defaultView: 'agendaDay',
      views: {
        timelineTwoDays: {
          type: 'timelineDay',
          duration: { days: 2 }
        }
      },
      resourceLabelText: 'Помещения',

      eventSources: [
      'calendar/GetCalendar'
      ],
      
      eventColor: '#378006',
      businessHours: {
    // days of week. an array of zero-based day of week integers (0=Sunday)
    dow: [ 1, 2, 3, 4, 5 ], // Monday - Thursday

    start: '09:00', // a start time (10am in this example)
    end: '19:00', // an end time (6pm in this example)
}
     });
}



$(document).ready(function() {

	console.log ('Calendar ready');

	Calendar();
  setInterval(Calendar(), 3000);
	
//-----------------------------------------
	
  $('#calendarform').on('submit', function(e) {
  	e.preventDefault();
    
  	var otherValue = $(this).find('option:selected').attr('data-othervalue');
   date=$(this).val
         data = $(this).serializeArray();
         startDayInputVal=$('#datetimepicker').val();
         startDayInput=moment(startDayInputVal).format('YYYY-MM-DD HH:mm');
        tmp=moment(startDayInput).add(1,'days').format('YYYY-MM-DD 00:00');
        endDayInputVal=$('#datetimepicker1').val();
        endDayInput=moment(endDayInputVal).format('YYYY-MM-DD HH:mm');
        CheckDate=moment().format('YYYY-MM-DD HH:mm');
        
          ms=moment(endDayInput).diff(moment(startDayInput));
          duration=(ms/1000)/60;
          if ((startDayInput<CheckDate) || (endDayInput<CheckDate)) {
          alert ('Error! Date '+startDayInput+' already in the past');
         }  else  if (endDayInput<startDayInput){
    alert ('завершение раньше начала? вы прикалываетесь?');
         
         } else if (duration<30) {

          alert ('Вы нихрена не успеете за '+duration+' минут');

        } else  if (endDayInput>tmp){
          alert ('До полуночи не справитесь? Вам целой жизни не хватит!');
        }
          else {
           $.ajax( {
          
      type:'POST',
      dataType:'json',
      data:data,
      url:'calendar/checkEvent',
      success:function(response) {
        console.log(response);
        if (!$.trim(response)) {
         console.log(data);
         // alert ('empty');
         //-----------------------
         $.ajax({
          type:'POST',
          dataType:'json',
          data:data,
          url:'calendar/storeEvent',
          success:function(data) {
            Calendar();
        $('#calendarform1').modal('hide');
        CalendarRefresh();
          },
          error:function(data) {
          },
         })
         //------------------

        } else {
          alert ('Not empty');
        }

             },
             //-------------
      error:function(response){
        console.log('error');
      }
      //-------------------
    });
         }
         
    
  })

//-----------------------------------------------------------------------------------  
   $(document).on('click', '#DeleteEvent', function (e) {
   	 var id = $('#deleteid').val();
     $.ajax({
   	type:'POST',
   	data:{id:id},
   	url:'calendar/DeleteEvent',
   	success:function(res) {
   		console.log(res);
      $('#editdeleteevent').modal('hide');
      CalendarRefresh()
      

   	}
   })
  });



  //------------------
})
