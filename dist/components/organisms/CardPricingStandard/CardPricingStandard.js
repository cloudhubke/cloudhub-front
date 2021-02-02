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
    featureCheck: {
      marginRight: theme.spacing(1)
    }
  };
});
/**
 * Component to display the job card
 *
 * @param {Object} props
 */

var CardPricingStandard = function CardPricingStandard(props) {
  var title = props.title,
      subtitle = props.subtitle,
      priceComponent = props.priceComponent,
      featureCheckComponent = props.featureCheckComponent,
      features = props.features,
      cta = props.cta,
      disclaimer = props.disclaimer,
      className = props.className,
      titleProps = props.titleProps,
      subtitleProps = props.subtitleProps,
      disclaimerProps = props.disclaimerProps,
      featureTitleProps = props.featureTitleProps,
      rest = _objectWithoutProperties(props, ["title", "subtitle", "priceComponent", "featureCheckComponent", "features", "cta", "disclaimer", "className", "titleProps", "subtitleProps", "disclaimerProps", "featureTitleProps"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_organisms.CardBase, _extends({
    className: (0, _clsx.default)('card-pricing-standard', classes.root, className),
    align: "left"
  }, rest), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    spacing: 2,
    className: "card-pricing-standard__wrapper"
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: "card-pricing-standard__headline"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    variant: "h5",
    gutterBottom: true,
    className: "card-pricing-standard__title"
  }, titleProps), title), subtitle && /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    variant: "subtitle1",
    color: "textSecondary",
    className: "card-pricing-standard__subtitle"
  }, subtitleProps), subtitle)), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: "card-pricing-standard__divider-container"
  }, /*#__PURE__*/_react.default.createElement(_core.Divider, {
    className: "card-pricing-standard__divider"
  })), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: "card-pricing-standard__content"
  }, priceComponent), features && /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: "card-pricing-standard__feature-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_core.List, {
    className: "card-pricing-standard__feature-list"
  }, features.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_core.ListItem, {
      key: index,
      disableGutters: true,
      className: "card-pricing-standard__feature-list-item"
    }, featureCheckComponent && /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _clsx.default)('card-pricing-standard__feature-check', classes.featureCheck)
    }, featureCheckComponent), /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
      variant: "h6",
      noWrap: true,
      className: "card-pricing-standard__feature-title"
    }, featureTitleProps), item));
  }))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: "card-pricing-standard__cta-wrapper"
  }, cta), disclaimer && /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: "card-pricing-standard__disclaimer-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    variant: "caption",
    component: "p",
    align: "center",
    className: "card-pricing-standard__disclaimer-title"
  }, disclaimerProps), disclaimer))));
};

CardPricingStandard.defaultProps = {
  titleProps: {},
  subtitleProps: {},
  disclaimerProps: {},
  featureTitleProps: {}
};
CardPricingStandard.propTypes = {
  /**
   *  External classes
   */
  className: _propTypes.default.string,

  /**
   * Title of the pricing card
   */
  title: _propTypes.default.string.isRequired,

  /**
   *  Subtitle of the pricing card
   */
  subtitle: _propTypes.default.string,

  /**
   * The pricing component of the pricing card
   */
  priceComponent: _propTypes.default.node.isRequired,

  /**
   * The features check component of the pricing card
   */
  featureCheckComponent: _propTypes.default.node,

  /**
   * Features array of the pricing card
   */
  features: _propTypes.default.array,

  /**
   *  CTA button of the pricing card
   */
  cta: _propTypes.default.node.isRequired,

  /**
   * Diclaimer of the pricing card
   */
  disclaimer: _propTypes.default.string,

  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: _propTypes.default.object,

  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: _propTypes.default.object,

  /**
   * Additional props to pass to the disclaimer Typography component
   */
  disclaimerProps: _propTypes.default.object,

  /**
   * Additional props to pass to the feature title Typography component
   */
  featureTitleProps: _propTypes.default.object
};
var _default = CardPricingStandard;
exports.default = _default;