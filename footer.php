</div>
<footer id="footer">
<div id="copyright">
</div>
<?php if ( is_active_sidebar( 'sidebar-footer' ) ) : ?>
	<div id="footer-widget" class="primary-sidebar widget-area" role="complementary">
		<?php dynamic_sidebar( 'sidebar-footer' ); ?>
	</div>
<?php endif; ?>

</footer>
</div>
<?php wp_footer(); ?>
</body>
</html>