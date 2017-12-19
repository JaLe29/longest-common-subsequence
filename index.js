exports.find = function (array) {
	//array is empty, nothing to do
	if (array.length === 0) { return "" }

	//sort before work
	array = array.sort()

	//ini
	let first = array[0]
	let last = array.pop()
	let length = first.length
	let index = 0

	while (index < length && first[index] === last[index]) {
		index++
	}

	return first.substring(0, index)
}