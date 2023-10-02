const { createClient } =require('redis');

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

client.connect().then(msg=>console.log('Redis Client is connected'));

module.exports= client