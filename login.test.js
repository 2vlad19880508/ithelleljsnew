const axios = require('axios');
const CustomControllers = require('./controller.js')
const jsonData = require('./env.json');

const controllers = new CustomControllers()

test('get book by id', async () => {    
    const response = await controllers.findUserById('1')
})


test('get book by id', async () => {
    const response = await axios.get(`${jsonData.baseUrl}/users/1`)
    expect(response.status).toEqual(200); //asserting if the response code is 200
})

// const fs = require('fs');
// const { faker } = require('@faker-js/faker')
// const jsonData = require('./env.json');

// const fakerUser = {
//     name: faker.person.firstName(),
//     sex: faker.person.sex()
// }

// test("login and getting token", async () => {
//     let response = await axios.get(`${jsonData.baseUrl}/users`,
//         {
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         })
//     console.log(response.data[0].id)
//     console.log(response.data[0].name)
//     expect(response.data[0].id).toBeDefined()
//     expect(response.data[0].name).toBeDefined()
//     let response2 = await axios.put(`${jsonData.baseUrl}/users/${response.data[0].id}`,
//         {
//             "name": faker.person.firstName()
//         },
//         {
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         })
//    console.log(response2.data)
//    console.log(fakerUser)
// })