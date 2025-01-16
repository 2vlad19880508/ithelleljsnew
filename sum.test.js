const axios = require('axios');
const jsonData = require('./env.json');
const fs = require('fs')

let userId;
let userName;
let userLName;
let userPwd;
let token;


test('create product', async () => {
    const createProduct = await axios.post(`${jsonData.baseUrl}/products/add`,
        {
            'title': 'MyOwnProduct'
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${data.token}`
            }
        })
    console.log(createProduct.data)
    expect(createProduct.status).toEqual(200)
})