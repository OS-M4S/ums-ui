		
		<div id="navbar" class="navbar navbar-fixed-top navbar-inverse">
            <div class="navbar-inner">
                <div class="container">                    
                    <div class="nav-collapse collapse">
                        <ul class="nav">
                            <li class="active">                                
                                <a class="brand" href="?"><img src="img/avatar474_2.gif" style="max-height: 20px; margin-top: -2px; margin-right:5px; vertical-align: middle" />OpenM4S</a>
                            </li>
                            <!-- <li><a class="active" href="?"><i class="icon-white icon-th-large"></i>Dashboard</a></li> -->
                            <!-- <li><a href="AppStore.aspx"><i class="icon-white icon-shopping-cart"></i>Apps</a></li> -->
                            <!-- <li><a href="http://oazabir.github.com/Droptiles/"><i class="icon-white icon-gift"></i>I want this!</a></li> -->
                            <!-- <li>
                                <form id="googleForm" class="navbar-search pull-left" action="http://www.google.com/search" target="_blank">
                                    <input id="googleSearchText" type="text" class="search-query span2" name="q" placeholder="Google">
                                </form>
                            </li> -->
                        </ul>
                        <ul class="nav pull-right">
                            
                            <!-- <li><a href="ServerStuff/Logout.ashx"><i class="icon-white icon-refresh"></i>Reset</a></li> -->
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-white icon-tint"></i>Theme<b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#" onclick="ui.switchTheme('theme-green')">Green</a></li>
                                    <li><a href="#" onclick="ui.switchTheme('theme-white')">White</a></li>
                                    <li><a href="#" onclick="ui.switchTheme('theme-Bloom')">Bloom</a></li>                                    
                                </ul>
                            </li>
                            <?php // if(isset($_SESSION) && sizeof($_SESSION) > 0) { ?>
                            	<li><a href="logout.php"><i class="icon-white icon-user"></i>Logout</a></li>
                            <?php // } else { ?>
                            	<!-- <li><a onclick="ui.login()" href="#login"><i class="icon-white icon-user"></i>Login</a></li> -->
                            <?php // } ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        