"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("cloudhub-components/dist/mui/styles");

var _swiper = _interopRequireDefault(require("swiper"));

var _atoms = require("components/atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      width: '100%',
      height: '100%',
      zIndex: 'auto'
    },
    swiperSlide: {
      width: 'auto'
    },
    swiperNav: {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'absolute',
      width: 88,
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 4,
      '& .swiper-button-prev, & .swiper-button-next': {
        width: theme.spacing(3),
        height: theme.spacing(3),
        padding: theme.spacing(2),
        background: theme.palette.primary.main,
        borderRadius: '100%',
        position: 'relative',
        boxShadow: "0 2px 10px 0 ".concat(theme.palette.cardShadow),
        border: "2px solid ".concat(theme.palette.background.paper),
        '&:after': {
          fontSize: 'initial',
          color: theme.palette.background.paper
        }
      },
      '& .swiper-button-prev': {
        left: 0
      },
      '& .swiper-button-next': {
        right: 0
      }
    },
    image: {
      objectFit: 'cover'
    }
  };
});
/**
 * Component to display the image swiper
 *
 * @param {Object} props
 */

var SwiperImage = function SwiperImage(props) {
  var items = props.items,
      navigationButtonStyle = props.navigationButtonStyle,
      imageClassName = props.imageClassName,
      className = props.className,
      rest = _objectWithoutProperties(props, ["items", "navigationButtonStyle", "imageClassName", "className"]);

  var classes = useStyles();

  _react.default.useEffect(function () {
    new _swiper.default('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-container .swiper-button-next',
        prevEl: '.swiper-container .swiper-button-prev'
      }
    });
  });

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _clsx.default)('swiper-container', 'swiper-image', classes.root, className)
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: "swiper-image__wrapper, swiper-wrapper"
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _clsx.default)('swiper-image__slide', 'swiper-slide', classes.swiperSlide),
      key: index
    }, /*#__PURE__*/_react.default.createElement(_atoms.Image, {
      src: item.src,
      alt: item.alt,
      srcSet: item.srcSet,
      lazyProps: {
        width: '100%',
        height: '100%'
      },
      className: (0, _clsx.default)('swiper-image__item', classes.image, imageClassName ? imageClassName : {})
    }));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('swiper-image__navigation', classes.swiperNav)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('swiper-image__navigation-button', 'swiper-image__navigation-button--prev', 'swiper-button-prev', navigationButtonStyle || {})
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('swiper-image__navigation-button', 'swiper-image__navigation-button--next', 'swiper-button-next', navigationButtonStyle || {})
  })));
};

SwiperImage.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * External classes for the images
   */
  imageClassName: _propTypes.default.string,

  /**
   * The array of images object which should consist of src, alt and srcset attributes
   */
  items: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,

  /**
   * Styles classes of the navigation button
   */
  navigationButtonStyle: _propTypes.default.string
};
var _default = SwiperImage;
exports.default = _default;