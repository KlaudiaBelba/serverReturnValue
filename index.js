import http  from 'http';
import fsp from 'fs/promises';
import express from 'express';
import sumArray from "function.js";
const app = express();

app.get ('/unique', async (req, res) => {
    const content = await fsp.readFile('data.csv','utf-8');
    const array = content.split('/r/n');
    res.end("The unique value are" + content);
  });

app.get ('/sum', async (req, res) => {
    if (req.url === "/sum")   {
    const content = await fsp.readFile('data.csv','utf-8');
    const array = content.split('/r/n');

    res.end( "The sum is" + content);
    }

  });



app.listen(port,  () => {
    console.log(`Server running at http://{hostname}:${port}`);
});


