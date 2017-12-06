import { BrowserPolicy } from 'meteor/browser-policy-common';
// e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );
BrowserPolicy.content.allowFontOrigin("data:");
BrowserPolicy.content.allowOriginForAll( 'https://maps.googleapis.com/' );
//BrowserPolicy.content.allowOriginForAll( 'https://www.w3schools.com/' );
//BrowserPolicy.content.allowOriginForAll( 'https://maps.googleapis.com' );
