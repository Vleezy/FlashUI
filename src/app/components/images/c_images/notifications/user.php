<?php

    if(!isset($_GET["fig"]) || empty($_GET["fig"])) {
        echo "No fig request";
        exit;
    }
$fig = $_GET['fig'];
$fig .= str_replace("_", ".", $fig);
$ch = curl_init("http://www.avatar-retro.com/habbo-imaging/avatarimage?hb=img&figure=$fig&action=wav&direction=2&head_direction=3&headonly=true&size=m");
    curl_setopt_array($ch, array(
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HEADER         => false,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_ENCODING       => "",
        CURLOPT_USERAGENT      => "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36",
        CURLOPT_AUTOREFERER    => true,
        CURLOPT_SSL_VERIFYPEER => false
    ));

    $content = curl_exec($ch);
    $type = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);

    curl_close($ch);

    if(!isset($content) || empty($content) || strpos($content, 'Not Found') !== false) {
        echo "Not found!";
        exit;
    }
     
    header("Content-Type: {$type}");

    echo $content;
?>