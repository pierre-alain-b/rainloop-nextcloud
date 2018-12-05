<?php

/**
 * Nextcloud - RainLoop mail plugin
 *
 * @author RainLoop Team, Nextgen-Networks (@nextgen-networks), Tab Fitts (@tabp0le), Pierre-Alain Bandinelli (@pierre-alain-b)
 *
 * Based initially on https://github.com/RainLoop/rainloop-webmail/tree/master/build/owncloud
 */

OCP\User::checkLoggedIn();

// code copied from nextcloud /lib/private/legacy/response.php
// fixes object-src: 'none' which blocks chrome from preview pdf
$policy = 'default-src \'self\'; '
           . 'script-src \'self\' \'unsafe-eval\' \'nonce-'.\OC::$server->getContentSecurityPolicyNonceManager()->getNonce().'\'; '
           . 'style-src \'self\' \'unsafe-inline\'; '
           . 'frame-src *; '
           . 'img-src * data: blob:; '
           . 'font-src \'self\' data:; '
           . 'media-src *; '
           . 'connect-src *; '
           . 'object-src \'self\'; '
           . 'base-uri \'self\'; ';
header('Content-Security-Policy:' . $policy);

if (@file_exists(__DIR__.'/app/index.php'))
{
	include_once OC_App::getAppPath('rainloop').'/lib/RainLoopHelper.php';

	OC_RainLoop_Helper::regRainLoopDataFunction();

	if (isset($_GET['OwnCloudAuth']))
	{
		$sEmail = '';
		$sEncodedPassword = '';

		$sUser = OCP\User::getUser();

		if (\OC::$server->getConfig()->getAppValue('rainloop', 'rainloop-autologin', false))
		{
			$sEmail = \OC::$server->getConfig()->getUserValue($sUser, 'rainloop', 'rainloop-autologin-email', '');
			$sEncodedPassword = \OC::$server->getConfig()->getUserValue($sUser, 'rainloop', 'rainloop-autologin-password', '');
		}
		else
		{
			$sEmail = \OC::$server->getConfig()->getUserValue($sUser, 'rainloop', 'rainloop-email', '');
			$sEncodedPassword = \OC::$server->getConfig()->getUserValue($sUser, 'rainloop', 'rainloop-password', '');
		}

		$sDecodedPassword = OC_RainLoop_Helper::decodePassword($sEncodedPassword, md5($sEmail));

		$_ENV['___rainloop_owncloud_email'] = $sEmail;
		$_ENV['___rainloop_owncloud_password'] = $sDecodedPassword;
	}

	include __DIR__.'/app/index.php';
}
