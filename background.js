const oldReddit = "https://old.reddit.com";

function navigate(url) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.update(tabs[0].id, {url: url});
    });
}

chrome.omnibox.onInputEntered.addListener(
	function(text) {
		//alert(text);
		navigate(oldReddit + "/r/" + text);
	}
);


