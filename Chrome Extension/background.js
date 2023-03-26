
function run(toggle) {
	chrome.storage.local.get((result) => {
		if(result.power) {
			if(toggle) {
				chrome.storage.local.set({"power":false});
				showInactive();
			} else {
				showActive();
			}
		} else {
			if(toggle) {
				chrome.storage.local.set({"power":true});
				showActive();
			} else {
				showInactive();
			}
		}
	});
}

function showActive() {
	chrome.power.requestKeepAwake("display");
	chrome.action.setIcon({"path":"image/logo_48.png"});
}

function showInactive() {
	chrome.power.releaseKeepAwake();
	chrome.action.setIcon({"path":"image/logo_inactive_48.png"});	
}


run(false);


chrome.action.onClicked.addListener(() => {
	run(true);
});

chrome.runtime.onStartup.addListener(() => {
	run(false);
});