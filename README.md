# ChatGPT_Chat_CLI

A simple Command Line Interface (CLI) for interacting with OpenAI's GPT-3.5 Turbo.

## Description

This CLI application allows you to have a conversation with the GPT-3.5 Turbo model. It prompts you to input messages, and the model responds with generated text based on your needs.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nxvtej/cli-gpt
   ```

2. Navigate to the project directory:

   ```bash
   cd ChatGPT_Chat_CLI
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Create an environment file:

   Create a file named `.env` in the project root directory.

2. Add your OpenAI API key:

   Inside the `.env` file, add your OpenAI API key as follows:

   ```
   OPENAI_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual OpenAI API key.

3. Run the CLI application with the following command:

   ```bash
   npm start
   ```

   Once the application starts, follow the prompts to start a conversation. Type "exit" to end the conversation and close the application.

## Dependencies

- [openai](https://github.com/openai/openai-node) - OpenAI Node.js SDK for interacting with the GPT-3.5 Turbo model.
- [readline](https://nodejs.org/api/readline.html) - Node.js built-in module for reading input from the command line.
- [colors](https://www.npmjs.com/package/colors) - npm package for adding color to the console output.
