const fs = require('fs');
require('dotenv').config();
const { argv } = require('yargs');
const environment = argv.environment;

let apiURL;
let targetPath;
if (environment === 'prod') {
  targetPath = `./src/environments/environment.prod.ts`;
} else {
  targetPath = `./src/environments/environment.ts`;
}

const envConfigFile = `
export const environment = {
  production: ${environment === 'prod' ? 'true' : 'false'},
  clientId: "${process.env['CLIENT_ID']}",
  token: "${process.env['TOKEN']}",
  clientSecret: "${process.env['CLIENT_SECRET']}",
  openAiKey: "${process.env['OPEN_AI_KEY']}",
};`;

fs.writeFile(targetPath, envConfigFile, function (err:any) {
  if (err) {
    console.log(err);
  }
});
