<?php

use OCA\RainLoop\Settings\PersonalSettings;
$app = new \OCA\RainLoop\AppInfo\Application();
$controller = $app->getContainer()->query(PersonalSettings::class);

OCP\Util::addScript('rainloop', 'personal');

$oTemplate = new OCP\Template('rainloop', 'personal_settings');
$oTemplate->assign('rainloop-email', $controller->getEmail());
$oTemplate->assign('rainloop-password', $controller->getPassword());

return $oTemplate->fetchPage();
