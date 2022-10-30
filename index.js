const convertir = (mon,val,dor,eur)=>{
    let resultado = 0; 
    if (mon === 'Dolar') {
         resultado = val / dor;
    } else {
         resultado = val / eur;
    } 
    return resultado;
 }
 
 let bienvenido = alert('Bienvenido a la casa de cambio');
 let moneda = prompt('Seleccionar moneda a enviar: 1.Dolar 2.Euro'); 
 let valor = parseInt(prompt('Ingrese un monto'));
 let dolar = 292;
 let euro = 290;
 
 const emc = convertir(moneda,valor,dolar,euro);
 if (moneda === 'Dolar') {
     alert('El cambio de Pesos a Dolares es de $' + emc);
 } else if(moneda === 'Euro') {
     alert('El cambio de Pesos a Euros es de $' + emc);
 } else {
     alert('Tienes que completar todos los requerimientos');
 }