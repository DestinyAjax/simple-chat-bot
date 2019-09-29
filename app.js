const restify = require('restify');
const botbuilder = require('botbuilder');

/**
 * We should create a connector that will be used to interact with the bot. 
 * In the following code, we are creating a console connector:
 */
// var connector = new builder.ConsoleConnector().listen();

/**
 * The logic to manage the bots lies within the UniversalBot class , which accepts a variety of connectors. 
 * In the following code, we pass the console connector just created to the UniversalBot:
 */
// var bot = new builder.UniversalBot(connector);

/**
 * Bot conversations can be done in multiple styles, one of which is dialogs. 
 * In a typical web application, the user navigates through the application using the routing pattern defined 
 * by the application. Dialogs follow the same pattern; 
 * each dialog can be thought of as a route within the conversational approach. 
 */
 
// Create bot adapter, which defines how the bot sends and receives messages.
var adapter = new botbuilder.BotFrameworkAdapter({
    appId: process.env.MICROSOFT_BOT_APP_ID,
    appPassword: process.env.MICROSOFT_BOT_APP_PASSWORD
});
 
// Create HTTP server.
let server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log(`\n${server.name} listening to ${server.url}`);
    console.log(`\nGet Bot Framework Emulator: https://aka.ms/botframework-emulator`);
});
 
// Listen for incoming requests at /api/messages.
server.post('/api/messages', (req, res) => {
    // Use the adapter to process the incoming web request into a TurnContext object.
    adapter.processActivity(req, res, async (turnContext) => {
        // Do something with this incoming activity!
        if (turnContext.activity.type === 'message') {            
            // Get the user's text
            const utterance = turnContext.activity.text;
 
            // send a reply
            await turnContext.sendActivity(`I heard you say ${ utterance }`);
        }
    });
});
