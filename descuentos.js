/* const precioOriginal = 120;
const descuento = 18; */

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioDescuento,
    precioConDescuento
}); */


function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
    return precioConDescuento;
}

function onCLickPriceDiscount () {

    const coupons = [
        "JuanDC_es_Batman",
        "pero_no_le_digas_a_nadie",
        "es_un_secreto",
    ];
    const inputPrice = (document.getElementById("inputPrice")).value;
    const inputCoupon = (document.getElementById("inputCoupon")).value;

    let descuento;

    if (!coupons.includes(inputCoupon)){
        alert("El cupón " + inputCoupon + " no es válido");
    }else if (inputCoupon ==="JuanDC_es_Batman"){
        descuento = 15;
    }else if (inputCoupon === "pero_no_le_digas_a_nadie"){
        descuento = 30;
    }else if (inputCoupon === "es_un_secreto"){
        descuento = 25;
    }

    /* console.log({
        inputPrice, 
        descuento
    }) */
    const precioConDescuento = calcularPrecioConDescuento(inputPrice,descuento);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText= "El precio con descuento es: $"+ precioConDescuento;
}

const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 9, 5, 2, 5, 1, 5, 5, 9];

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length - arr.filter(v => v===b).length
    ).pop();
}


console.log(mode(NUMBERS)); //5