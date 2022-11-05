<?php
$login = filter_var(trim($_POST['login']),
	FILTER_SANITIZE_STRING);
$name = filter_var(trim($_POST['name']),
	FILTER_SANITIZE_STRING);
$pass = filter_var(trim($_POST['pass']),
	FILTER_SANITIZE_STRING);

	if(mb_strlen($login) < 5 || mb_strlen($login) > 90) {
		echo "Длина логина недопустима";
		exit();
	}
	if(mb_strlen($name) < 3 || mb_strlen($name) > 50) {
		echo "Длина имени недопустима";
		exit();
	}
	if(mb_strlen($pass) < 3 || mb_strlen($pass) > 15) {
		echo "Длина пароля недопустима";
		exit();
	}

	$pass = md5($pass."kawoww21aas2");

	$mysql = new mysqli('localhost', 'root', '', 'register-bd');
	$mysql->query("INSERT INTO `users`(`login`, `pass`, `name`) 
		VALUES('$login', '$pass', '$name')");
	$mysql->close();

	header('Location: /');
	
?>