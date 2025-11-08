2. Serverseitig CORS erlauben (robust, auch für Web-Clients)

Dein Endpoint POST https://slidescockpit.com/api/apify/from-url sollte mindestens:
• Access-Control-Allow-Origin: \* (oder deine erlaubten Origins)
• Access-Control-Allow-Methods: POST, OPTIONS
• Access-Control-Allow-Headers: Content-Type, Authorization
zurückgeben und OPTIONS beantworten (Status 204/200).

Beispiel (Express):

app.options('/api/apify/from-url', (req, res) => {
res.set({
'Access-Control-Allow-Origin': '\*',
'Access-Control-Allow-Methods': 'POST, OPTIONS',
'Access-Control-Allow-Headers': 'Content-Type, Authorization',
});
res.sendStatus(204);
});

app.post('/api/apify/from-url', (req, res) => {
res.set('Access-Control-Allow-Origin', '\*');
// … dein Handler …
});
