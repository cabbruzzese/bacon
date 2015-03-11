/*if (!window.jQuery) {
  var jq = document.createElement('script'); jq.type = 'text/javascript';
  // Path to jquery.js file, eg. Google hosted version
  jq.src = '/path-to-your/jquery.min.js';
  document.getElementsByTagName('head')[0].appendChild(jq);
}*/

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var urlString = getParameterByName("url");

setTimeout(function(){ 

	$('body').load( urlString, null, new function () {		
		var taghtml = '<img style="position: absolute; left: 200px; top: 200px; width: 80%;" src="http://bacolicious.s3.amazonaws.com/bacon.png">';
		$('body').append(taghtml);
	});
	
}, 300);