
let lubangTerbesar = (array) => {
	let vertikal = [];
	let horizontal = [];
	let countHori = 0;

	while (array[countHori] != undefined) {	
		horizontal[countHori] = array[countHori];

		let countVert = 0;
		while (horizontal[countHori][countVert] != undefined) {
			vertikal[countVert] += horizontal[countHori][countVert];
			countVert++;
			// break;
		}

		countHori++;
		// break;
	}

	return vertikal;
};


console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
// console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
// console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
