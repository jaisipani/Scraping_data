const https = require('https');
const express = require('express');
const app = express();
const port = 3000


app.get('/', (req, res) => {

	res.send("Try on /getTimeStories");
})

app.get('/getTimeStories',(req, res) => {
			res.send("Check console, response is shown in console.");
			https.get('https://time.com', (res) => {

				  const data = [];
				  res.on('data', (d) => {
				    data.push(d);
				});

		   	res.on('end', () => {
		   
			        const result = data
			        .join("")
			        .match(/(?<=class="(latest-stories__item-headline)">)(.*?)(?=<\/h3>)/g)

		   	console.log(JSON.stringify(result));

			});

});

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
