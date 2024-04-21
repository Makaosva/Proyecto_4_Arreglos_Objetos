const propiedadesVentas = [
  {
    nombre: "Venta1",
    imagen: "../assets/img/foto_venta1.jpg",
    src: "Penthouse de lujo con terraza panorámica",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    bano: 3,
    costo: 4700,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Venta2",
    imagen: "../assets/img/foto_venta2.jpg",
    src: "Apartamento acogedor en la montaña",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    bano: 2,
    costo: 1600,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Venta3",
    imagen: "../assets/img/foto_venta3.avif",
    src: "Apartamento de lujo en zona exclusiva",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    bano: 4,
    costo: 5500,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Venta4",
    imagen: "../assets/img/foto_venta4.jpeg",
    src: "Apartamento acogedor en la playa",
    descripcion:
      "Este apartamento acogedor está situado al frente de la playa con impresionantes vistas",
    ubicacion: "2001 S Surf Rd, Hollywood, FL 33019",
    habitaciones: 3,
    bano: 3,
    costo: 4600,
    smoke: false,
    pets: false,
  },
];

//Creamos una funcion para mostrar propiedades Total en venta
function mostrarPropVentaTotal(propiedadesVentas) {
  //Instanciamos desde el HTML lista de propiedades en venta
  console.log("funciona");
  const listaPropVenta = document.getElementById("propVenta");
  listaPropVenta.innerHTML = "";
  let html = "";
  //Recorremos el arreglo propiedades en venta con metodo forEach
  propiedadesVentas.forEach((propiedad) => {
    //Creamos elemento div
    const propVentaElem = document.createElement("div");
    //Creamos las clases del elemento
    propVentaElem.classList.add("col-md-4", "mb-4");

    html = `
        <div class="card">
            <img
                src="${propiedad.imagen}"
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
            <h5 class="card-title">
                ${propiedad.src}
            </h5>
            <p class="card-text">
                ${propiedad.descripcion}
            </p>
            <p>
                <i class="fas fa-map-marker-alt"></i>
                ${propiedad.ubicacion}
            </p>
            <p>
                <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedad.bano} Baños
            </p>
            <p>
                <i class="fas fa-dollar-sign"></i> ${propiedad.costo}
            </p>
    `;

    if (propiedad.smoke) {
      html += `<p class="text-success">
        <i class="fas fa-smoking"></i> Permitido fumar
      </p>
      `;
    } else {
      html += `<p class="text-danger">
            <i class="fas fa-smoking-ban"></i> No se permite fumar
        </p>
        `;
    }

    if (propiedad.pets) {
      html += `<p class="text-success">
          <i class="fas fa-paw"></i> Mascotas permitidas
        </p>
        </div>
        </div>
        </div>`;
    } else {
      html += `<p class="text-danger">
          <i class="fas fa-ban"></i> No se permiten mascotas
        </p>
        </div>
        </div>
        </div>`;
    }
    propVentaElem.innerHTML = html;
    listaPropVenta.appendChild(propVentaElem);
  });
}

function mostrarPropVenta(propiedadesVentas) {
  //Instanciamos desde el HTML lista de propiedades en venta
  console.log("funciona index");
  const listaPropVenta = document.getElementById("propVenta");
  listaPropVenta.innerHTML = "";
  let html = "";
  //Recorremos el arreglo propiedades en venta con metodo forEach
  for (let i = 0; i < 3; i++) {
    //Creamos elemento div
    const propVentaElem = document.createElement("div");
    //Creamos las clases del elemento
    propVentaElem.classList.add("col-md-4", "mb-4");

    html = `
          <div class="card">
              <img
                  src="${propiedadesVentas[i].imagen}"
                  class="card-img-top"
                  alt="Imagen del departamento"
              />
              <div class="card-body">
              <h5 class="card-title">
                  ${propiedadesVentas[i].src}
              </h5>
              <p class="card-text">
                  ${propiedadesVentas[i].descripcion}
              </p>
              <p>
                  <i class="fas fa-map-marker-alt"></i>
                  ${propiedadesVentas[i].ubicacion}
              </p>
              <p>
                  <i class="fas fa-bed"></i> ${propiedadesVentas[i].habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedadesVentas[i].bano} Baños
              </p>
              <p>
                  <i class="fas fa-dollar-sign"></i> ${propiedadesVentas[i].costo}
              </p>
      `;

    if (propiedadesVentas[i].smoke) {
      html += `<p class="text-success">
          <i class="fas fa-smoking"></i> Permitido fumar
        </p>
        `;
    } else {
      html += `<p class="text-danger">
              <i class="fas fa-smoking-ban"></i> No se permite fumar
          </p>
          `;
    }

    if (propiedadesVentas[i].pets) {
      html += `<p class="text-success">
            <i class="fas fa-paw"></i> Mascotas permitidas
          </p>
          </div>
          </div>
          </div>`;
    } else {
      html += `<p class="text-danger">
            <i class="fas fa-ban"></i> No se permiten mascotas
          </p>
          </div>
          </div>
          </div>`;
    }
    propVentaElem.innerHTML = html;
    listaPropVenta.appendChild(propVentaElem);
  }
}

const botones = document.querySelectorAll("a");
for (const boton of botones) {
  boton.addEventListener("click", () => {
    if ((boton.className = "venta")) {
      console.log("primer if");
      mostrarPropVentaTotal(propiedadesVentas);
    } else if ((boton.className = "alquiler")) {
      console.log("segundo if");
      mostrarPropAlquilerTotal(propiedadesAlquiler);
    } else {
      console.log("else");
    }
  });
}
window.onload = () => {
  mostrarPropVenta(propiedadesVentas);
  mostrarPropAlquiler(propiedadesAlquiler);
};
