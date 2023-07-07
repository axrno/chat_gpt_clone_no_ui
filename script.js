import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"
import readline from "readline"

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}))

const userInpterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

userInpterface.prompt()
userInpterface.on("line", async input => {
    const res = await openai
    .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
    })
    console.log(res.data.choices[0].message.content)
    userInpterface.prompt()
})

//openai
//.createChatCompletion({
//    model: "gpt-3.5-turbo",
//    messages: [{ role: "user", content: "Hello GPT" }],
//}).then(res => {
//    console.log(res.data.choices[0].message.content)
//})