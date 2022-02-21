"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactCalendar = _interopRequireDefault(require("react-calendar"));

require("react-calendar/dist/Calendar.css");

require("./style.css");

function DatePicker(_ref) {
  var idInput = _ref.idInput,
      dateInput = _ref.dateInput,
      updateDate = _ref.updateDate;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      displayCalendar = _useState2[0],
      setDisplayCalendar = _useState2[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "datepicker-form",
    tabIndex: "0"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: idInput,
    className: "datepicker-input",
    value: dateInput !== "" ? dateInput.toLocaleDateString() : "",
    onChange: function onChange() {
      return dateInput.toLocaleDateString();
    },
    onFocus: function onFocus(e) {
      setDisplayCalendar(true);
    }
  }), displayCalendar == true ? /*#__PURE__*/_react.default.createElement("div", {
    className: "datepicker-calendar-buttons"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "datepicker-calendar-buttons_close",
    onClick: function onClick() {
      return setDisplayCalendar(false);
    }
  }, "X")) : null, displayCalendar == true ? /*#__PURE__*/_react.default.createElement(_reactCalendar.default, {
    onChange: function onChange(e) {
      updateDate(e);
      setDisplayCalendar(false);
    }
  }) : null);
}

var _default = DatePicker;
exports.default = _default;