<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="en-US" xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<title><?php echo $placeholders['title'];?></title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="<?php echo $placeholders['site_url'];?>assets/css/f16.css">
		<link rel="stylesheet" href="<?php echo $placeholders['site_url'];?>assets/css/my.css">
		<link rel="stylesheet" href="<?php echo $placeholders['site_url'];?>assets/css/animation.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<script src="<?php echo $placeholders['site_url'];?>assets/js/f16.js"></script>
		<script src="<?php echo $placeholders['site_url'];?>assets/js/my.js"></script>
</head>
	<body>
	
  <?php include 'views/template_top_nav.php';?>
		<div class="container" id="startSlide">
			<div class="startText">
				<div class="light"></div>
				<h1 class="f16-red"><?php echo $placeholders['name_osbb'];?></h1>
				<p><?php echo $placeholders['number_osbb'];?></p>
			</div>		
			<h1 class="nameText"><?php echo $placeholders['text_osbb'];?></h1>
		</div>	
		<div class="container" id="infoSlide">
    <div class="back-dark"></div>
		</div>
    <div class="container" id="aboutSlide">
		</div>
    <div class="container" id="contactSlide">
		</div>
	</body>
</html>	