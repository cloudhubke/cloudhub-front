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

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _atoms = require("components/atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    expandOpen: {
      transform: 'rotate(180deg)',
      color: theme.palette.primary.dark
    },
    listItem: {
      cursor: 'pointer'
    }
  };
});
/**
 * Component to display accordion view
 *
 * @param {*} props
 */

var Accordion = function Accordion(props) {
  var items = props.items,
      className = props.className,
      titleProps = props.titleProps,
      subtitleProps = props.subtitleProps,
      textProps = props.textProps,
      linkProps = props.linkProps,
      rest = _objectWithoutProperties(props, ["items", "className", "titleProps", "subtitleProps", "textProps", "linkProps"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", _extends({}, rest, {
    className: (0, _clsx.default)('accordion', classes.root, className)
  }), items.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_core.Accordion, {
      className: (0, _clsx.default)('accordion__item-wrapper', classes.listItem),
      key: item.id
    }, /*#__PURE__*/_react.default.createElement(_core.AccordionSummary, {
      expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null),
      "aria-controls": "".concat(item.id, "-content"),
      id: item.id
    }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
      container: true,
      spacing: 0,
      className: "accorion__item-text-container"
    }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
      item: true,
      xs: 12,
      className: "accorion__item-title-container"
    }, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
      variant: "h6",
      color: "textPrimary",
      className: "accorion_item-title"
    }, titleProps), item.title)), item.subtitle && /*#__PURE__*/_react.default.createElement(_core.Grid, {
      item: true,
      xs: 12,
      className: "accorion_item-subtitle-container"
    }, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
      variant: "subtitle1",
      color: "textSecondary",
      className: "accorion_item-subtitle"
    }, subtitleProps), item.subtitle)))), /*#__PURE__*/_react.default.createElement(_core.AccordionDetails, null, /*#__PURE__*/_react.default.createElement(_core.Grid, {
      container: true,
      spacing: 2,
      className: "accordion__collapsable-text-container"
    }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
      item: true,
      xs: 12,
      className: "accordion__collapsable-text-wrapper"
    }, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
      variant: "body1",
      color: "textPrimary",
      className: "accordion__collapsable-text"
    }, textProps), item.text)), item.link && /*#__PURE__*/_react.default.createElement(_core.Grid, {
      item: true,
      xs: 12,
      className: "accordion__collapsable-link-wrapper"
    }, /*#__PURE__*/_react.default.createElement(_atoms.LearnMoreLink, _extends({
      title: item.link,
      variant: "body1",
      className: "accordion__collapsable-link"
    }, linkProps))))));
  }));
};

Accordion.defaultProps = {
  titleProps: {},
  subtitleProps: {},
  textProps: {},
  linkProps: {}
};
Accordion.propTypes = {
  /**
   * Classname from the parent component
   */
  className: _propTypes.default.string,

  /**
   * Items to show inside the accordion
   */
  items: _propTypes.default.array.isRequired,

  /**
   * Additional properties to pass to the title Typography component
   */
  titleProps: _propTypes.default.object,

  /**
   * Additional properties to pass to the subtitle Typography component
   */
  subtitleProps: _propTypes.default.object,

  /**
   * Additional properties to pass to the text Typography component
   */
  textProps: _propTypes.default.object,

  /**
   * Additional properties to pass to the link component
   */
  linkProps: _propTypes.default.object
};
var _default = Accordion;
exports.default = _default;