<?php

namespace OCA\RainLoop\AppInfo;

use OCA\RainLoop\Util\RainLoopHelper;
use OCA\RainLoop\Controller\AjaxController;
use OCA\RainLoop\Controller\PageController;

use OCP\AppFramework\App;
use OCP\IL10N;
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
					$c->query('ServerContainer')->getConfig(),
					$c->getServer()->getSession()
				);
			}
		);

		$container->registerService(
			'AjaxController', function($c) {
				return new AjaxController(
					$c->query('AppName'),
					$c->query('Request'),
					$c->getServer()->getAppManager(),
					$c->query('ServerContainer')->getConfig(),
					$c->query(IL10N::class)
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
					$c->getServer()->getAppManager(),
					$c->getServer()->getSession()
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
				'name' => \OCP\Util::getL10N('rainloop')->t('Email')
			];
		});
	}

	public function registerPersonalSettings() {
		\OCP\App::registerPersonal('rainloop', 'templates/personal');
	}

}

