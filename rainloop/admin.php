<?php

/**
 * Nextcloud - RainLoop mail plugin
 *
 * @author RainLoop Team, Nextgen-Networks (@nextgen-networks), Tab Fitts (@tabp0le), Pierre-Alain Bandinelli (@pierre-alain-b)
 *
 * Based initially on https://github.com/RainLoop/rainloop-webmail/tree/master/build/owncloud
 */

OCP\User::checkAdminUser();

OCP\Util::addScript('rainloop', 'admin');

$oTemplate = new OCP\Template('rainloop', 'admin-local');
$oTemplate->assign('rainloop-admin-panel-link', OC_RainLoop_Helper::getAppUrl().'?admin');
$oTemplate->assign('rainloop-autologin', \OC::$server->getConfig()->getAppValue('rainloop', 'rainloop-autologin', false));
$oTemplate->assign('rainloop-autologin-with-email', \OC::$server->getConfig()->getAppValue('rainloop', 'rainloop-autologin-with-email', false));
return $oTemplate->fetchPage();
