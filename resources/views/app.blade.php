<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Heebo:300,400,700&display=swap&effect=neon|fire-animation" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,700&display=swap&effect=neon|fire-animation" rel="stylesheet"/>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body class="antialiased">

        <div id="app">
            <router-view></router-view>
        </div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
