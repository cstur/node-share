function Hello() {
	var name;
	this.setName = function(thyName) {
		name = thyName;
	};

	this.sayHello = function() {
		console.log('Hello ' + name);
	};
};

//exports.Hello = Hello;
//require('./module').Hello

module.exports = Hello;