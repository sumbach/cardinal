 /*
  * This file will highlight itself using the custom theme when run via: "node highlight-self-hide-semicolons"
  * It is using a custom theme that highlights semicolons as 'black', therfore hiding them
  */

var cardinal = require('..')
  , hideSemicolonsTheme = require('../themes/hide-semicolons');

function highlight () {
  
  // Using the synchronous highlightFileSync()
  // For asynchronous highlighting use: highlightFile() - see highlight-self.js
  
  var highlighted = cardinal.highlightFileSync(__filename, hideSemicolonsTheme);
  console.log(highlighted);
}

highlight();