//Import dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Connect to mongoDB server
mongoose.connect('mongodb://localhost/supinfo');
mongoose.set('debug', true);