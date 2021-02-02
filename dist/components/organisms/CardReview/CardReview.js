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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      height: '100%',
      width: '100%'
    }
  };
});
/**
 * Component to display the review card
 *
 * @param {Object} props
 */

var CardReview = function CardReview(props) {
  var icon = props.icon,
      text = props.text,
      authorPhoto = props.authorPhoto,
      authorName = props.authorName,
      authorTitle = props.authorTitle,
      align = props.align,
      textVariant = props.textVariant,
      className = props.className,
      textProps = props.textProps,
      listItemPrimaryTypographyProps = props.listItemPrimaryTypographyProps,
      listItemSecondaryTypographyProps = props.listItemSecondaryTypographyProps,
      rest = _objectWithoutProperties(props, ["icon", "text", "authorPhoto", "authorName", "authorTitle", "align", "textVariant", "className", "textProps", "listItemPrimaryTypographyProps", "listItemSecondaryTypographyProps"]);

  var classes = useStyles();
  var justifyGrid = 'center';

  if (align === 'left') {
    justifyGrid = 'flex-start';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  return /*#__PURE__*/_react.default.createElement(_organisms.CardBase, _extends({
    className: (0, _clsx.default)('card-review', classes.root, className)
  }, rest), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    spacing: 2,
    className: "card-review__wrapper"
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    container: true,
    justify: justifyGrid,
    xs: 12,
    className: "card-review__icon-wrapper"
  }, icon), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: "card-review__text-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    variant: textVariant,
    align: align,
    component: "p"
  }, textProps), text)), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: "card-review__lits-container"
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    justify: justifyGrid,
    className: "card-review__list-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_core.List, {
    disablePadding: true,
    className: "card-review__list"
  }, /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    className: "card-review__list-item"
  }, /*#__PURE__*/_react.default.createElement(_core.ListItemAvatar, {
    className: "card-review__list-item-avatar"
  }, /*#__PURE__*/_react.default.createElement(_core.Avatar, _extends({}, authorPhoto, {
    alt: authorName,
    className: "card-review__avatar"
  }))), /*#__PURE__*/_react.default.createElement(_core.ListItemText, {
    className: "card-review__list-item-text",
    primary: authorName,
    secondary: authorTitle,
    primaryTypographyProps: _objectSpread({}, listItemPrimaryTypographyProps),
    secondaryTypographyProps: _objectSpread({}, listItemSecondaryTypographyProps)
  })))))));
};

CardReview.defaultProps = {
  align: 'center',
  textVariant: 'h6',
  textProps: {},
  listItemPrimaryTypographyProps: {},
  listItemSecondaryTypographyProps: {}
};
CardReview.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * Icon to show inside the review card
   */
  icon: _propTypes.default.node.isRequired,

  /**
   * Review text to show inside the review card
   */
  text: _propTypes.default.string.isRequired,

  /**
   * Reviewer photo to show inside the review card.Should be an object with src and srcSet properties
   */
  authorPhoto: _propTypes.default.object.isRequired,

  /**
   * Reviewer name to show inside the review card
   */
  authorName: _propTypes.default.string.isRequired,

  /**
   * Reviewer title to show inside the review card
   */
  authorTitle: _propTypes.default.string,

  /**
   * Alignment of the content
   */
  align: _propTypes.default.oneOf(['left', 'right', 'center']),

  /**
   * Review text variant
   */
  textVariant: _propTypes.default.string,

  /**
   * Additional props to pass to the text Typography component
   */
  textProps: _propTypes.default.object,

  /**
   * Additional props to pass to the list item primary text Typography component
   */
  listItemPrimaryTypographyProps: _propTypes.default.object,

  /**
   * Additional props to pass to the list item secondary text Typography component
   */
  listItemSecondaryTypographyProps: _propTypes.default.object
};
var _default = CardReview;
exports.default = _default;