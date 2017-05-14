<?
class view_f16{
	public $placeholders;
	
	function __construct($lang_key){
		$this->placeholders = Array();
		$file_lang = 'assets/lexicon/'.$lang_key.'_lexicon.php';
	if(file_exists($file_lang)) include $file_lang;
	} 
	
	function generate($content_view, &$placeholders){
		include 'views/'.$content_view;
	}
}

