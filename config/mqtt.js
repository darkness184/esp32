'use strict';
const { json } = require('express/lib/response');
const mqtt = require('mqtt');
const information = require('../src/models/information.model');
var dbConn = require('../config/db.config')

//mqtt server flespi
const host = 'mqtt.flespi.io'
const port = '1883'
const clientId = `mqtt_server_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${port}`

const clientID = mqtt.mqttClient;

const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'knz9VGe4ZOrylbG1sZ7vNDs8H54Ew0FGb2DVwIPlm7Hw6dno1iIEJ0CgVuKfjeLk',
    password: '',
    reconnectPeriod: 1000,
})

const topic = 'temp_humi/data'
client.on('connect', () => {
    console.log('Connected')
    client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`)
    })
})

client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString())
    console.log('tranfer data to base');
    var data_pub = {"data" : payload.toString()};
    var data_json = JSON.stringify(data_pub);
    data_json = JSON.parse(data_json);
    var data = Number(data_json.data);
    console.log('type data: ',typeof data, '...', data);

    information.insert(data, function(err, information){
    if (err)
        console.log('error: ', err);
    console.log('result: ', information);
    });
})