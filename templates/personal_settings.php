<?php script('rainloop', 'personal') ?>

<div class="section">
	<form id="mail-rainloop-personal-form" action="#" method="post">
		<input type="hidden" name="requesttoken" value="<?php echo $_['requesttoken'] ?>" id="requesttoken">
		<input type="hidden" name="appname" value="rainloop">

		<fieldset class="personalblock">
			<h2><?php p($l->t('RainLoop Webmail')); ?></h2>
			<p>
				<?php p($l->t('Enter an email and password to auto-login to RainLoop.')); ?> <b><?php p($l->t('Please note')); ?></b> <?php p($l->t('that this feature')); ?>
				<a href="https://github.com/pierre-alain-b/rainloop-nextcloud/issues/87"
					style="text-decoration:underline" target="_blank"><?php p($l->t('may have some')); ?></a>
				<a href="https://github.com/RainLoop/rainloop-webmail/issues/1082"
					style="text-decoration:underline" target="_blank"><?php p($l->t('security considerations')); ?></a>.
			</p>
			<p>
				<input type="text" id="rainloop-email" name="rainloop-email"
					value="<?php echo $_['rainloop-email']; ?>" placeholder="<?php p($l->t('Email')); ?>" />

				<input type="password" id="rainloop-password" name="rainloop-password"
					value="<?php echo $_['rainloop-password']; ?>" placeholder="<?php p($l->t('Password')); ?>" />

				<input type="button" id="rainloop-save-button" name="rainloop-save-button" value="<?php p($l->t('Save')); ?>" />
				&nbsp;&nbsp;<span class="rainloop-result-desc"></span>
			</p>
		</fieldset>
	</form>
</div>
