export class Impuestos {
    _montoBrutoAnual;
    _deducciones;

    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones
    }

    get getMontoBrutoAnual() {
        return this._montoBrutoAnual;
    }
    set setMontoBrutoAnual(value) {
        this._montoBrutoAnual = value;
    }
    get getDeducciones() {
        return this._deducciones;
    }
    set setDeducciones(value) {
        this._deducciones = value;
    }

}