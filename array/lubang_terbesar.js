let banyakLubang = 0;
let banyakJalan = 0;
let lubangTerbesar = '';
let respon = [];

lubangTerbesar = (data) => {
	for(i = 0; i <= data.length; i++){
		data.forEach((lubang, x) => {
			console.log(lubang[banyakLubang])
		});

		banyakLubang++;

	}
	// return banyakLubang; 
}

/*console.log(*/lubangTerbesar(["00111", "01101", "00100", "11110"]); // 3
// /*console.log(*/lubangTerbesar(["111", "111", "111", "100"]); // 2
// /*console.log(*/lubangTerbesar(["00111", "10011", "00111", "10010","00110","10111"]); // 6