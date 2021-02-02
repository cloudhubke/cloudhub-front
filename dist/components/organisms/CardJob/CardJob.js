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
    dot: {
      display: 'inline-block',
      width: theme.spacing(1),
      height: theme.spacing(1),
      background: theme.palette.text.primary,
      borderRadius: '100%',
      marginRight: theme.spacing(1)
    },
    dotBig: {
      width: theme.spacing(2),
      height: theme.spacing(2)
    },
    dotSmall: {
      width: theme.spacing(1 / 2),
      height: theme.spacing(1 / 2)
    },
    jobTitle: {
      fontWeight: 700
    },
    dotMargin: {
      margin: theme.spacing(0, 1)
    }
  };
});
/**
 * Component to display the job card
 *
 * @param {Object} props
 */

var CardJob = function CardJob(props) {
  var badgeColor = props.badgeColor,
      badgeTitle = props.badgeTitle,
      jobTitle = props.jobTitle,
      jobLocation = props.jobLocation,
      jobType = props.jobType,
      jobDate = props.jobDate,
      companyLogo = props.companyLogo,
      companyName = props.companyName,
      className = props.className,
      rest = _objectWithoutProperties(props, ["badgeColor", "badgeTitle", "jobTitle", "jobLocation", "jobType", "jobDate", "companyLogo", "companyName", "className"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_organisms.CardBase, _extends({
    className: (0, _clsx.default)('card-job', classes.root, className),
    align: "left"
  }, rest), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _clsx.default)(classes.dot, classes.dotBig),
    style: {
      background: badgeColor
    }
  }), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "span",
    variant: "body2",
    color: "textPrimary"
  }, badgeTitle)), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "h6",
    className: classes.jobTitle
  }, jobTitle))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "span",
    variant: "subtitle1",
    color: "textSecondary"
  }, jobLocation), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _clsx.default)(classes.dot, classes.dotSmall, classes.dotMargin)
  }), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "span",
    variant: "subtitle1",
    color: "textSecondary"
  }, jobType))), /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    disableGutters: true
  }, /*#__PURE__*/_react.default.createElement(_core.ListItemAvatar, null, /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    src: companyLogo,
    alt: companyName
  })), /*#__PURE__*/_react.default.createElement(_core.ListItemText, {
    primary: companyName,
    secondary: jobDate
  })));
};

CardJob.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * Badge color of the job card
   */
  badgeColor: _propTypes.default.string.isRequired,

  /**
   * Badge title of the job card
   */
  badgeTitle: _propTypes.default.string.isRequired,

  /**
   * Job title of the card
   */
  jobTitle: _propTypes.default.string.isRequired,

  /**
   * Job location of the card
   */
  jobLocation: _propTypes.default.string.isRequired,

  /**
   * Job type of the card
   */
  jobType: _propTypes.default.string.isRequired,

  /**
   * Job location of the card
   */
  jobDate: _propTypes.default.string.isRequired,

  /**
   * Company logo of the card
   */
  companyLogo: _propTypes.default.string.isRequired,

  /**
   * Company name of the card
   */
  companyName: _propTypes.default.string.isRequired
};
var _default = CardJob;
exports.default = _default;