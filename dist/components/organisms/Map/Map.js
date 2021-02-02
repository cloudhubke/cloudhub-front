"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("cloudhub-components/dist/mui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%'
    }
  };
});
/**
 * Component to display the map
 *
 * @param {Object} props
 */

var Map = function Map(props) {
  var zoom = props.zoom,
      center = props.center,
      pins = props.pins,
      className = props.className,
      rest = _objectWithoutProperties(props, ["zoom", "center", "pins", "className"]);

  var classes = useStyles();

  _react.default.useEffect(function () {
    var L = require('leaflet');

    delete L.Icon.Default.prototype._getIconUrl;

    var markerIcon2x = require('assets/images/leaflet-assets/marker-icon-2x.png');

    var markerIcon = require('assets/images/leaflet-assets/marker-icon.png');

    var markerShadow = require('assets/images/leaflet-assets/marker-shadow.png');

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: _typeof(markerIcon2x) === 'object' ? markerIcon2x.default : markerIcon2x,
      iconUrl: _typeof(markerIcon) === 'object' ? markerIcon.default : markerIcon,
      shadowUrl: _typeof(markerShadow) === 'object' ? markerShadow.default : markerShadow
    });
  });

  if (typeof window === 'undefined') {
    return null;
  }

  var ReactMap = require('react-leaflet').Map;

  var TileLayer = require('react-leaflet').TileLayer;

  var Marker = require('react-leaflet').Marker;

  return /*#__PURE__*/_react.default.createElement(ReactMap, _extends({
    zoom: zoom,
    center: center,
    className: (0, _clsx.default)('map', classes.root, className)
  }, rest), /*#__PURE__*/_react.default.createElement(TileLayer, {
    className: "map__tile-layer",
    detectRetina: true,
    attribution: "&copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  }), pins && pins.length && pins.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(Marker, {
      className: "map__marker",
      position: [item.location.y, item.location.x],
      key: i
    });
  }));
};

Map.defaultProps = {
  zoom: 10,
  center: [0, 0]
};
Map.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * Map zoom
   */
  zoom: _propTypes.default.node,

  /**
   * Map center
   */
  center: _propTypes.default.array.isRequired,

  /**
   * data of the locations. Example: [{ location: { x: number, y: number } }]
   */
  pins: _propTypes.default.array
};
var _default = Map;
exports.default = _default;