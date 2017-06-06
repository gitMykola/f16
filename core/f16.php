<?php 
Class Route
{
	static function start(){
		
		session_start();
		
		$lang_key = 'ru';
		$controller_name = 'f16';
		$action_name = 'start';
						
		$routes = explode('/', $_SERVER['REQUEST_URI']);
		if(count($routes) > 1 && (strlen($routes[1]) > 2) && (strlen($routes[1]) < 30) && !strpos($routes[1],'lang='))$controller_name = $routes[1];
        if(count($routes) > 2 && (strlen($routes[2]) > 2) && (strlen($routes[2]) < 30) && !strpos($routes[2],'lang='))$action_name = $routes[2];
        if(count($routes) > 3 && (strlen($routes[3]) > 6) && (strlen($routes[3]) < 30) && strpos($routes[3],'lang='))
			{
				$pos = strpos($routes[3],'lang=');
			    $lang = str_split($routes[3]);
				$lang = $lang[$pos + 5].$lang[$pos + 6];
			    switch(strtolower($lang))
					{
						case 'en':
						$lang_key = 'en';
						break;
						default:
						$lang_key = 'ru';
					}
			}
		$view_file = 'view_'.$controller_name.'.php';
		$view_path = "views/".$view_file;
		if(file_exists($view_path)){include $view_path;}
		
		$model_name = 'model_'.$controller_name;
		$controller_name = 'controller_'.$controller_name;
		$action_name = 'action_'.$action_name;
		
		$model_file = $model_name.'.php';
		$model_path = "models/".$model_file;
		if(file_exists($model_path)){include $model_path;}
		
		$controller_file = $controller_name.'.php';
		$controller_path = "controllers/".$controller_file;
		
		//echo file_exists($controller_path).'<br>';
		//echo $model_path.'<br>';
		//echo $view_path.'<br>';
		//echo $lang_key.'<br>';		
		
		if(file_exists($controller_path)){ include $controller_path;}else{ Route::Error404();}
		
		$controller = new $controller_name($lang_key);
		$action = $action_name;

        //echo method_exists($controller, $action).'<br>';

		if(method_exists($controller, $action)) $controller->$action();
		else Route::Error404();
	}
	function Error404(){
		$host = 'http://'.$_SERVER['HTTP_HOST'].'/';
        header('HTTP/1.1 404 Not Found');
		header("Status: 404 Not Found");
		header('Location:'.$host.'404');
		echo 'Sorry... There are no page found.';
	}
}

