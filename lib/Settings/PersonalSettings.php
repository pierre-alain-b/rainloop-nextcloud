<?php
namespace OCA\RainLoop\Settings;

use OCP\AppFramework\Http\TemplateResponse;
use OCA\RainLoop\Util\RainLoopHelper;
use OCP\IConfig;

class PersonalSettings {
	private $config;

	public function __construct(IConfig $config) {
		$this->config = $config;
	}

	public function getForm() {
		$uid = \OC::$server->getUserSession()->getUser()->getUID();

		$keys = [
			'rainloop-email',
			'rainloop-password'
		];

		$parameters = [];
		foreach ($keys as $k) {
			$v = $this->config->getUserValue($uid, 'rainloop', $k);
			$parameters[$k] = $v;
		}
        $parameters['rainloop-admin-panel-link'] = RainLoopHelper::getAppUrl().'?admin';

		return new TemplateResponse('rainloop', 'personal_settings', $parameters, '');
	}

}

