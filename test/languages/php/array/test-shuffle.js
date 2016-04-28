// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var shuffle = require('../../../../src/php/array/shuffle.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/shuffle.js (tested in test/languages/php/array/test-shuffle.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 5
    var $data = {5:'a', 2:'3', 3:'c', 4:5, 'q':5}
    ini_set('locutus.sortByReference', true)
    shuffle($data)
    var result = $data.q
    expect(result).to.deep.equal(expected)
    done()
  })
})
