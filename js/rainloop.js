// Do the following things once the document is fully loaded.
document.onreadystatechange = function () {
	if (document.readyState === 'complete') {
		watchIFrameTitle();
	}
}

// The RainLoop application is already configured to modify the <title> element
// of its root document with the number of unread messages in the inbox.
// However, its document is the RainLoop iframe. This function sets up a
// Mutation Observer to watch the <title> element of the iframe for changes in
// the unread message count and propagates that to the parent <title> element,
// allowing the unread message count to be displayed in the NC tab's text when
// the RainLoop app is selected.
function watchIFrameTitle() {
	iframe = document.getElementById('rliframe');
	if (!iframe) {
		return;
	}
	target = iframe.contentDocument.getElementsByTagName('title')[0];
	config = {
		characterData: true,
		childList: true,
		subtree: true
	}
	observer = new MutationObserver(function(mutations) {
		title = mutations[0].target.innerText;
		if (title) {
			matches = title.match(/\(([0-9]+)\)/);
			if (matches) {
				document.title = '('+ matches[1] + ') ' + t('rainloop', 'Email') + ' - Nextcloud'; 
			} else {
				document.title = t('rainloop', 'Email') + ' - Nextcloud'; 
			}
		}
	});
	observer.observe(target, config);
}

function RainLoopFormHelper(sID, sAjaxFile, fCallback)
{
	try
	{
		var
			oForm = $(sID),
			oSubmit = $('#rainloop-save-button', oForm),
			sSubmitValue = oSubmit.val(),
			oDesc = oForm.find('.rainloop-result-desc')
		;

		oSubmit.click(function (oEvent) {

			var oDefAjax = null;

			oEvent.preventDefault();

			oForm
				.addClass('rainloop-ajax')
				.removeClass('rainloop-error')
				.removeClass('rainloop-success')
			;

			oDesc.text('');
			oSubmit.val('...');

			oDefAjax = $.ajax({
				'type': 'POST',
				'async': true,
				'url': OC.filePath('rainloop', 'ajax', sAjaxFile),
				'data': oForm.serialize(),
				'dataType': 'json',
				'global': true
			});

			oDefAjax.always(function (oData) {

				var bResult = false;

				oForm.removeClass('rainloop-ajax');
				oSubmit.val(sSubmitValue);

				if (oData)
				{
					bResult = 'success' === oData['status'];
					if (oData['Message'])
					{
						if (bResult)
						{
							oDesc.text(t('rainloop', 'Saved successfully'));
						}
						else
						{
							oDesc.text(t('rainloop', 'Invalid Argument(s)'));
						}
					}
				}

				if (bResult)
				{
					oForm.addClass('rainloop-success');
				}
				else
				{
					oForm.addClass('rainloop-error');
					if ('' === oDesc.text())
					{
						oDesc.text(t('rainloop', 'Error'));
					}
				}

				if (fCallback)
				{
					fCallback(bResult, oData);
				}
			});

			return false;
		});
	}
	catch(e) {}
}
