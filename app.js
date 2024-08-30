#!/usr/bin/env node

import openai from "./config/config.js";
import readline from 'readline';
import colors from "colors"

let input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let question;
const chatHistory = [];

async function getUserInput() {

    question = await new Promise((resolve) => {
        input.question(`${colors.yellow("You: ")}`, (userInput) => {
            resolve(userInput);
        });
    });

    try {
        // get the previous messages in the chat
        const messages = [];
        chatHistory.forEach((elem) => {
            messages.push(elem);
        })

        // adding the last message from user!
        messages.push({ role: "user", content: question });

        //console.log("messages Array: ", messages);

        // getting the bot answer
        const chatCompletion = await openai.chat.completions.create({
            messages: messages,
            model: 'gpt-3.5-turbo',
        });

        const botAnswer = chatCompletion.choices[0].message.content;

        if (question.toLowerCase() === "exit") {
            console.log(`${colors.green('Bot:')} ${botAnswer}`);
            input.close();
            return;
        }

        console.log(`${colors.green('Bot:')} ${botAnswer}`);

        chatHistory.push({ role: "user", content: question });
        chatHistory.push({ role: "assistant", content: botAnswer });

        //console.log("chatHistory", chatHistory);

        getUserInput();
    } catch (error) {

        console.log(error);

    }

}


async function main() {
    console.log(colors.bold.green('Welcome to chatGPT :)'));
    console.log(colors.bold.green('You can start your conversation by sending a message!'));
    getUserInput();
}

main();