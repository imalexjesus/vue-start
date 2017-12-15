<template>
	<div id="app" class="uk-offcanvas-content" >
		<Navigation2/>
		<div class="uk-sticky-placeholder"></div>
		<div id="main" class="tm-main" uk-height-viewport="expand: true">
			<router-view/>
		</div>
		<div id="offcanvas" uk-offcanvas="mode: push; overlay: true" class="uk-offcanvas">
			<div class="uk-offcanvas-bar">
				<div class="uk-panel">
					<ul class="uk-nav uk-nav-default tm-nav">
						<li class="uk-nav-header">General</li>
						<li><a href="../index">Home</a></li>
						<li><a href="../pro">Pro</a></li>
						<li><a href="../changelog">Changelog</a></li>
						<li><a href="../download">Download</a></li>
					</ul>
					<ul class="uk-nav uk-nav-default tm-nav uk-margin-top">
						<li class="uk-nav-header">Getting started</li>
						<li exact=""><a href="./introduction">Introduction</a></li>
						<li exact=""><a href="./installation">Installation</a></li>
						<li exact=""><a href="./less">Less</a></li>
						<li exact=""><a href="./sass">Sass</a></li>
						<li exact=""><a href="./javascript">JavaScript</a></li>
						<li exact=""><a href="./webpack">Webpack</a></li>
						<li exact=""><a href="./custom-icons">Custom icons</a></li>
						<li exact=""><a href="./avoiding-conflicts">Avoiding conflicts</a></li>
						<li exact=""><a href="./rtl">RTL support</a></li>
						<li exact=""><a href="./migration">Migration</a></li>
					</ul>
					<ul class="uk-nav uk-nav-default tm-nav uk-margin-top">
						<li class="uk-nav-header">Components</li>
						<li exact=""><a href="./accordion">Accordion</a></li>
						<li exact=""><a href="./alert">Alert</a></li>
						<li exact=""><a href="./align">Align</a></li>
						<li exact=""><a href="./animation">Animation</a></li>
						<li exact=""><a href="./article">Article</a></li>
						<li exact=""><a href="./background">Background</a></li>
						<li exact=""><a href="./badge">Badge</a></li>
						<li exact=""><a href="./base">Base</a></li>
						<li exact=""><a href="./breadcrumb">Breadcrumb</a></li>
						<li exact=""><a href="./button">Button</a></li>
						<li exact=""><a href="./card">Card</a></li>
						<li exact=""><a href="./close">Close</a></li>
						<li exact=""><a href="./column">Column</a></li>
						<li exact=""><a href="./comment">Comment</a></li>
						<li exact=""><a href="./container">Container</a></li>
						<li exact=""><a href="./countdown">Countdown</a></li>
						<li exact=""><a href="./cover">Cover</a></li>
						<li exact=""><a href="./description-list">Description List</a></li>
						<li exact=""><a href="./divider">Divider</a></li>
						<li exact=""><a href="./dotnav">Dotnav</a></li>
						<li exact=""><a href="./drop">Drop</a></li>
						<li exact=""><a href="./dropdown">Dropdown</a></li>
						<li exact=""><a href="./flex">Flex</a></li>
						<li exact=""><a href="./form">Form</a></li>
						<li exact=""><a href="./grid">Grid</a></li>
						<li exact=""><a href="./grid-parallax">Grid Parallax</a></li>
						<li exact=""><a href="./heading">Heading</a></li>
						<li exact=""><a href="./icon">Icon</a></li>
						<li exact=""><a href="./iconnav">Iconnav</a></li>
						<li exact=""><a href="./inverse">Inverse</a></li>
						<li exact=""><a href="./label">Label</a></li>
						<li exact=""><a href="./lightbox">Lightbox</a></li>
						<li exact=""><a href="./link">Link</a></li>
						<li exact=""><a href="./list">List</a></li>
						<li exact=""><a href="./margin">Margin</a></li>
						<li exact=""><a href="./marker">Marker</a></li>
						<li exact=""><a href="./modal">Modal</a></li>
						<li exact=""><a href="./nav">Nav</a></li>
						<li exact=""><a href="./navbar">Navbar</a></li>
						<li exact=""><a href="./notification">Notification</a></li>
						<li exact=""><a href="./offcanvas">Off-canvas</a></li>
						<li exact=""><a href="./overlay">Overlay</a></li>
						<li exact=""><a href="./padding">Padding</a></li>
						<li exact=""><a href="./pagination">Pagination</a></li>
						<li exact=""><a href="./parallax">Parallax</a></li>
						<li exact=""><a href="./placeholder">Placeholder</a></li>
						<li exact=""><a href="./position">Position</a></li>
						<li exact=""><a href="./print">Print</a></li>
						<li exact=""><a href="./progress">Progress</a></li>
						<li exact=""><a href="./scroll">Scroll</a></li>
						<li exact=""><a href="./scrollspy">Scrollspy</a></li>
						<li exact=""><a href="./search">Search</a></li>
						<li exact=""><a href="./section">Section</a></li>
						<li exact=""><a href="./slidenav">Slidenav</a></li>
						<li exact=""><a href="./slideshow">Slideshow</a></li>
						<li exact=""><a href="./sortable">Sortable</a></li>
						<li exact=""><a href="./spinner">Spinner</a></li>
						<li exact=""><a href="./sticky">Sticky</a></li>
						<li exact=""><a href="./subnav">Subnav</a></li>
						<li exact=""><a href="./switcher">Switcher</a></li>
						<li exact=""><a href="./tab">Tab</a></li>
						<li exact=""><a href="./table">Table</a></li>
						<li exact=""><a href="./text">Text</a></li>
						<li exact=""><a href="./thumbnav">Thumbnav</a></li>
						<li exact=""><a href="./tile">Tile</a></li>
						<li exact=""><a href="./toggle">Toggle</a></li>
						<li exact=""><a href="./tooltip">Tooltip</a></li>
						<li exact=""><a href="./totop">Totop</a></li>
						<li exact=""><a href="./transition">Transition</a></li>
						<li exact=""><a href="./upload">Upload</a></li>
						<li exact=""><a href="./utility">Utility</a></li>
						<li exact=""><a href="./visibility">Visibility</a></li>
						<li exact=""><a href="./width">Width</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Navigation2 from './components/Navigation2'

export default {
	name: 'app',
	components: {
		Navigation2
	}
}
</script>

<style scoped>

</style>