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
    root: {
      height: '100%',
      width: '100%'
    },
    withShadow: {
      boxShadow: "0 2px 10px 0 ".concat(theme.palette.cardShadow)
    },
    noShadow: {
      boxShadow: 'none'
    },
    noBorder: {
      border: 0
    },
    noBg: {
      background: 'transparent'
    },
    liftUp: {
      transition: 'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
      '&:hover': {
        boxShadow: '0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important',
        transform: 'translate3d(0,-5px,0)'
      }
    },
    content: _defineProperty({
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(4, 2),
      '&:last-child': {
        padding: theme.spacing(4, 2)
      }
    }, theme.breakpoints.up('md'), {
      padding: theme.spacing(6, 3),
      '&:last-child': {
        padding: theme.spacing(6, 3)
      }
    }),
    left: {
      alignItems: 'flex-start'
    },
    right: {
      alignItems: 'flex-end'
    },
    center: {
      alignItems: 'center'
    }
  };
});
/**
 * Component to display the basic card
 *
 * @param {Object} props
 */

var CardBase = function CardBase(props) {
  var withShadow = props.withShadow,
      noShadow = props.noShadow,
      noBorder = props.noBorder,
      noBg = props.noBg,
      liftUp = props.liftUp,
      children = props.children,
      align = props.align,
      className = props.className,
      cardContentProps = props.cardContentProps,
      rest = _objectWithoutProperties(props, ["withShadow", "noShadow", "noBorder", "noBg", "liftUp", "children", "align", "className", "cardContentProps"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Card, _extends({
    className: (0, _clsx.default)('card-base', classes.root, withShadow ? classes.withShadow : {}, noShadow ? classes.noShadow : {}, noBorder ? classes.noBorder : {}, noBg ? classes.noBg : {}, liftUp ? classes.liftUp : {}, className)
  }, rest), /*#__PURE__*/_react.default.createElement(_core.CardContent, _extends({
    className: (0, _clsx.default)('card-base__content', classes.content, classes[align])
  }, cardContentProps), children));
};

CardBase.defaultProps = {
  align: 'center',
  cardContentProps: {}
};
CardBase.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * The children content of the basic card
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Whether to show custom shadow
   */
  withShadow: _propTypes.default.bool,

  /**
   * Whether to render the card without shadow
   */
  noShadow: _propTypes.default.bool,

  /**
   * Whether to hide the card borders
   */
  noBorder: _propTypes.default.bool,

  /**
   * Whether to show transparent background
   */
  noBg: _propTypes.default.bool,

  /**
   * Whether to lift up on hover
   */
  liftUp: _propTypes.default.bool,

  /**
   * The content alignment
   */
  align: _propTypes.default.oneOf(['left', 'right', 'center']),

  /**
   * Additional props to pass to the CardContent component
   */
  cardContentProps: _propTypes.default.object
};
var _default = CardBase;
exports.default = _default;