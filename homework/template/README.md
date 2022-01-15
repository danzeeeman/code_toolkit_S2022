# p5.js Template PE

*Other languages (wiki):* [[ ja ]](https://github.com/fal-works/p5js-template-pe/wiki/Readme-ja)

## About

Template project for creating [p5.js](https://p5js.org/) sketches using the following tools:

- Code editor: [Visual Studio Code](https://code.visualstudio.com/)
- Other tools: [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/).

See also [other templates](https://fal-works.github.io/p5js-templates/).


## Usage

### Prepare your environment

In general, the below only need to be done once.

1. Install the software as follows:

   - [Visual Studio Code](https://code.visualstudio.com/) (VS Code in short)
   - [Node.js](https://nodejs.org/)

2. Install the VS Code extensions as follows:

    - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
    (from CLI: `code --install-extension esbenp.prettier-vscode`)
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)  
    (from CLI: `code --install-extension dbaeumer.vscode-eslint`)

### Prepare to create your sketch

Do the below each time you start to create a new sketch using this template.

1. Create your sketch folder by copying this template.

2. Open your sketch folder with VS Code.  
Then run the following command-line, which installs several package dependencies:

    ```shell
    npm install
    ```

3. Enable the VS Code extensions for Prettier and ESLint (see above), if disabled.

Now Prettier and ESLint work automatically each time you edit/save your code.  
If they seem to be not working, reload window of VS Code.

### Create/edit your sketch

1. Feel free to edit `script.js`.

2. Open `index.html` to see the result.


## Dependencies (npm)

### Important ones

- [Prettier](https://www.npmjs.com/package/prettier)
- [ESLint](https://www.npmjs.com/package/eslint)

### ESLint configs

- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [@fal-works/eslint-config-p5js](https://www.npmjs.com/package/@fal-works/eslint-config-p5js)
