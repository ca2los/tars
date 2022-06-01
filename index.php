    <?php define('BASE_PATH', ''); ?>
    <html xmlns="http://www.w3.org/1999/html" lang="English">
        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
            <meta name="theme-color" content="#000000" />
            <meta name="apple-mobile-web-app-capable" content="yes">
            <meta name="apple-mobile-web-app-status-bar-style" content="#000000">
            <title> JS Powered · Salary Calculator </title>
            <link rel="icon" type="image/vnd.microsoft.icon" href="./libraries/img/favicon.ico"/>
            <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="./libraries/img/favicon.ico"/>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=Space+Mono&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="./libraries/styles/styles.min.css"/>
        </head>
        <body>
            <header></header>
            <main class="main">
                <?php include BASE_PATH . "./includes/finder.php" ?>
            </main>
            <footer></footer>
            <script type="text/javascript" src="./libraries/scripts/fetch_apod.js"></script>
        </body>
    </html>