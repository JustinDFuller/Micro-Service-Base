# Micro-Service-Base

[![Build Status](https://travis-ci.org/JustinDFuller/Micro-Service-Base.svg?branch=master)](https://travis-ci.org/JustinDFuller/Micro-Service-Base)
[![Coverage Status](https://coveralls.io/repos/github/JustinDFuller/Micro-Service-Base/badge.svg?branch=master)](https://coveralls.io/github/JustinDFuller/Micro-Service-Base?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/JustinDFuller/Micro-Service-Base.svg)](https://greenkeeper.io/)

Base Repository for micro services - Clone this to start a new Node.js micro service.

This micro service repo should contain a small Node.js service that can easily be rewritten,
refactored, or otherwise changed without going through intense pains. It should be lightweight,
fast, and well tested.

It comes pre-packaged with the following items:

- [x] Type Checking Flow
- [x] Testing With Ava
- [x] Coverage with NYC
- [x] CI with Travis CI
- [x] Coverage with coveralls
- [x] Commit Messages Commitizen
- [x] Changelog with cz-conventional-changelog
- [x] Githooks (tests, eslint)
- [x] Eslint rules set up
- [x] Initial express echo route.
- [x] Compression
- [x] Helmet
- [x] Caching with API cache

This service should have a small REST API. The handful of endpoints it provides should
focus on one task or group of tasks. This is important to keep the focus of the micro service
small.

### API

`/echo`
- Method: `ANY`
- Returns: `Object` with `success` set to true and a `message` letting you know you've successfully pinged the server. This is used to verify the service is up and running correctly.
