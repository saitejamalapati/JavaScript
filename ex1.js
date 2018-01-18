function printAlphabet(){
		A();

	function C() {
		console.log("C");
		d();
	}

	function E(f) {
		console.log("E");
		var f = F;
		f();

	}

	function A() {
		console.log("A");
		B();
	};

	var C;

	function G() {
		console.log("G");
		H();

		function H() {
			console.log("H");
			I();
		};
	}


	function d() {
		console.log("D");
		E();
	}

	function I() {
		console.log("I");
		J();
	}

	function B() {
		console.log("B");
		C();
	};

	function F() {
		console.log("F");
		G();
	};

	function K(){
		var rest = "KLMNOPQRSTUVWXYZ".split("");
		for (var i=0; i<rest.length; i++) {
			(function(i){
				// define the current function
				var temp = function() {
					console.log(rest[i]);
					if (i < (rest.length-1)) {
						// TODO: call the next function
					}
				}();
			})(i);
		}
	}

	function J() {
		var J = function() {
			console.log("J");
			K();
		}();
	};

	C = function() {
		console.log("C");
		D();
	};
}
printAlphabet();