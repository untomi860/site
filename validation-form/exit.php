<?php


	setcookie('user', $user['name'], time() - 360, "/");
	header('Location: /');


?>