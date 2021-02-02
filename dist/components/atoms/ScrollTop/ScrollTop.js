"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("cloudhub-components/dist/mui/styles");

var _core = require("cloudhub-components/dist/mui/core");

var _KeyboardArrowUp = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowUp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  };
});

var ScrollTop = function ScrollTop() {
  var classes = useStyles();
  var trigger = (0, _core.useScrollTrigger)({
    disableHysteresis: true,
    threshold: 100
  });

  var handleClick = function handleClick() {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement(_core.Zoom, {
    in: trigger
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: handleClick,
    role: "presentation",
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_core.Fab, {
    color: "primary",
    size: "small",
    "aria-label": "scroll back to top"
  }, /*#__PURE__*/_react.default.createElement(_KeyboardArrowUp.default, null))));
};

var _default = ScrollTop;
exports.default = _default;