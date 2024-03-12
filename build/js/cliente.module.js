"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cliente = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Cliente = exports.Cliente = /*#__PURE__*/function () {
  function Cliente(nombre) {
    var impuesto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, Cliente);
    _defineProperty(this, "_nombre", void 0);
    _defineProperty(this, "_impuesto", void 0);
    this._nombre = nombre;
    this._impuesto = impuesto;
  }
  _createClass(Cliente, [{
    key: "getNombre",
    get: function get() {
      return this._nombre;
    }
  }, {
    key: "setNombre",
    set: function set(value) {
      this._nombre = value;
    }
  }, {
    key: "formateaValores",
    value: function formateaValores(valor) {
      return valor.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP'
      });
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      var impuestoCalculado = (this._impuesto._montoBrutoAnual - this._impuesto._deducciones) * 0.21;
      var montoBrutoAnualFormateado = this.formateaValores(this._impuesto._montoBrutoAnual);
      var deduccionesFormateado = this.formateaValores(this._impuesto._deducciones);
      var impuestoFormateado = this.formateaValores(impuestoCalculado);
      if (impuestoCalculado > 0) {
        return "El impuesto calculado para el cliente: ".concat(this.getNombre, " es de: ").concat(impuestoFormateado, ". Ya que registra un monto bruto anual de ").concat(montoBrutoAnualFormateado, " y deducciones de ").concat(deduccionesFormateado);
      } else {
        return "El impuesto calculado para el cliente: ".concat(this.getNombre, " es de: ").concat(impuestoFormateado, ". Ya que no registra monto bruto mensual, ni deducciones.");
      }
    }
  }]);
  return Cliente;
}();