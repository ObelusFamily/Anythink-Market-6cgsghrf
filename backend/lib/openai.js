const axios = require('axios')

class OpenAI {
    async generateImage(prompt) {
        const response = await axios.post('https://api.openai.com/v1/images/generations', {
            prompt,
            size: "256x256"
        }, {
            headers:{
                'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY 
              }
        })
        return response.data.data[0]['url'];
    }
}

module.exports = OpenAI