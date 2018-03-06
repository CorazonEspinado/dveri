var table;

$(document).ready(function(){

table = $('#door-table').DataTable( {

        processing: true,
        serverSide: true,
          ajax: "/tasks/GetDoors",

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

           
                 return '<button class="btn btn-warning btn-xs" id="edittask">Редактировать</button>' +
                  '<button class="btn btn-danger btn-xs" id="deletetask">Удалить</button>';
            
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

   
function TaskList() {
  table.ajax.reload();
  //Done();
  }



//-----------------------------------------




