"use strict";

var _clienteModule = require("./cliente.module.js");
var _impuestosModule = require("./impuestos.module.js");
function calcularImpuesto(nomCliente) {
  var montoBrutoMensual = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var montoDeducciones = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var impuestoCliente = new _impuestosModule.Impuestos();
  impuestoCliente.setMontoBrutoAnual = montoBrutoMensual;
  impuestoCliente.setDeducciones = montoDeducciones;
  var cliente = new _clienteModule.Cliente(nomCliente, impuestoCliente);
  var impuestoCalculado = cliente.calcularImpuesto();
  console.log(impuestoCalculado);
}

//El cliente puede o no registrar impuestos, carnalidad 0...1
// Cliente 1;
calcularImpuesto("Cristian", 500000, 50000);
// Cliente 2;
calcularImpuesto("Ignacio");
// Cliente 3;
calcularImpuesto("Maria", 450000, 38000);