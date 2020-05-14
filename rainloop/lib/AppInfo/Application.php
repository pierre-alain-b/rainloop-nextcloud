<?php

namespace OCA\RainLoop\AppInfo;

use OCA\RainLoop\Util\RainLoopHelper;
use OCA\RainLoop\Controller\AjaxController;
use OCA\RainLoop\Controller\PageController;
use OCA\RainLoop\Settings\PersonalSettings;

use OCP\AppFramework\App;
use OCP\IUser;

class Application extends App {

	public function __construct(array $urlParams = []) {
		parent::__construct('rainloop', $urlParams);

		$container = $this->getContainer();
		$server = $container->getServer();
		$config = $server->getConfig();

		/**
		 * Controllers
		 */
		$container->registerService(
			'PageController', function($c) {
				return new PageController(
					$c->query('AppName'),
					$c->query('Request'),
					$c->getServer()->getAppManager(),
					$c->query('ServerContainer')->getConfig()
				);
			}
		);

		$container->registerService(
			'AjaxController', function($c) {
				return new AjaxController(
					$c->query('AppName'),
					$c->query('Request'),
					$c->getServer()->getAppManager(),
					$c->query('ServerContainer')->getConfig()
				);
			}
		);

		/**
		 * Utils
		 */
		$container->registerService(
			'RainLoopHelper', function($c) {
				return new RainLoopHelper(
					$c->getServer()->getConfig(),
					$c->getServer()->getUserSession(),
					$c->getServer()->getAppManager()
				);
			}
		);

		// Add script js/rainloop.js
		\OCP\Util::addScript('rainloop', 'rainloop');
	}

	public function registerNavigation() {
		$container = $this->getContainer();

		$container->query('OCP\INavigationManager')->add(function () use ($container) {
			$urlGenerator = $container->query('OCP\IURLGenerator');
			return [
				'id' => 'rainloop',
				'order' => 10,
				'href' => $urlGenerator->linkToRoute('rainloop.page.index'),
				'icon' => $urlGenerator->imagePath('rainloop', 'mail.png'),
				'name' => 'Email'
			];
		});
	}

	public function registerPersonalSettings() {
		\OCP\App::registerPersonal('rainloop', 'templates/personal');
	}

}

