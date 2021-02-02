"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("cloudhub-components/dist/mui/styles");

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
    }
  };
});
/**
 * Component to display the category card
 *
 * @param {Object} props
 */

var CardCategory = function CardCategory(props) {
  var icon = props.icon,
      title = props.title,
      align = props.align,
      className = props.className,
      rest = _objectWithoutProperties(props, ["icon", "title", "align", "className"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_organisms.CardBase, _extends({
    className: (0, _clsx.default)(classes.root, className)
  }, rest), /*#__PURE__*/_react.default.createElement(_organisms.DescriptionListIcon, {
    icon: icon,
    title: title,
    align: align
  }));
};

CardCategory.defaultProps = {
  align: 'center'
};
CardCategory.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * Icon to show inside the category card
   */
  icon: _propTypes.default.node.isRequired,

  /**
   * Category title to show inside the category card
   */
  title: _propTypes.default.string.isRequired,

  /**
   * The content alignment
   */
  align: _propTypes.default.oneOf(['left', 'right', 'center'])
};
var _default = CardCategory;
exports.default = _default;