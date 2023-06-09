"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _arrow = _interopRequireDefault(require("../../assets/arrow.svg"));
var _const = require("../../utils/const");
require("./style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Months = _ref => {
  let {
    choosenMonth,
    monthOptionIsOpen,
    setMonthOptionIsOpen,
    setChoosenMonth,
    language
  } = _ref;
  const [currentMonth, setCUrrentMonth] = (0, _react.useState)();
  let traducedMonths = _const.weekDays_options.i18n[language].months;
  (0, _react.useEffect)(() => {
    setCUrrentMonth(traducedMonths.find((month, index) => index === choosenMonth));
  }, [choosenMonth, language, traducedMonths]);
  const setMonth = monthNumber => {
    setChoosenMonth(monthNumber);
    setMonthOptionIsOpen(false);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "selectMonth-react-date-picker-janouy"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "selectMonthTitle-react-date-picker-janouy",
    "data-testid": "selectedMonth",
    onClick: e => setMonthOptionIsOpen(!monthOptionIsOpen)
  }, currentMonth, /*#__PURE__*/_react.default.createElement("img", {
    className: "selectArrow-react-date-picker-janouy",
    src: _arrow.default,
    alt: "arrow"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: monthOptionIsOpen ? "selectMonthsOptions-react-date-picker-janouy" : "selectOptionClosed-react-date-picker-janouy",
    "data-testid": "openMonthsListContent"
  }, traducedMonths.map((month, index) => index === choosenMonth ? /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    className: "selectedMonthOption-react-date-picker-janouy",
    "data-testid": "currentMonth"
  }, month) : /*#__PURE__*/_react.default.createElement("div", {
    className: "option-react-date-picker-janouy",
    "data-testid": "oneMonth",
    key: index,
    onClick: e => setMonth(index)
  }, month))));
};
var _default = Months;
exports.default = _default;