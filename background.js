const oldReddit = "https://old.reddit.com";

//Literally a basic function to navigate to a URL in the current tab 
function navigate(url) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.update(tabs[0].id, {url: url});
    });
}


chrome.omnibox.onInputEntered.addListener(
	function(text) {
		navigate(oldReddit + "/r/" + text);
	}
);


