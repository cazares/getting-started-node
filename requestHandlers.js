var exec = require("child_process").exec;
var querystring = require("querystring");

function write(resp, content, type) {
  if(type === null || type === '') {
    type = "text/plain";
  }
  resp.writeHead(200, {"Content-Type":type});
  resp.write(content);
  resp.end();
}

function start(response, postData) {
  console.log("Request handler 'start' called");

  var body = '<html>' +
	'<head>' +
	'<meta http-equiv="Content-Type" content="text/html; ' +
	'charset=UTF-8" />' + 
	'</head>'+
	'<body>'+
	'<form action="/upload" method="post">'+
	'<textarea name="text" rows="20" cols="60"></textarea>'+
	'<input type="submit" value="Submit text"/>'+
	'</form>'+
	'</body>'+
	'</html>';
  write(response, body, "text/html");
}

function upload(response, postData) {
  console.log("Request handler 'upload' called");
  write(response, "UPLOADED content: " + querystring.parse(postData).text);
}

exports.start = start;
exports.upload = upload;
