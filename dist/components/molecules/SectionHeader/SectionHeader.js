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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: _defineProperty({
      marginBottom: theme.spacing(3)
    }, theme.breakpoints.up('md'), {
      marginBottom: theme.spacing(4)
    }),
    disableGutter: {
      marginBottom: 0
    },
    title: {
      fontWeight: 'bold'
    },
    cta: {
      marginLeft: theme.spacing(1),
      '&:first-child': {
        marginLeft: theme.spacing(0)
      }
    }
  };
});
/**
 * Component to display the section headers
 *
 * @param {Object} props
 */

var SectionHeader = function SectionHeader(props) {
  var title = props.title,
      titleVariant = props.titleVariant,
      subtitleVariant = props.subtitleVariant,
      subtitle = props.subtitle,
      subtitleColor = props.subtitleColor,
      label = props.label,
      overline = props.overline,
      fadeUp = props.fadeUp,
      align = props.align,
      ctaGroup = props.ctaGroup,
      disableGutter = props.disableGutter,
      titleClasses = props.titleClasses,
      className = props.className,
      labelProps = props.labelProps,
      titleProps = props.titleProps,
      subtitleProps = props.subtitleProps,
      rest = _objectWithoutProperties(props, ["title", "titleVariant", "subtitleVariant", "subtitle", "subtitleColor", "label", "overline", "fadeUp", "align", "ctaGroup", "disableGutter", "titleClasses", "className", "labelProps", "titleProps", "subtitleProps"]);

  var classes = useStyles();
  var justifyGrid = 'center';

  if (align === 'left') {
    justifyGrid = 'flex-start';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  return /*#__PURE__*/_react.default.createElement(_core.Grid, _extends({
    container: true,
    spacing: 2,
    "data-aos": fadeUp ? 'fade-up' : '',
    className: (0, _clsx.default)('section-header', classes.root, disableGutter ? classes.disableGutter : {}, className)
  }, rest), overline && /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    container: true,
    justify: justifyGrid,
    xs: 12,
    className: "section-header__overline-wrapper"
  }, overline), label && /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: "section-header__label-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    variant: "overline",
    color: "primary",
    component: "p",
    align: align || 'center'
  }, labelProps), label)), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: "section-header__title-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    variant: titleVariant,
    align: align || 'center',
    className: (0, _clsx.default)('section-header__title', classes.title, titleClasses ? titleClasses : {}),
    color: "textPrimary"
  }, titleProps), title)), subtitle && /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: "section-header__subtitle-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    variant: subtitleVariant || 'h6',
    align: align || 'center',
    color: subtitleColor || 'textSecondary',
    className: "section-header__subtitle"
  }, subtitleProps), subtitle)), ctaGroup && ctaGroup.length && /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: "section-header__cta-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    justify: justifyGrid,
    alignItems: "center",
    wrap: "nowrap",
    className: "section-header__cta-container"
  }, ctaGroup.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      className: (0, _clsx.default)('section-header__cta-item-wrapper', classes.cta)
    }, item);
  }))));
};

SectionHeader.defaultProps = {
  titleVariant: 'h4',
  labelProps: {},
  titleProps: {},
  subtitleProps: {}
};
SectionHeader.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * Title of the section header
   */
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired,

  /**
   * Subtitle of the section header
   */
  subtitle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),

  /**
   * Label title of the section header
   */
  label: _propTypes.default.string,

  /**
   * The overline component in the section header
   */
  overline: _propTypes.default.node,

  /**
   * Array of the CTAs
   */
  ctaGroup: _propTypes.default.arrayOf(_propTypes.default.node),

  /**
   * Whether to fade up on scroll
   */
  fadeUp: _propTypes.default.bool,

  /**
   * Header content (title, subtitle, CTAs) alignment
   */
  align: _propTypes.default.oneOf(['right', 'left', 'center']),

  /**
   * Whether to disable bottom margin of the section
   */
  disableGutter: _propTypes.default.bool,

  /**
   * Styles classes to be attached to the title from the parent component
   */
  titleClasses: _propTypes.default.string,

  /**
   * Title variant
   */
  titleVariant: _propTypes.default.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,

  /**
   * SubTitle variant
   */
  subtitleVariant: _propTypes.default.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2']),

  /**
   * SubTitle color
   */
  subtitleColor: _propTypes.default.oneOf(['textPrimary', 'textSecondary', 'primary', 'secondary']),

  /**
   * Additional properties to pass to the label Typography component
   */
  labelProps: _propTypes.default.object,

  /**
   * Additional properties to pass to the title Typography component
   */
  titleProps: _propTypes.default.object,

  /**
   * Additional properties to pass to the subtitle Typography component
   */
  subtitleProps: _propTypes.default.object
};
var _default = SectionHeader;
exports.default = _default;