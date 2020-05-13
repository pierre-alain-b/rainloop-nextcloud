<?php

namespace OCA\RainLoop\Controller;

use OCA\RainLoop\Util\RainLoopHelper;

use OCP\App\IAppManager;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\ContentSecurityPolicy;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IConfig;
use OCP\IRequest;

class PageController extends Controller {
	private $userId;
	private $config;
	private $appManager;
	private $appPath;

	public function __construct($AppName, IRequest $request, IAppManager $appManager, IConfig $config) {
		parent::__construct($AppName, $request);
		$this->appPath = $appManager->getAppPath('rainloop');
		$this->config = $config;
		$this->appManager = $appManager;
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 */
	public function index() {
		\OC::$server->getNavigationManager()->setActiveEntry('rainloop');

		\OCP\Util::addStyle('rainloop', 'style');

		$sUrl = RainLoopHelper::normalizeUrl(RainLoopHelper::getAppUrl());

		$params = [
			'rainloop-iframe-url' => RainLoopHelper::normalizeUrl($sUrl).'?OwnCloudAuth'
		];

		$response = new TemplateResponse('rainloop', 'index', $params);

		return $response;
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 */
	public function appGet() {
		$this->app();
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 */
	public function appPost() {
		$this->app();
	}

	public function app() {

		$csp = new ContentSecurityPolicy();
		// fixes object-src: 'none' which blocks chrome from preview pdf
		$csp->addAllowedObjectDomain("'self'");

		$response = new TemplateResponse('rainloop', 'app');
		$response->setContentSecurityPolicy($csp);

		RainLoopHelper::regRainLoopDataFunction();

		if (isset($_GET['OwnCloudAuth'])) {
			$sEmail = '';
			$sEncodedPassword = '';

			$sUser = \OC::$server->getUserSession()->getUser()->getUID();

			if ($this->config->getAppValue('rainloop', 'rainloop-autologin', false)) {
				$sEmail = $sUser;
				$sEncodedPassword = $this->config->getUserValue($sUser, 'rainloop', 'rainloop-autologin-password', '');
			} else {
				$sEmail = $this->config->getUserValue($sUser, 'rainloop', 'rainloop-email', '');
				$sEncodedPassword = $this->config->getUserValue($sUser, 'rainloop', 'rainloop-password', '');
			}

			$sDecodedPassword = RainLoopHelper::decodePassword($sEncodedPassword, md5($sEmail));

			$_ENV['___rainloop_owncloud_email'] = $sEmail;
			$_ENV['___rainloop_owncloud_password'] = $sDecodedPassword;
		}

		include $this->appPath . '/app/index.php';

		return $response;
	}

}
