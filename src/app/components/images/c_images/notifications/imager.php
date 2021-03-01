<?php

	$db = @new mysqli("127.0.0.1", "root", "mama123", "habbo");
	
	if ($db->connect_errno > 0)
	{
		$look = 'hr-165-34.sh-290-92.ch-215-84.hd-180-1.lg-280-64';
	}
	else
	{
		$username = $db->real_escape_string($_GET['username']);
		$getlook = $db->query("SELECT `look` FROM `users` WHERE `username` = '" . $username . "' LIMIT 1")->fetch_assoc();
		$look = (($getlook['look'] != null) ? $getlook['look'] : 'hr-165-34.sh-290-92.ch-215-84.hd-180-1.lg-280-64');
	}
	
	if (isset($_GET['size'])) {
		$size = $_GET['size'];
	} else {
		$size = 'b';
	}
	
	if (isset($_GET['direction'])) {
		$direction = $_GET['direction'];
	} else {
		$direction = '2';
	}
	
	if (isset($_GET['head_direction'])) {
		$head = $_GET['head_direction'];
	} else {
		$head = '2';
	}
	
	if (isset($_GET['gesture'])) {
		$gesture = $_GET['gesture'];
	} else {
		$gesture = 'sml';
	}
	
	if (isset($_GET['headonly'])) {
		$headonly = $_GET['headonly'];
	} else {
		$headonly = '0';
	}
	
	header('Content-Type: image/png');
	
	$ch = curl_init('https://www.habbo.nl/habbo-imaging/avatarimage?figure=' . $look . '&gesture=' . $gesture . '&headonly=' . $headonly);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_TIMEOUT, 1000);
	curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0');
	curl_exec($ch);
	
	curl_close($ch);
	
	$db->close();
	
?>