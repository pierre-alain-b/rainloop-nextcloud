<?php

namespace OCA\RainLoop\Controller;

use OCA\RainLoop\Util\RainLoopHelper;

use OCP\App\IAppManager;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\ContentSecurityPolicy;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IConfig;
use OCP\IRequest;
use OCP\ISession;

class PageController extends Controller {
	private $userId;
	private $config;
	private $appManager;
	private $appPath;
	private $session;

	public function __construct($AppName, IRequest $request, IAppManager $appManager, IConfig $config, ISession $session) {
		parent::__construct($AppName, $request);
		$this->appPath = $appManager->getAppPath('rainloop');
		$this->config = $config;
		$this->appManager = $appManager;
		$this->session = $session;
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

		$csp = new ContentSecurityPolicy();
		$csp->addAllowedFrameDomain("'self'");
		$response->setContentSecurityPolicy($csp);

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

		RainLoopHelper::regRainLoopDataFunction();

		if (isset($_GET['OwnCloudAuth'])) {
			$sEmail = '';
			$sEncodedPassword = '';
			$sPasswordSalt = '';

			$sUser = \OC::$server->getUserSession()->getUser()->getUID();

			if ($this->config->getAppValue('rainloop', 'rainloop-autologin', false)) {
				$sEmail = $sUser;
				$sPasswordSalt = $sUser;
				$sEncodedPassword = $this->session['rainloop-autologin-password'];
			} else if ($this->config->getAppValue('rainloop', 'rainloop-autologin-with-email', false)) {
				$sEmail = $this->config->getUserValue($sUser, 'settings', 'email', '');
				$sPasswordSalt = $sUser;
				$sEncodedPassword = $this->session['rainloop-autologin-password'];
			}

			// If the user has set credentials for RainLoop in their personal
			// settings, override everything before and use those instead.
			$sIndividualEmail = $this->config->getUserValue($sUser, 'rainloop', 'rainloop-email', '');
			if ($sIndividualEmail) {
				$sEmail = $sIndividualEmail;
				$sPasswordSalt = $sEmail;
				$sEncodedPassword = $this->config->getUserValue($sUser, 'rainloop', 'rainloop-password', '');
			}

			$sDecodedPassword = RainLoopHelper::decodePassword($sEncodedPassword, md5($sPasswordSalt));

			$_ENV['___rainloop_owncloud_email'] = $sEmail;
			$_ENV['___rainloop_owncloud_password'] = $sDecodedPassword;
		}

		include $this->appPath . '/app/index.php';

	}

}

