<!doctype  html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>

        <meta charset="utf-8">

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>To Do List</title>

        <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet" />

        <meta name="csrf-token" value="{{ csrf_token() }}" />

    </head>

    <body>

        <div id="app">

        </div>

        <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>

    </body>

</html>

