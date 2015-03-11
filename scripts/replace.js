if (!window.jQuery) {
  var jq = document.createElement('script'); jq.type = 'text/javascript';
  // Path to jquery.js file, eg. Google hosted version
  jq.src = '/path-to-your/jquery.min.js';
  document.getElementsByTagName('head')[0].appendChild(jq);
}

setTimeout(function(){ 
	var taghtml = '<img style="position: absolute; left: 200px; top: 200px;" src="http://bacolicious.s3.amazonaws.com/bacon.png">';
	$('body').append(taghtml);
	
}, 1000);