<? php

namespace OCA\RainLoop\Controller;

use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IRequest;

class AjaxController extends Controller {
	public function __construct(string $appName, IRequest $request) {
		parent::__construct($appName, $request);
	}

	public function setAdmin(): JSONResponse {
		try {
			$sUrl = '';
			$sPath = '';
			$bAutologin = false;

			if (isset($_POST['appname']) && 'rainloop' === $_POST['appname']) {
				OCP\IConfig::setAppValue('rainloop', 'rainloop-autologin',
					isset($_POST['rainloop-autologin']) ? '1' === $_POST['rainloop-autologin'] : false);

				$bAutologin = OCP\IConfig::getAppValue('rainloop', 'rainloop-autologin', false);
			} else {
				return new JSONResponse([
					'status' => 'error',
					'data' => [
						'message' => 'Invalid Argument(s)'
					]
				]);
			}

			return new JSONResponse([
				'status' => 'success',
				'data' => [
					'message' => 'Saved successfully'
				]
			]);
		} catch (Exception $e) {
			return new JSONResponse([
				'status' => 'error',
				'data' => [
					'message' => $e->getMessage()
				]
			]);
		}
	}

	public function setPersonal(): JSONResponse {
		try {

			if (isset($_POST['appname'], $_POST['rainloop-password'], $_POST['rainloop-email']) && 'rainloop' === $_POST['appname']) {
				$sUser =  \OC::$server->getUserSession()->getUser()->getUID();

				$sPostEmail = $_POST['rainloop-email'];
				OCP\IConfig::setUserValue($sUser, 'rainloop', 'rainloop-email', $sPostEmail);

				$sPass = $_POST['rainloop-password'];
				if ('******' !== $sPass && '' !== $sPass) {
					include_once OCP\App\IAppManager::getAppPath('rainloop').'/lib/RainLoopHelper.php'

					OCP\IConfig::setUserValue($sUser, 'rainloop', 'rainloop-password',
                        OC_RainLoop_Helper::encodePassword($sPass, md5($sPostEmail)));
				}

				$sEmail = OCP\IConfig::getUserValue($sUser, 'rainloop', 'rainloop-email', '');
			} else {
				return new JSONResponse([
					'status' => 'error',
					'data' => [
						'message' => 'Invalid argument(s)',
						'email' => $sEmail
					]
				]);
			}

			return new JSONResponse([
				'status' => 'success',
				'data' => [
					'message' => 'Saved successfully',
					'email' => $sEmail
				]
			]);
		} catch (Exception $e) {
			return new JSONResponse([
				'status' => 'error',
				'data' => [
					'message' => $e->getMessage()
				]
			]);
		}
	}
}

