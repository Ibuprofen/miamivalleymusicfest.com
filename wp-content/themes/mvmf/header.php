<?php
/**
 * @package WordPress
 * @subpackage Default_Theme
 */
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>

<head profile="http://gmpg.org/xfn/11">
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />

<title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>

<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
<link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
<link rel="alternate" type="application/atom+xml" title="<?php bloginfo('name'); ?> Atom Feed" href="<?php bloginfo('atom_url'); ?>" />
<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>

<?php wp_head(); ?>

<link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_directory'); ?>/jqueryslidemenu.css" />
<link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_directory'); ?>/main.css" />


<!--[if lte IE 7]>
<style type="text/css">
html .jqueryslidemenu{height: 1%;} /*Holly Hack for IE7 and below*/
</style>
<![endif]-->
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/jqueryslidemenu.js"></script>
<!--[if lte IE 9]>
  <script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/PIE-1.0.0.js"></script>
<![endif]-->
  <script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/main.js"></script>


</head>
<body>
<div id="page">

<div id="header">
	<div id="headerimg">
	</div>
</div>
	<div id="jqueryslidemenucontainer">
		<div id="myslidemenu" class="jqueryslidemenu">
			<ul>
				<li style="border-left: 1px solid #A09577;"><a href="http://www.miamivalleymusicfest.com/">Home</a></li>
				<li><a href="#" class="noclick">Music &amp; Arts</a>
					<ul>
						<li><a href="/lineup/">Lineup</a></li>
						<li><a href="/picture-gallery/">Picture Gallery</a></li>
						<li><a href="/vendors/">Vendors</a></li>
						<li><a href="/potential-artists/">Potential Artists</a></li>
						<li><a href="/past-artists/">Past Artists</a></li>
					</ul>
				</li>
				<li><a href="/tickets/">Tickets</a></li>
				<li><a href="#" class="noclick">Location</a>
					<ul>
						<li><a href="/camping/">Camping</a></li>
						<li><a href="/rules/">Rules</a></li>
						<li><a href="/directions/">Directions</a></li>
					</ul>
				</li>
				<li><a href="#" class="noclick">Sponsors</a>
					<ul>
						<li><a href="/sponsors/">Sponsors</a></li>
						<li><a href="/donate/">Donate</a></li>
					</ul>
				</li>
				<li><a href="#" class="noclick">Charity Rocks</a>
					<ul>
						<li><a href="/volunteer/">Volunteer</a></li>
						<li><a href="/interested-charity-orgs/">Interested Charity Orgs</a></li>
						<li><a href="/charities/">Charities</a></li>
						<li><a href="/past-charities/">Past Charities</a></li>
					</ul>
				</li>
				<li><a href="#" class="noclick">Contact</a>
					<ul>
						<li><a href="/press-kit/">Press Kit</a></li>
						<li><a href="/contact-us/">Contact Us</a></li>
					</ul>
				</li>
				<li><a href="#" class="noclick">MVMFA</a>
					<ul>
						<li><a href="/mission/">Mission</a></li>
						<li><a href="/members/">Members</a></li>
						<li><a href="/friends/">Friends</a></li>
					</ul>
				</li>
			</ul>
			<br style="clear: left" />
		</div>
	</div>
<hr />