// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  API_URL: 'https://firestore.googleapis.com/v1beta1/projects/angular-boilerplate-d7191/databases/(default)/documents/',

  API_LOGIN: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDDwa4lm8sjf7wjgcKcI6pqGHrth6zcIbY',

};
