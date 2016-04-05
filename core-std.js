//标准输出流
process.stdout.write('NodeJS');

//标准输入流
process.stdin.resume();
process.stdin.on('data', function(data) {
	process.stdout.write('read from console: ' + data.toString());
});