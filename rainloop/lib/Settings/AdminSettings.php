<?php
namespace OCA\RainLoop\Settings;

use OCA\RainLoop\Util\RainLoopHelper;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IConfig;
use OCP\Settings\ISettings;

class AdminSettings implements ISettings {

	private $config;

	public function __construct(IConfig $config) {
		$this->config = $config;
	}

	public function getForm() {
		$keys = [
			'rainloop-autologin',
			'rainloop-autologin-with-email'
		];

		$parameters = [];
		foreach ($keys as $k) {
			$v = $this->config->getAppValue('rainloop', $k);
			$parameters[$k] = $v;
		}

		$uid = \OC::$server->getUserSession()->getUser()->getUID();
		if (\OC_User::isAdminUser($uid)) {
			$parameters['rainloop-admin-panel-link'] = RainLoopHelper::getAppUrl().'?admin';
		}

		return new TemplateResponse('rainloop', 'admin-local', $parameters);
	}

	public function getSection() {
		return 'additional';
	}

	public function getPriority() {
		return 50;
	}

}
