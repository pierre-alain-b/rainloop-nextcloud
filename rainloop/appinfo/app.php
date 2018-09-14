<?php

/**
 * Nextcloud - RainLoop mail plugin
 *
 * @author RainLoop Team
 * @copyright 2016 RainLoop Team
 *
 * https://github.com/RainLoop/owncloud
 */

$app = new OCA\RainLoop\AppInfo\Application();
$app->registerNavigation();
$app->getContainer()->query('RainLoopHelper')->registerHooks();
