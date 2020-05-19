<?php

namespace OCA\RainLoop\Controller;

use OCA\RainLoop\Util\RainLoopHelper;

use OCP\App\IAppManager;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IConfig;
use OCP\IRequest;

class AjaxController extends Controller {
	private $config;
	private $appManager;

	public function __construct(string $appName, IRequest $request, IAppManager $appManager, IConfig $config) {
		parent::__construct($appName, $request);
		$this->config = $config;
		$this->appManager = $appManager;
	}

	public function setAdmin(): JSONResponse {
		try {
			$sUrl = '';
			$sPath = '';
			$bAutologin = false;

			if (isset($_POST['appname']) && 'rainloop' === $_POST['appname']) {
				$this->config->setAppValue('rainloop', 'rainloop-autologin',
					isset($_POST['rainloop-autologin']) ? '1' === $_POST['rainloop-autologin'] : false);
				$this->config->setAppValue('rainloop', 'rainloop-autologin-with-email',
					isset($_POST['rainloop-autologin']) ? '2' === $_POST['rainloop-autologin'] : false);
				$bAutologin = $this->config->getAppValue('rainloop', 'rainloop-autologin', false);
			} else {
				return new JSONResponse([
					'status' => 'error',
					'Message' => 'Invalid Argument(s)'
				]);
			}

			return new JSONResponse([
				'status' => 'success',
				'Message' => 'Saved successfully'
			]);
		} catch (Exception $e) {
			return new JSONResponse([
				'status' => 'error',
				'Message' => $e->getMessage()
			]);
		}
	}

	public function setPersonal(): JSONResponse {
		try {

			if (isset($_POST['appname'], $_POST['rainloop-password'], $_POST['rainloop-email']) && 'rainloop' === $_POST['appname']) {
				$sUser =  \OC::$server->getUserSession()->getUser()->getUID();

				$sPostEmail = $_POST['rainloop-email'];
				$this->config->setUserValue($sUser, 'rainloop', 'rainloop-email', $sPostEmail);

				$sPass = $_POST['rainloop-password'];
				if ('******' !== $sPass && '' !== $sPass) {
					include_once $this->appManager->getAppPath('rainloop').'/lib/Util/RainLoopHelper.php';

					$this->config->setUserValue($sUser, 'rainloop', 'rainloop-password',
                        RainLoopHelper::encodePassword($sPass, md5($sPostEmail)));
				}

				$sEmail = $this->config->getUserValue($sUser, 'rainloop', 'rainloop-email', '');
			} else {
				return new JSONResponse([
					'status' => 'error',
					'Message' => 'Invalid argument(s)',
					'Email' => $sEmail
				]);
			}

			return new JSONResponse([
				'status' => 'success',
				'Message' => 'Saved successfully',
				'Email' => $sEmail
			]);
		} catch (Exception $e) {
			return new JSONResponse([
				'status' => 'error',
				'Message' => $e->getMessage()
			]);
		}
	}
}

