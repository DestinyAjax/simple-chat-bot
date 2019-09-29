var restify = require('restify');
var builder = require('botbuilder');

/**
 * We should create a connector that will be used to interact with the bot. 
 * In the following code, we are creating a console connector:
 */
var connector = new builder.ConsoleConnector().listen();

/**
 * The logic to manage the bots lies within the UniversalBot class , which accepts a variety of connectors. 
 * In the following code, we pass the console connector just created to the UniversalBot:
 */
var bot = new builder.UniversalBot(connector);

/**
 * Bot conversations can be done in multiple styles, one of which is dialogs. 
 * In a typical web application, the user navigates through the application using the routing pattern defined 
 * by the application. Dialogs follow the same pattern; 
 * each dialog can be thought of as a route within the conversational approach. 
 */

