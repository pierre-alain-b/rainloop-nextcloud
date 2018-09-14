<?php

/**
 * Nextcloud - RainLoop mail plugin
 *
 * @author RainLoop Team, Pierre-Alain Bandinelli, nextgen-networks
 *
 * Based initially on https://github.com/RainLoop/rainloop-webmail/tree/master/build/owncloud
 */

OCP\User::checkAdminUser();

OCP\Util::addScript('rainloop', 'admin');

$oTemplate = new OCP\Template('rainloop', 'admin-local');
$oTemplate->assign('rainloop-admin-panel-link', OC_RainLoop_Helper::getAppUrl().'?admin');
$oTemplate->assign('rainloop-autologin', \OC::$server->getConfig()->getAppValue('rainloop', 'rainloop-autologin', false));
return $oTemplate->fetchPage();
