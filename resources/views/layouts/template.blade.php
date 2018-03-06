<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <title>{{ config('app.name', 'Laravel') }}</title>



    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="{{asset('js/jquery-3.3.1.js')}}"></script>
    <link href="{{asset('bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">

<script src="{{asset('js/custom.js')}}"></script>
<link href="{{ asset('js/jquery-ui/jquery-ui.css') }}" rel="stylesheet">
<link href="{{ asset('DataTables/datatables.css') }}" rel="stylesheet">
<link rel="stylesheet" href="{{'css/custom.css'}}">
   
      
   
    <link rel="stylesheet" href="{{'css/jquery-ui-timepicker-addon.min.css'}}">
    

    <script src="{{asset('js/popper.min.js')}}"></script>

    <script src="{{asset('bootstrap/js/bootstrap.min.js')}}">  </script>
    <script src="{{asset('DataTables/datatables.js')}}">  </script>
     <script src="{{asset('js/jquery-ui/jquery-ui.js')}}"></script>
   
    <script src="{{asset('js/datetimepicker/jquery-ui-timepicker-addon.js')}}"></script>
    
    
    

    <script src="{{asset('js/custom.js')}}"></script>
   
    
    
    
    



</head>

<body>

<!-- JS code -->

<!--JS below-->


<!--modal-->





    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Двери</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            <ul class="navbar-nav">
                @if (Auth::guest())

                @else
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                           fffff
                           aria-haspopup="true" aria-expanded="false">
                            {{ Auth::user()->name }}  {{ Auth::user()->surname }}
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">

                            <a href="{{ route('logout') }}" class="dropdown-item"
                               onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                Покинуть помещение
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                  style="display: none;">
                                {{ csrf_field() }}
                            </form>
                        </div>
                    </li>
                @endif
            </ul>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">


                <li class="nav-item dropdown">


                </li>
                <li class="nav-item">

                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">

            </form>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav">
                @if (Auth::guest())

                @else
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            {{ Auth::user()->name }}  {{ Auth::user()->surname }}
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <a href="{{ route('logout') }}" class="dropdown-item"
                               onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                Покинуть помещение
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                  style="display: none;">
                                {{ csrf_field() }}
                            </form>
                        </div>
                    </li>
                @endif
            </ul>
        </div>
    </nav>

<div class="container">

    <ul class="nav justify-content-center">
        <li class="nav-item">
          
        </li>


    </ul>

</div>


    @yield('content')
    @yield('scripts')




<!-- Scripts -->



</body>

</html>


