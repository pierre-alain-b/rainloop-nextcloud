<?php

/**
 * Nextcloud - RainLoop mail plugin
 *
 * @author RainLoop Team, Nextgen-Networks (@nextgen-networks), Tab Fitts (@tabp0le), Pierre-Alain Bandinelli (@pierre-alain-b)
 *
 * Based initially on https://github.com/RainLoop/rainloop-webmail/tree/master/build/owncloud
 */

OC::$CLASSPATH['OC_RainLoop_Helper'] = OC_App::getAppPath('rainloop') . '/lib/RainLoopHelper.php';

OCP\App::registerAdmin('rainloop', 'admin');
OCP\App::registerPersonal('rainloop', 'personal');

if (\OC::$server->getConfig()->getAppValue('rainloop', 'rainloop-autologin', false))
{
	OCP\Util::connectHook('OC_User', 'post_login', 'OC_RainLoop_Helper', 'login');
	OCP\Util::connectHook('OC_User', 'post_setPassword', 'OC_RainLoop_Helper', 'changePassword');
}

OCP\Util::connectHook('OC_User', 'logout', 'OC_RainLoop_Helper', 'logout');

OCP\Util::addScript('rainloop', 'rainloop');

\OC::$server->getNavigationManager()->add(array(
	'id' => 'rainloop_index',
	'order' => 10,
	'href' => OC::$server->getURLGenerator()->linkToRoute('rainloop_index'),
	'icon' => OC::$server->getURLGenerator()->imagePath('rainloop', 'mail.png'),
	'name' => 'Email'
));
