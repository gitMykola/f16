	<nav class="navbar navbar-inverse">
	  <div class="container-fluid">
	  <div class="navbar-header">
	  <div class="dateStamp">
	  <?= "<h3>".date("d").'</h3><h5>'.date("M Y")."</h5>";?>
	  </div>
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>                        
			</button>
		  <a class="navbar-brand text-center" href="javascript:void(0);"></a>
		</div>
		<div class="collapse navbar-collapse" id="myNavbar">
		<ul class="nav navbar-nav navbar-right">
		  <span class="lBlock">			
		  <li id="loginBlock" onclick="$(this.getElementsByClassName('slideForm')[0]).slideToggle();">
			<a class="" href="javascript:void(0);">
			<?= $placeholders['menu_login'];?></a>
			<span class="glyphicon glyphicon-log-in"></span>
			<form class="slideForm text-left" method=post action="" onsubmit="validForm(this)">
				<label for="loginName" class="col-sm-12"><?= $placeholders['slideForm_login'];?></label>
							<input type="text" id="loginName" name=login>
				<label for="loginPass" class="col-sm-12"><?= $placeholders['slideForm_password'];?></label>
							<input type="password" id="loginPass" name=passcode>	
				<label class="text-center"><button type=submit >
				<span class="glyphicon glyphicon-ok"></span>
				<?= $placeholders['slideForm_apply'];?></button></label>
				<div class="slideFormClose" onclick="$(this.parentNode.getElementsByClassName('slideForm')[0]).slideToggle();"><span class="glyphicon glyphicon-off"></span></div>				
			</form>
		  </li>
		  <li><a href="javascript:void(0);"><?= $placeholders['menu_search'];?></a>
		  <span class="glyphicon glyphicon-search"></span></li>
		  </span>
		  
      <ul class="nav navbar-nav navbar-right nav-menu">
		  <li class=""><a href="#startSlide"><?= $placeholders['menu_home'];?>
		  <div><div></div><div></div><div></div><div></div></div></a></li>
		  <li class=""><a href="#infoSlide"><?= $placeholders['menu_info'];?>
		  <div><div></div><div></div><div></div><div></div></div></a></li>
		  <li class=""><a href="#aboutSlide"><?= $placeholders['menu_about'];?>
		  <div><div></div><div></div><div></div><div></div></div></a></li>
		  <li class=""><a href="#"><?= $placeholders['menu_forum'];?>
		  <div><div></div><div></div><div></div><div></div></div></a></li>
		  <li class=""><a href="#"><?= $placeholders['menu_blog'];?>
		  <div><div></div><div></div><div></div><div></div></div></a></li>
		  <li class=""><a href="#contactSlide"><?= $placeholders['menu_contacts'];?>
		  <div><div></div><div></div><div></div><div></div></div></a></li>
		</ul>
		
		</ul>
		
		</div>
	  </div>
	</nav>
