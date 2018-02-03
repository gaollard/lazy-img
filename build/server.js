var path = require('path')

var opn = require('opn')
var express = require('express')
var webpack = require('webpack')

var config = require('../config')

if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = config.dev.env.NODE_ENV
}

console.log(process.env.NODE_ENV);

opn(111);