"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("cloudhub-components/dist/mui/styles");

var _core = require("cloudhub-components/dist/mui/core");

var _organisms = require("components/organisms");

var _atoms = require("components/atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      height: '100%',
      width: '100%'
    },
    companyAvatar: {
      width: 60,
      height: 60
    },
    dot: {
      display: 'inline-block',
      width: theme.spacing(1),
      height: theme.spacing(1),
      background: theme.palette.text.primary,
      borderRadius: '100%',
      marginRight: theme.spacing(1)
    },
    dotSmall: {
      width: theme.spacing(1 / 2),
      height: theme.spacing(1 / 2)
    },
    companyName: {
      fontWeight: 700
    },
    dotMargin: {
      margin: theme.spacing(0, 1)
    }
  };
});
/**
 * Component to display the job card company
 *
 * @param {Object} props
 */

var CardJobCompany = function CardJobCompany(props) {
  var jobTitle = props.jobTitle,
      jobLocation = props.jobLocation,
      companyLogo = props.companyLogo,
      companyName = props.companyName,
      jobsCount = props.jobsCount,
      companyInfo = props.companyInfo,
      className = props.className,
      rest = _objectWithoutProperties(props, ["jobTitle", "jobLocation", "companyLogo", "companyName", "jobsCount", "companyInfo", "className"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_organisms.CardBase, _extends({
    className: (0, _clsx.default)('card-company', classes.root, className),
    align: "left"
  }, rest), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    src: companyLogo,
    alt: companyName,
    className: classes.companyAvatar
  })), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "h6",
    className: classes.companyName
  }, companyName)), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "span",
    variant: "subtitle1",
    color: "textPrimary"
  }, jobTitle), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _clsx.default)(classes.dot, classes.dotSmall, classes.dotMargin)
  }), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "span",
    variant: "subtitle1",
    color: "textPrimary"
  }, jobLocation)), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_atoms.LearnMoreLink, {
    title: jobsCount,
    variant: "subtitle1"
  })), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "p",
    variant: "body2",
    color: "textSecondary"
  }, companyInfo))));
};

CardJobCompany.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * Job title of the card
   */
  jobTitle: _propTypes.default.string.isRequired,

  /**
   * Job location of the card
   */
  jobLocation: _propTypes.default.string.isRequired,

  /**
   * Company logo of the card
   */
  companyLogo: _propTypes.default.string.isRequired,

  /**
   * Company name of the card
   */
  companyName: _propTypes.default.string.isRequired,

  /**
   * Count of the jobs in the the card
   */
  jobsCount: _propTypes.default.string.isRequired,

  /**
   * Company info in the card
   */
  companyInfo: _propTypes.default.string.isRequired
};
var _default = CardJobCompany;
exports.default = _default;