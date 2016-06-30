//var request = require("request");
var request = require('supertest');
var express = require('express');
var app = require('../app');
var should = require('should');
//var app = express();

//var server = supertest.agent("http://localhost:3000");



describe('GET /api/users', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

/*
describe('GET /api/recipe', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
*/
describe('GET /api/recipe without token', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/api/recipe')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(403)
      .end(function(err, res) {
        if (err) done(err);
        res.status.should.equal(403);
        done();
      });
    });
      });
