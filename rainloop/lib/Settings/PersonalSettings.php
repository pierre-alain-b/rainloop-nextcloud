<?php
namespace OCA\RainLoop\Settings;

use OCP\AppFramework\Http\TemplateResponse;
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

		return new TemplateResponse('rainloop', 'personal_settings', $parameters);
	}

	public function getEmail() {
		$uid = \OC::$server->getUserSession()->getUser()->getUID();
		return $this->config->getUserValue($uid, 'rainloop', 'rainloop-email');
	}

	public function getPassword() {
		$uid = \OC::$server->getUserSession()->getUser()->getUID();
		return $this->config->getUserValue($uid, 'rainloop', 'rainloop-password');
	}

}

