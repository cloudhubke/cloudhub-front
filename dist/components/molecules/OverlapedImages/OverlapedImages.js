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

var _atoms = require("components/atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    imageGrid: {
      padding: '.25rem',
      width: '150%',
      boxShadow: '0 1.5rem 4rem rgba(22,28,45,.1)',
      background: theme.palette.background.paper,
      '& img': {
        maxWidth: '100%',
        height: 'auto',
        verticalAlign: 'middle',
        borderStyle: 'none'
      }
    },
    imageGridFirstItem: {
      marginTop: '4rem'
    },
    imageGridLastItem: {
      marginTop: '6rem',
      float: 'right'
    }
  };
});
/**
 * Component to display the overlaped images
 *
 * @param {Object} props
 */

var OverlapedImages = function OverlapedImages(props) {
  var image1 = props.image1,
      image2 = props.image2,
      image3 = props.image3,
      className = props.className,
      rest = _objectWithoutProperties(props, ["image1", "image2", "image3", "className"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Grid, _extends({
    container: true,
    className: (0, _clsx.default)('overlaped-images', className)
  }, rest), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 4,
    className: "overlaped-images__item-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('overlaped-images__item-wrapper', classes.imageGrid, classes.imageGridFirstItem)
  }, /*#__PURE__*/_react.default.createElement(_atoms.Image, {
    src: image1.src,
    srcSet: image1.srcset,
    alt: image1.alt,
    className: "overlaped-images__item-image"
  }))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 4,
    className: "overlaped-images__item-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('overlaped-images__item-wrapper', classes.imageGrid)
  }, /*#__PURE__*/_react.default.createElement(_atoms.Image, {
    src: image2.src,
    srcSet: image2.srcset,
    alt: image2.alt,
    className: "overlaped-images__item-image"
  }))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 4,
    className: "overlaped-images__item-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('overlaped-images__item-wrapper', classes.imageGrid, classes.imageGridLastItem)
  }, /*#__PURE__*/_react.default.createElement(_atoms.Image, {
    src: image3.src,
    srcSet: image3.srcset,
    alt: image3.alt,
    className: "overlaped-images__item-image"
  }))));
};

OverlapedImages.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * Image item - Object of src, srcset and alt properties
   */
  image1: _propTypes.default.object.isRequired,

  /**
   * Image item - Object of src, srcset and alt properties
   */
  image2: _propTypes.default.object.isRequired,

  /**
   * Image item - Object of src, srcset and alt properties
   */
  image3: _propTypes.default.object.isRequired
};
var _default = OverlapedImages;
exports.default = _default;