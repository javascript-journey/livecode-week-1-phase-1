const lubangTerbesar1  = (["00111", "01101", "00100", "11110"])
const lubangTerbesar2 = (["111", "111", "111", "100"]); // 2
const lubangTerbesar3 = (["00111", "10011", "00111", "10010","00110",'10111']); // 6

let j = 0
for (var i = lubangTerbesar1.length -1 ; i >= 0; i--) {

	if (lubangTerbesar1[i][0] == 0) {
		j += 1
	}
}

console.log("Jumlah Lubang Terbesar di lubang pertama adalah "+j)

let k = 0
for (var loop = lubangTerbesar2.length -1 ; loop >= 0; loop--) {
	for (var bb = lubangTerbesar2[loop].length - 1; bb >= 0; bb--) {
		if (lubangTerbesar2[loop][bb] == 0) {
			k += 1			
		}
	}
}
console.log("Jumlah Lubang Terbesar di lubang kedua adalah "+k)

let l = 0
for (var loop = lubangTerbesar3.length -1 ; loop >= 0; loop--) {
	if (lubangTerbesar3[loop][1] == 0) {
		l += 1
	}
	
}
console.log("Jumlah Lubang Terbesar di lubang ketiga adalah "+l)
