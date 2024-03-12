import { Cliente } from "./cliente.module.js"
import { Impuestos } from "./impuestos.module.js"


function calcularImpuesto(nomCliente, montoBrutoMensual = 0, montoDeducciones = 0) {
    const impuestoCliente = new Impuestos();
    impuestoCliente.setMontoBrutoAnual = montoBrutoMensual;
    impuestoCliente.setDeducciones = montoDeducciones;
    const cliente = new Cliente(nomCliente,impuestoCliente);
    const impuestoCalculado = cliente.calcularImpuesto();
    console.log(impuestoCalculado)
}

//El cliente puede o no registrar impuestos, carnalidad 0...1
// Cliente 1;
calcularImpuesto("Cristian", 500000, 50000);
// Cliente 2;
calcularImpuesto("Ignacio");
// Cliente 3;
calcularImpuesto("Maria", 450000, 38000);
