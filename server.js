'use strict'; 
const mongoose = require('mongoose');
const Koa = require('koa');
const Router = require('@koa/router');
const render = require('koa-ejs');
const path = require('path');

const app = new Koa(); 
const router = new Router();

//lines with router.get are how you set up routes in Koa, name the route, provide the path, and pass context through an arrow function that you access ctx.body through. 
router.get('koa-example', '/', (ctx) => {
    ctx.body = 'Hello World';
});

router.get('another-koa-example', '/another', (ctx) => {
    ctx.body = "Another Hello World!";
});

app
    .use(router.routes())
    .use(router.allowedMethods());



app.listen(1234)