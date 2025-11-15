document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("formulario");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const nombre = document.getElementById("nombre").value;
            const fecha = document.getElementById("fecha").value;
            const cantidad = document.getElementById("cantidad").value;
            const categoria = document.getElementById("categoria").value;
            const pago = document.querySelector('input[name="pago"]:checked').value;

            sessionStorage.setItem("nombre", nombre);
            sessionStorage.setItem("fecha", fecha);
            sessionStorage.setItem("cantidad", cantidad);
            sessionStorage.setItem("categoria", categoria);
            sessionStorage.setItem("pago", pago);

            window.location.href = "confirmacion.html";

        });
    }

    if (document.getElementById("reservaNombre")) {
        const nombre = sessionStorage.getItem("nombre");
        const fecha = sessionStorage.getItem("fecha");
        const cantidad = sessionStorage.getItem("cantidad");
        const categoria = sessionStorage.getItem("categoria");
        const pago = sessionStorage.getItem("pago");


        document.getElementById("reservaNombre").textContent = nombre;
        document.getElementById("reservaFechayLugar").textContent = fecha;
        document.getElementById("reservaCantidad").textContent = cantidad;
        document.getElementById("reservaCategoria").textContent = categoria;
        document.getElementById("reservaPago").textContent = pago;
    }

});
