let Person = require('./Person');

test('1983 should be millenial', () => {
    //arrange
    let personObj = new Person(1983);
    //act
    let result = personObj.isMillennial();
    //assertion
    expect(result).toBeTruthy();
});

test('1951 should be retiree and not millenial', () => {
    //arrange
    let personObj = new Person(1951);
    //act
    let result1 = personObj.isRetiree();
    let result2 = personObj.isMillennial();
    //assert
    expect(result1).toBeTruthy();
    expect(result2).toBeFalsy();
})

// let getCars = require('./async');
// let axios = require('axios')
// let MockAdapter = require('axios-mock-adapter')
// let mock = new MockAdapter(axios)

// mock.onGet('/users').reply(200, {
//     user: [
//         {id: 2, name: 'Nancy'}
//     ]
// })
// test('mock adapter test', () => {
//     axios.get('/users').then(res => {
//         console.log(res)
//     })
// })