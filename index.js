'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isEqual = require('lodash.isequal');
var reduce = require('lodash.reduce');

var whatPropsChanged = function whatPropsChanged() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var changed = 0;

  var changedProps = reduce(props, function (result, value, key) {
    if (!isEqual(value, nextProps[key])) {
      result[key] = {
        old: value,
        new: nextProps[key]
      };
      changed++;
    }
    return result;
  }, {});
  if (changed) {
    opts.log !== false && console.info(name + ', props changed: ' + changed + '\n', opts.string === false ? changedProps : JSON.stringify(changedProps, null, 2));
    if (opts.doReturn) return changedProps;
  }
};

exports.default = whatPropsChanged;
