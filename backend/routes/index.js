import express from "express";

import userList from "../user.json"

import data_demo from "../data.json"

const fs = require('fs');

const router = express.Router();

// A dummy route which will simply return the text "Hello, World".
router.get('/hello', (req, res) => {
    res.send('Hello, World');
})

router.get('/user', (req, res) => {
    res.send(userList.map((userItem) => { return { "id": userItem.id, "username": userItem.username, "password": userItem.password } }));
})

router.post('/user', (req, res) => {
    const { username, password } = req.body;
    const id_max = data_demo.data1.length - 1;
    userList.push({ "id": id_max + 1, "username": username, "password": password });
    res.send(`new item posted`);
})

router.get('/user/:id', (req, res) => {
    const userItem = userList.map((userItem) => { return { "id": userItem.id, "username": userItem.name, "password": userItem.password } })[parseInt(req.params["id"]) - 1]
    if (userItem != null) {
        res.status(200).send(userItem)
    }
    else {
        res.sendStatus(404);
    }

})

router.get('/data1', (req, res) => {
    res.send(data_demo.data1.map((dataItem) => { return { "id": dataItem.id, "goodsname": dataItem.goodsname, "number": dataItem.number } }));
})

router.get('/data2', (req, res) => {
    res.send(data_demo.data2.map((dataItem) => { return { "id": dataItem.id, "goodsname": dataItem.goodsname, "number": dataItem.number } }));
})

router.post('/data1', (req, res) => {
    const { goodsname, number } = req.body;
    const id_max = data_demo.data1.length - 1;
    data_demo.data1.push({ "id": id_max + 1, "goodsname": goodsname, "number": number });
    // fs.writeFileSync('data.json', JSON.stringify(data_demo), 'utf-8');
    res.send(`new item posted`);
})

router.post('/data2', (req, res) => {
    const { goodsname, number } = req.body;
    const id_max = data_demo.data2.length - 1;
    data_demo.data2.push({ "id": id_max + 1, "goodsname": goodsname, "number": number });
    // fs.writeFileSync('data.json', JSON.stringify(data_demo), 'utf-8');
    res.send(`new item posted`);
})

export default router;