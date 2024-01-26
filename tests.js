const repeatStringNumTimes = require('./repeat-string')
const assert = require('assert')

describe('Testes', function () {
  it('repeatStringNumTimes("*", 3) deve retornar "***".', function () {
    assert(repeatStringNumTimes('*', 3) === '***')
  })
  it('repeatStringNumTimes("abc", 3) deve retornar "abcabcabc".', function () {
    assert(repeatStringNumTimes('abc', 3) === 'abcabcabc')
  })
  it('repeatStringNumTimes("abc", 4) deve retornar "abcabcabcabc".', function () {
    assert(repeatStringNumTimes('abc', 4) === 'abcabcabcabc')
  })
  it('repeatStringNumTimes("abc", 1) deve retornar "abc".', function () {
    assert(repeatStringNumTimes('abc', 1) === 'abc')
  })
  it('repeatStringNumTimes("*", 8) deve retornar "********".', function () {
    assert(repeatStringNumTimes('*', 8) === '********')
  })
  it('repeatStringNumTimes("abc", -2) deve retornar "".', function () {
    assert(repeatStringNumTimes('abc', -2) === '')
  })
  it('repeatStringNumTimes("abc", 0) deve retornar "".', function () {
    assert(repeatStringNumTimes('abc', 0) === '')
  })
})
