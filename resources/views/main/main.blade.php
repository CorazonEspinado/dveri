@extends('layouts.template')
@include('main.todoor');
@section ('content')
 <script src="{{asset('js/doors.js')}}"></script>
   
   





 <div id="admindelay">

    </div>

    <table class="table table-bordered" id="delaytable">


    </table>
    <div class="container">


        <ul class="nav justify-content-center">
            <li class="nav-item">
                <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#addNewTask"
                        id="addNewTask">Добавить дверь
                </button>
                <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#todoor"
                        id="senddoor">Отправить дверь
                </button>
            </li>


        </ul>

    </div>


    <table id="door-table" class="display" cellspacing="0" width="100%">
        <thead>
        <tr>
            <th>Id</th>
            <th>Дверь</th>
            <th>Опять дверь</th>
            <th>Снова дверь</th>
            <th>Еще дверь</th>
            <th>Окно</th>
            <th>Сделать что-то</th>
            <!-- <th>Izpildīt līdz</th> -->


        </tr>
        </thead>
        <tfoot>
        <tr>
           <th>Id</th>
            <th>Дверь</th>
            <th>Опять дверь</th>
            <th>Снова дверь</th>
            <th>Еще дверь</th>
            <th>Окно</th>
            <th>Сделать что-то</th>

        </tr>
        </tfoot>
        <tbody>

        </tbody>
    </table>

    <!-- Modal -->



@endsection

