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

var _swiper = _interopRequireDefault(require("swiper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    swiperSlide: _defineProperty({
      paddingBottom: theme.spacing(3)
    }, theme.breakpoints.up('sm'), {
      paddingBottom: theme.spacing(6)
    }),
    number: {
      fontWeight: 900
    }
  };
});
/**
 * Component to display the number swiper
 *
 * @param {Object} props
 */

var SwiperNumber = function SwiperNumber(props) {
  var items = props.items,
      className = props.className,
      numberProps = props.numberProps,
      labelProps = props.labelProps,
      rest = _objectWithoutProperties(props, ["items", "className", "numberProps", "labelProps"]);

  var classes = useStyles();
  var theme = (0, _styles.useTheme)();
  var isMd = (0, _core.useMediaQuery)(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  _react.default.useEffect(function () {
    new _swiper.default('.swiper-container', {
      slidesPerView: isMd ? 4 : 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-container .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      autoplay: {
        delay: 5000
      }
    });
  });

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _clsx.default)('swiper-number', 'swiper-container', className)
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: "swiper-number__wrapper swiper-wrapper"
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _clsx.default)('swiper-number__item', classes.swiperSlide, 'swiper-slide'),
      key: index,
      style: {
        width: 'auto'
      }
    }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
      container: true,
      spacing: 1,
      className: "swiper-number__item-container"
    }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
      item: true,
      xs: 12,
      className: "swiper-number__number-wrapper"
    }, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
      variant: "h3",
      align: "center",
      className: (0, _clsx.default)('swiper-number__number', classes.number)
    }, numberProps), item.number)), /*#__PURE__*/_react.default.createElement(_core.Grid, {
      item: true,
      xs: 12,
      className: "swiper-number__label-wrapper"
    }, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
      variant: "subtitle1",
      color: "textSecondary",
      align: "center",
      className: "swiper-number__label"
    }, labelProps), item.title))));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "swiper-number__pagination swiper-pagination"
  }));
};

SwiperNumber.defaultProps = {
  numberProps: {},
  labelProps: {}
};
SwiperNumber.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * The array of numbers object which should consist of number and title
   */
  items: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,

  /**
   * The additional properties to pass to the number Typography component
   */
  numberProps: _propTypes.default.object,

  /**
   * The additional properties to pass to the label Typography component
   */
  labelProps: _propTypes.default.object
};
var _default = SwiperNumber;
exports.default = _default;