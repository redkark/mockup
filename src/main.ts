import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify, { Auth } from 'aws-amplify';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  Amplify.configure({
    Auth: {

       // REQUIRED - Amazon Cognito Region
        region: environment.cognito.REGION,

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: environment.cognito.USER_POOL_ID,

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: environment.cognito.APP_CLIENT_ID,

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false
    }
});

// You can get the current config object
const currentConfig = Auth.configure();
