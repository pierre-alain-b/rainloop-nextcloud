<?php script('rainloop', 'admin') ?>

<div class="section">
	<form id="mail-rainloop-admin-form" action="#" method="post">
		<input type="hidden" name="requesttoken" value="<?php echo $_['requesttoken'] ?>" id="requesttoken">
		<input type="hidden" name="appname" value="rainloop">

		<fieldset class="personalblock">
			<h2><?php p($l->t('RainLoop Webmail')); ?></h2>
			<br />
			<?php if ($_['rainloop-admin-panel-link']): ?>
			<p>
				<a href="<?php echo $_['rainloop-admin-panel-link'] ?>" target="_blank" style="text-decoration: underline">
					<?php p($l->t('Go to RainLoop Webmail admin panel')); ?>
				</a>
			</p>
			<br />
			<?php endif; ?>
			<p>
				<div style="display: flex;">
					<input type="radio" id="rainloop-noautologin" name="rainloop-autologin" value="0" <?php if (!$_['rainloop-autologin']&&!$_['rainloop-autologin-with-email']): ?>checked="checked"<?php endif; ?> />
					<label style="margin: auto 5px;" for="rainloop-noautologin">
						<?php p($l->t('Let the user define its own email/password credentials only')); ?>
					</label>
				</div>
				<div style="display: flex;">
					<input type="radio" id="rainloop-autologin" name="rainloop-autologin" value="1" <?php if ($_['rainloop-autologin']): ?>checked="checked"<?php endif; ?> />
					<label style="margin: auto 5px;" for="rainloop-autologin">
						<?php p($l->t('Automatically login with Nextcloud user credentials or user defined credentials')); ?>
					</label>
				</div>
				<div style="display: flex;">
					<input type="radio" id="rainloop-autologin-with-email" name="rainloop-autologin" value="2" <?php if ($_['rainloop-autologin-with-email']): ?>checked="checked"<?php endif; ?> />
					<label style="margin: auto 5px;" for="rainloop-autologin-with-email">
						<?php p($l->t('Automatically login with Nextcloud user email credentials or user defined credentials')); ?>
					</label>
				</div>
				<br />
				<br />
				<input type="button" id="rainloop-save-button" name="rainloop-save-button" value="<?php p($l->t('Save')); ?>" />
				&nbsp;&nbsp;<span class="rainloop-result-desc"></span>
			</p>
		</fieldset>
	</form>
</div>
