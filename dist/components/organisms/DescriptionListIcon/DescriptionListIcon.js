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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    title: {
      fontWeight: 700
    }
  };
});
/**
 * Component to display the description list with icon
 *
 * @param {Object} props
 */

var DescriptionListIcon = function DescriptionListIcon(props) {
  var title = props.title,
      subtitle = props.subtitle,
      icon = props.icon,
      align = props.align,
      titleVariant = props.titleVariant,
      subtitleVariant = props.subtitleVariant,
      className = props.className,
      titleProps = props.titleProps,
      subtitleProps = props.subtitleProps,
      rest = _objectWithoutProperties(props, ["title", "subtitle", "icon", "align", "titleVariant", "subtitleVariant", "className", "titleProps", "subtitleProps"]);

  var classes = useStyles();
  var gridJustify = 'center';

  if (align === 'left') {
    gridJustify = 'flex-start';
  } else if (align === 'right') {
    gridJustify = 'flex-end';
  }

  return /*#__PURE__*/_react.default.createElement(_core.Grid, _extends({
    container: true,
    spacing: 2
  }, rest, {
    className: (0, _clsx.default)('description-list-icon', className)
  }), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    container: true,
    justify: gridJustify,
    xs: 12,
    className: "description-list-icon__icon-wrapper"
  }, icon), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: "description-list-icon__title-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    variant: titleVariant,
    color: "textPrimary",
    align: align,
    className: (0, _clsx.default)(classes.title, 'description-list-icon__title')
  }, titleProps), title)), subtitle && /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: "description-list-icon__subtitle-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: subtitleVariant,
    color: "textSecondary",
    align: align,
    className: "description-list-icon__subtitle"
  }, subtitle)));
};

DescriptionListIcon.defaultProps = {
  align: 'center',
  titleVariant: 'h6',
  subtitleVariant: 'body1',
  titleProps: {},
  subtitleProps: {}
};
DescriptionListIcon.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * The title
   */
  title: _propTypes.default.string.isRequired,

  /**
   * the subtitle
   */
  subtitle: _propTypes.default.string,

  /**
   * Whether should show the alternate icon
   */
  icon: _propTypes.default.node.isRequired,

  /**
   * The alignment of the items
   */
  align: _propTypes.default.oneOf(['left', 'right', 'center']),

  /**
   * Title variant
   */
  titleVariant: _propTypes.default.string,

  /**
   * Subtitle variant
   */
  subtitleVariant: _propTypes.default.string,

  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: _propTypes.default.object,

  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: _propTypes.default.object
};
var _default = DescriptionListIcon;
exports.default = _default;