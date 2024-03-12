export class Cliente  {

    _nombre;
    _impuesto;

    constructor(nombre, impuesto = null) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get getNombre() {
        return this._nombre;
    }
    set setNombre(value) {
        this._nombre = value;
    }

    formateaValores(valor){
        return valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })
    }

    calcularImpuesto(){
        const impuestoCalculado = ((this._impuesto._montoBrutoAnual - this._impuesto._deducciones) * 0.21);

        const montoBrutoAnualFormateado = this.formateaValores(this._impuesto._montoBrutoAnual)
        const deduccionesFormateado = this.formateaValores(this._impuesto._deducciones)
        const impuestoFormateado = this.formateaValores(impuestoCalculado);

        if(impuestoCalculado > 0){
            return `El impuesto calculado para el cliente: ${this.getNombre} es de: ${impuestoFormateado}. Ya que registra un monto bruto anual de ${montoBrutoAnualFormateado} y deducciones de ${deduccionesFormateado}`
        }else{
            return `El impuesto calculado para el cliente: ${this.getNombre} es de: ${impuestoFormateado}. Ya que no registra monto bruto mensual, ni deducciones.`;
        }
    }

}