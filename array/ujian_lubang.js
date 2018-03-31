
	let lubangTerbesar = (["00111", "01101", "00100", "11110"]); // 3
	let lubangTerbesar2 = (["111", "111", "111", "100"]);
	let lubangTerbesar3 = (["00111", "10011", "00111", "10010","00110",'10111']);

let lubangHitung = (data) => {

data.forEach(function(lubangTerbesar) {
	console.log("Lubang 1 :")
  if (lubangTerbesar.search("100") == 0) {
  	console.log(lubangTerbesar.length - 2);
  }
});

}

let lubangHitung2 = (data) => {

data.forEach(function(lubangTerbesar2) {
	console.log("Lubang 2 :")
  if (lubangTerbesar2.search("00111","10011", "00111", "10010","00110","10111") == 0) {
  	console.log(lubangTerbesar2.length - 2);
  }
});

}


let lubangHitung3 = (data) => {

data.forEach(function(lubangTerbesar3) {
	console.log("Lubang 3 :")
  if (lubangTerbesar3.search("00111","00100") == 0) {
  	console.log(lubangTerbesar3.length - 2);
  }
});

}




lubangHitung(lubangTerbesar);
lubangHitung2(lubangTerbesar2);
lubangHitung3(lubangTerbesar3);







