const propiedadesAlquiler = [
  {
    nombre: "Alquiler1",
    imagen: "../assets/img/foto_alquiler1.jpg",
    src: "Cabaña acogedora en la montaña",
    descripcion:
      "Esta cabaña de 3 habitaciones esta ubicado en un bosque en la montaña, para escapar de ruido",
    ubicacion: "456 Ausable Dr, Vermont, VE 76325",
    habitaciones: 3,
    bano: 2,
    costo: 4700,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Alquiler2",
    imagen: "../assets/img/foto_alquiler2.avif",
    src: "Apartamento en el centro de la ciudad",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    bano: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Alquiler3",
    imagen: "../assets/img/foto_alquiler3.avif",
    src: "Apartamento luminoso con vista al mar",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    bano: 2,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Alquiler4",
    imagen: "../assets/img/foto_alquiler4.avif",
    src: "Condominio moderno en zona residencial",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    bano: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
];

//Creamos una funcion para mostrar propiedades en venta
function mostrarPropAlquilerTotal(propiedadesAlquiler) {
  //Instanciamos desde el HTML lista de propiedades en venta
  const listaPropAlquiler = document.getElementById("propAlquiler");

  let html = "";
  //Recorremos el arreglo propiedades en venta con metodo forEach
  propiedadesAlquiler.forEach((propiedad) => {
    //Creamos elemento div
    const propAlquilerElem = document.createElement("div");
    //Creamos las clases del elemento
    propAlquilerElem.classList.add("col-md-4", "mb-4");

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
    console.log(propiedad, "<---propiedad");
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
    propAlquilerElem.innerHTML = html;
    listaPropAlquiler.appendChild(propAlquilerElem);
  });
}

function mostrarPropAlquiler(propiedadesAlquiler) {
  //Instanciamos desde el HTML lista de propiedades en venta
  
  const listaPropAlquiler = document.getElementById("propAlquiler");
  //listaPropVenta.innerHTML = "";
  let html = "";
  //Recorremos el arreglo propiedades en venta con metodo forEach
  for (let i = 0; i < 3; i++) {
    //Creamos elemento div
    const propAlquilerElem = document.createElement("div");
    //Creamos las clases del elemento
    propAlquilerElem.classList.add("col-md-4", "mb-4");

    html = `
            <div class="card">
                <img
                    src="${propiedadesAlquiler[i].imagen}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                <h5 class="card-title">
                    ${propiedadesAlquiler[i].src}
                </h5>
                <p class="card-text">
                    ${propiedadesAlquiler[i].descripcion}
                </p>
                <p>
                    <i class="fas fa-map-marker-alt"></i>
                    ${propiedadesAlquiler[i].ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedadesAlquiler[i].habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${propiedadesAlquiler[i].bano} Baños
                </p>
                <p>
                    <i class="fas fa-dollar-sign"></i> ${propiedadesAlquiler[i].costo}
                </p>
        `;

    if (propiedadesAlquiler[i].smoke) {
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

    if (propiedadesAlquiler[i].pets) {
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
    propAlquilerElem.innerHTML = html;
    listaPropAlquiler.appendChild(propAlquilerElem);
  }
}

window.onload = () => {
  mostrarPropAlquilerTotal(propiedadesAlquiler);
};
