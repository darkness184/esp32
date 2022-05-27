'use strict';
const mqtt = require('mqtt');
const information = require('../src/controllers/information.controller');

//mqtt server flespi
const host = 'mqtt.flespi.io'
const port = '1883'
const clientId = `mqtt_server_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${port}`

var mqttClient = {};

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

mqttClient.data = function data_temp_humi() {
    client.on('', (topic, payload) => {
        var data = payload.toString();
        return data;
    })
}

client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString())
    information.insert;
})
