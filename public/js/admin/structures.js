function CheckStructures() {

    $.ajax({
        url: 'structures/StructureList',
        type: 'GET',
        dataType: 'json',

            success: function (data) {
                console.log('Task list received');
                console.log(data);
                $('#structure_info').empty().append(data);
                $.each(data, function (i, value) {


                    var tr = $("<tr id=uzd" + value.id + "/>");
                    tr.append({});


                    tr.append($("<td/>", {
                        text: value.id
                    }));
                    tr.append($("<td/>", {
                        text: value.name
                    }));
                    tr.append($("<td/>", {
                        text: value.info
                    }));


                    tr.append($("<td/>", {
                        html:
                        ' <button class="btn btn-warning btn-xs" id="stredit"  data-edit="stredit' + value.id + '" data-id1="' + value.id + '">Редактировать</button>' +
                        ' <button class="btn btn-danger btn-xs" id="strdelete" data-delete="strdelete' + value.id + '"data-id1="' + value.id + '">Удалить</button>',
                        'data-id': value.id


                    }));
                    $('#structure_info').append(tr);
                });
        },
        error: function (data) {

        }
    })

}


//----------------------------------------------------------------------------

$(document).ready(function () {
    CheckStructures();
    console.log('Structures ready!');

    $('#addStructureform').on('submit', function (e) {
        e.preventDefault();
        data = $(this).serializeArray();

        $('#structurename').val('');
        $('#structureinfo').val('');
        $('#addNewStructure').modal('hide');
        $.ajax({
            data: data,
            type: 'POST',
            dataType: 'json',
            url: '/structure/storeStructure',

            success: function (response) {
               CheckStructures();

            },
            error: function (response) {
                alert('NOT OK');
            }
        })
    })

});