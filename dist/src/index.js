'use strict';

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _apicache = require('apicache');

var _apicache2 = _interopRequireDefault(_apicache);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _server = require('./server/server');

var _server2 = _interopRequireDefault(_server);

var _routes = require('./routes/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var app = (0, _express2.default)();
app.use((0, _compression2.default)());
app.use((0, _helmet2.default)());
app.all('/echo', _apicache2.default.middleware('1 hour'), _routes2.default.echo);
app.listen(process.env.PORT || 3000, _server2.default.listen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJhcHAiLCJ1c2UiLCJhbGwiLCJtaWRkbGV3YXJlIiwiZWNobyIsImxpc3RlbiIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIl0sIm1hcHBpbmdzIjoiOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxpQkFBT0EsTUFBUDs7QUFDQSxJQUFNQyxNQUFNLHdCQUFaO0FBQ0FBLElBQUlDLEdBQUosQ0FBUSw0QkFBUjtBQUNBRCxJQUFJQyxHQUFKLENBQVEsdUJBQVI7QUFDQUQsSUFBSUUsR0FBSixDQUFRLE9BQVIsRUFBaUIsbUJBQU1DLFVBQU4sQ0FBaUIsUUFBakIsQ0FBakIsRUFBNkMsaUJBQU9DLElBQXBEO0FBQ0FKLElBQUlLLE1BQUosQ0FBV0MsUUFBUUMsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQS9CLEVBQXFDLGlCQUFPSCxNQUE1QyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCBjYWNoZSBmcm9tICdhcGljYWNoZSc7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgaGVsbWV0IGZyb20gJ2hlbG1ldCc7XG5pbXBvcnQgc2VydmVyIGZyb20gJy4vc2VydmVyL3NlcnZlcic7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzL3JvdXRlcyc7XG5cbmRvdGVudi5jb25maWcoKTtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5hcHAudXNlKGhlbG1ldCgpKTtcbmFwcC5hbGwoJy9lY2hvJywgY2FjaGUubWlkZGxld2FyZSgnMSBob3VyJyksIHJvdXRlcy5lY2hvKTtcbmFwcC5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwLCBzZXJ2ZXIubGlzdGVuKTtcbiJdfQ==