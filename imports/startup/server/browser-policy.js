import { BrowserPolicy } from 'meteor/browser-policy-common';
// e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );

BrowserPolicy.content.allowFontOrigin("data:");
BrowserPolicy.content.allowOriginForAll( 'https://maps.googleapis.com/' );
BrowserPolicy.content.allowOriginForAll( 'https://maps.gstatic.com/' );
BrowserPolicy.content.allowOriginForAll( 'https://csi.gstatic.com/' );
BrowserPolicy.content.allowOriginForAll( 'https://fonts.googleapis.com/' );
BrowserPolicy.content.allowOriginForAll( 'https://fonts.gstatic.com/' );
BrowserPolicy.content.allowOriginForAll("*");
BrowserPolicy.content.allowOriginForAll("*.*.*");
//BrowserPolicy.content.allowOriginForAll( 'https://www.w3schools.com/' );
//BrowserPolicy.content.allowOriginForAll( 'https://maps.googleapis.com' );'https://maps.gstatic.com/mapfiles/openhand_8_8.cur'
