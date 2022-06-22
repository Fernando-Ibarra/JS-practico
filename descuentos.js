const coupons = [
    {
        name:"JLM346",
        discount: 15,
    },
    {
        name:"OTJ840",
        discount: 25,
    },
    {
        name:"WSL789",
        discount: 30,
    },
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const CouponValue = inputCoupon.value;

    const isCouponValueValid = function(coupons) {
        return coupons.name === CouponValue;
    }

    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + CouponValue + "no es válido.")
    }

    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "Tu precio con descuento es: $" + precioConDescuento;
}