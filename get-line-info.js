function __LineInfo(stackOffset) {
	var stackOffset = stackOffset || 2;
	
	try {
		throw new Error();
	}
	catch (e) {
		var stack = e.stack.split(/\n/gi);
		var fileLineColumn = (/\([^\)]*\)$/.exec(stack[stackOffset])[0]).split(':');
		
		return { 
			file : /[^\/]*$/.exec(fileLineColumn[0])[0],
			line : fileLineColumn[1],
			column : /[0-9]*/.exec(fileLineColumn[2])[0]
		};
	}
	
}

console.log(__LineInfo());