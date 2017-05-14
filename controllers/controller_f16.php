<?
class controller_f16 {
	
	public $model;
	public $view;
	
	function __construct($lang_key)
		{
			//$this->model = new model_f16;
			$this->view = new view_f16($lang_key);
		}
	function action_start($lang_key)
		{
			$this->view->generate('template_f16.php', &$this->view->placeholders);
		}
	function action_login(){
	}
	function action_logout(){
	}
}

