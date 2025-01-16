const axios = require('axios')
const jsonData = require('./env.json');


module.exports = class CustomControllers {
    async findUserById(userId) {
        const response = await axios.get(`${jsonData.baseUrl}/users/${userId}`)
        expect(response.status).toEqual(200);
        return response.data
    }
}