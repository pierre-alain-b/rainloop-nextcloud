<?php

use OCA\RainLoop\Settings\PersonalSettings;

$app = new \OCA\RainLoop\AppInfo\Application();
$controller = $app->getContainer()->query(PersonalSettings::class);
return $controller->getForm()->render();

