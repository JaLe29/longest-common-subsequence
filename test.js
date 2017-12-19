const assert = require('assert')
const find = require('./index').find

describe('find', () => {

	it('should return empty string when the array is empty', () => {
		let testArray = []
		assert.equal("", find(testArray))
	})

	it('should return dog when input array is ["dog2", "dog33"]', () => {
		let testArray = ["dog2", "dog33"]
		assert.equal("dog", find(testArray))
	})

	it('should return empty string when input array is ["x", "y"]', () => {
		let testArray = ["x", "y"]
		assert.equal("", find(testArray))
	})

	it('should return cat when input array is ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7", "cat8"]', () => {
		let testArray = ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7", "cat8"]
		assert.equal("cat", find(testArray))
	})

})