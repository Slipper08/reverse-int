module.exports = function reverse(n) {
	let reverseIt = n.toString().split('').reverse().join('');
	let newReverse;
	if (reverseIt.endsWith("-")) {
		let index = reverseIt.indexOf("-");
		newReverse = "-" + reverseIt.slice(0, index);
	} else {
		newReverse = reverseIt;
	}
	return newReverse;
}
