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

var _atoms = require("components/atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _root;

  return {
    root: (_root = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: "solid 1px rgba(43, 41, 45, 0.2)",
      borderRadius: theme.spacing(1),
      padding: theme.spacing(2),
      background: 'transparent',
      cursor: 'pointer'
    }, _defineProperty(_root, theme.breakpoints.up('sm'), {
      padding: theme.spacing(3)
    }), _defineProperty(_root, '&:hover', {
      background: theme.palette.primary.main,
      boxShadow: '0 11px 55px 10px rgba(0, 0, 0, 0.07), 0 13px 18px -8px rgba(0, 0, 0, 0.15)',
      '& .card-job-minimal__title, & .card-job-minimal__location, & .card-job-minimal__arrow': {
        color: 'white !important'
      }
    }), _root),
    cardJobMinimalBody: _defineProperty({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }, theme.breakpoints.up('md'), {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginRight: theme.spacing(8)
    }),
    title: {
      fontWeight: 'bold'
    }
  };
});
/**
 * Component to display the job card company
 *
 * @param {Object} props
 */

var CardJobMinimal = function CardJobMinimal(props) {
  var title = props.title,
      subtitle = props.subtitle,
      showArrow = props.showArrow,
      titleProps = props.titleProps,
      subtitleProps = props.subtitleProps,
      className = props.className,
      rest = _objectWithoutProperties(props, ["title", "subtitle", "showArrow", "titleProps", "subtitleProps", "className"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _clsx.default)(classes.root, 'card-job-minimal')
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.cardJobMinimalBody, 'card-job-minimal__body'),
    style: !showArrow ? {
      marginRight: 0
    } : {}
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-job-minimal__title-container"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    variant: "subtitle1",
    className: (0, _clsx.default)(classes.title, 'card-job-minimal__title')
  }, titleProps), title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-job-minimal__location-conatiner"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    variant: "body2",
    color: "textSecondary",
    className: "card-job-minimal__location"
  }, subtitleProps), subtitle))), showArrow ? /*#__PURE__*/_react.default.createElement("div", {
    className: "card-job-minimal__arrow-container"
  }, /*#__PURE__*/_react.default.createElement(_atoms.Icon, {
    fontIconClass: "fas fa-angle-right",
    fontIconColor: _core.colors.grey[700],
    className: "card-job-minimal__arrow"
  })) : null);
};

CardJobMinimal.defaultProps = {
  showArrow: false,
  titleProps: {},
  subtitleProps: {}
};
CardJobMinimal.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * Job title of the card
   */
  title: _propTypes.default.string.isRequired,

  /**
   * Job subtitle of the card
   */
  subtitle: _propTypes.default.string.isRequired,

  /**
   * Should show arrow or not
   */
  showArrow: _propTypes.default.bool,

  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: _propTypes.default.object,

  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: _propTypes.default.object
};
var _default = CardJobMinimal;
exports.default = _default;