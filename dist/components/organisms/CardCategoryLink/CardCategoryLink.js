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

var _ArrowRightAlt = _interopRequireDefault(require("@material-ui/icons/ArrowRightAlt"));

var _molecules = require("components/molecules");

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
    fontWeight700: {
      fontWeight: 700
    },
    categoryIconButton: {
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end'
    }
  };
});
/**
 * Component to display the category link card
 *
 * @param {Object} props
 */

var CardCategoryLink = function CardCategoryLink(props) {
  var fontIconClass = props.fontIconClass,
      color = props.color,
      title = props.title,
      subtitle = props.subtitle,
      href = props.href,
      align = props.align,
      className = props.className,
      iconAlternateProps = props.iconAlternateProps,
      titleProps = props.titleProps,
      subtitleProps = props.subtitleProps,
      rest = _objectWithoutProperties(props, ["fontIconClass", "color", "title", "subtitle", "href", "align", "className", "iconAlternateProps", "titleProps", "subtitleProps"]);

  var classes = useStyles();
  var justifyGrid = 'flex-start';

  if (align === 'center') {
    justifyGrid = 'center';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  return /*#__PURE__*/_react.default.createElement(_organisms.CardBase, _extends({
    className: (0, _clsx.default)('card-category-link', classes.root, className)
  }, rest), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    spacing: 2,
    className: "card-category-link__wrapper"
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    container: true,
    justify: justifyGrid,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_molecules.IconAlternate, _extends({
    fontIconClass: fontIconClass,
    color: color,
    size: "medium"
  }, iconAlternateProps))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    variant: "h6",
    align: align,
    className: classes.fontWeight700
  }, titleProps), title)), subtitle && /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    variant: "subtitle1",
    align: align,
    color: "textSecondary"
  }, subtitleProps), subtitle))), /*#__PURE__*/_react.default.createElement("a", {
    href: href,
    className: (0, _clsx.default)('card-category-link__item', classes.categoryIconButton)
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    className: "card-category-link__icon-button"
  }, /*#__PURE__*/_react.default.createElement(_ArrowRightAlt.default, {
    className: "card-category-link__icon",
    style: {
      color: color[500]
    }
  })))));
};

CardCategoryLink.defaultProps = {
  align: 'left',
  href: '#',
  iconAlternateProps: {},
  titleProps: {},
  subtitleProps: {}
};
CardCategoryLink.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * Promo title to show inside the card
   */
  title: _propTypes.default.string.isRequired,

  /**
   * Promo subtitle to show inside the card
   */
  subtitle: _propTypes.default.string,

  /**
   * Promo description to show inside the card
   */
  href: _propTypes.default.string.isRequired,

  /**
   * Promo font icon class name to show inside the card
   */
  fontIconClass: _propTypes.default.string,

  /**
   * Promo icon color to show inside the card
   */
  color: _propTypes.default.oneOf([_core.colors.red, _core.colors.pink, _core.colors.purple, _core.colors.deepPurple, _core.colors.indigo, _core.colors.blue, _core.colors.lightBlue, _core.colors.cyan, _core.colors.teal, _core.colors.green, _core.colors.lightGreen, _core.colors.lime, _core.colors.yellow, _core.colors.amber, _core.colors.orange, _core.colors.deepOrange, _core.colors.brown, _core.colors.grey, _core.colors.blueGrey]).isRequired,

  /**
   * The content alignment
   */
  align: _propTypes.default.oneOf(['left', 'right', 'center']),

  /**
   * Additional props to pass to the IconAlternate component
   */
  iconAlternateProps: _propTypes.default.object,

  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: _propTypes.default.object,

  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: _propTypes.default.object
};
var _default = CardCategoryLink;
exports.default = _default;