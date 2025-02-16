

    //VARIABLES
    const info=document.querySelector(".mousee");
    // info.setAttribute("id","info");
    // info.textContent="Presiona en algún punto de la pantalla ";


    //FUNCIONES
    



    //CÓDIGO
    
    document.addEventListener("DOMContentLoaded",()=>{
        

        // document.addEventListener("mousemove",(e)=>{
        //     //Obtener coordenadas del movimiento del ratón (con desplazamiento de página)
        //     const x=e.pageX;
        //     const y = e.pageY + window.scrollY;  // Considerar el desplazamiento de la página

        //     //Averiguar el ancho y alto total de la pantalla
        //     const widthPantalla=document.documentElement.clientWidth;
        //     const heigthPantalla=document.documentElement.clientHeight;


        //     //Obtener ancho y alto del div
        //     const ancho=info.clientWidth;
        //     const alto=info.clientHeight;

        //     // const anchoDiv=info.offsetWidth;
        //     // const altoDiv=info.offsetHeight;

        //     //Obtener la mitad de la altura y la anchura del div para saber el centro
        //     const anchoMedio=ancho/2;
        //     const altoMedio=alto/2;

        //     //Calcular la posición para centrar el puntero en el div
        //     let posX=(x-anchoMedio);//Al ancho total se le quita el ancho medio del div
        //     let posY=(y-altoMedio);

        //     // Limitar el movimiento horizontal
        //     posX = Math.max(0, Math.min(widthPantalla - ancho, posX));

        //     // Limitar el movimiento vertical, tomando en cuenta el desplazamiento de la página
        //     posY = Math.max(0, Math.min(heigthPantalla + window.scrollY - alto, posY));
            
        //     //Mover el div a la posición calculada
        //     info.style.left=`${posX}px`;
        //     info.style.top=`${posY}px`;
        // })




    //    // Variables de seguimiento del ratón
    // let lastMousePosition = { x: null, y: null };  // Para almacenar la última posición del ratón
    // let isMouseMoving = false;

    // // Función para mover el div a la posición calculada
    // function moveDiv(x, y) {
    //     // Obtener ancho y alto del div
    //     const ancho = info.clientWidth;
    //     const alto = info.clientHeight;

    //     // Obtener la mitad de la altura y la anchura del div para centrarlo en el ratón
    //     const anchoMedio = ancho / 2;
    //     const altoMedio = alto / 2;

    //     // Calcular la posición para centrar el puntero en el div
    //     const posX = x - anchoMedio;
    //     const posY = y - altoMedio;

    //     // Mover el div a la posición calculada
    //     info.style.left = `${posX}px`;
    //     info.style.top = `${posY}px`;
    // }

    // // Evento mousemove para mover el div mientras el ratón se mueve
    // document.addEventListener("mousemove", (e) => {
    //     // Obtener coordenadas del movimiento del ratón relativas a la ventana
    //     const x = e.clientX;
    //     const y = e.clientY;

    //     // Almacenamos las últimas posiciones del ratón
    //     lastMousePosition = { x, y };
    //     isMouseMoving = true;  // El ratón está en movimiento

    //     // Mover el div a la posición actual del ratón
    //     moveDiv(x + window.scrollX, y + window.scrollY);  // Asegúrate de ajustar el scroll
    // });

    // // Evento scroll para ajustar la posición del div en base al desplazamiento de la página
    // document.addEventListener("scroll", () => {
    //     if (!isMouseMoving && lastMousePosition.x !== null && lastMousePosition.y !== null) {
    //         // Si el ratón está quieto, actualizar la posición del div con el desplazamiento
    //         moveDiv(lastMousePosition.x + window.scrollX, lastMousePosition.y + window.scrollY);
    //     }
    // });

    // // Crear un intervalo para seguir el ratón cuando este esté quieto
    // setInterval(() => {
    //     if (!isMouseMoving && lastMousePosition.x !== null && lastMousePosition.y !== null) {
    //         // Si el ratón está quieto, actualizamos la posición del div
    //         moveDiv(lastMousePosition.x + window.scrollX, lastMousePosition.y + window.scrollY);
    //     }
    // }, 50);  // Comprobamos cada 50ms si el ratón está quieto




       

        // document.body.append(info);




  //ANIMACIÓN MÁSCARA
      // Seleccionamos el div con la clase 'mascara'
      const mascara = document.querySelector('.mascara');
      
      function animarMascara(){
      // Evento de scroll
      window.addEventListener('scroll', () => {
        // Obtener la posición del scroll (en píxeles)
        const scrollY = window.scrollY;
        
        // Calcular un tamaño basado en el scroll. Cuanto más se haga scroll, más grande será el círculo.
        const maxMaskSize = 150; // Tamaño máximo del círculo (en porcentaje)
        const scrollMax = document.documentElement.scrollHeight - window.innerHeight; // Altura total de la página menos la ventana visible
        const scrollPercent = Math.min(scrollY / scrollMax, 1)*10; // Porcentaje de desplazamiento (0 a 1)
        
        // Calcular el tamaño del círculo en función del scroll
        const maskSize = 5 + (scrollPercent * (maxMaskSize - 5)); // Empieza en 25% y crece hasta el 100%

        // Actualizar el estilo de la máscara
        const maskValue = `radial-gradient(circle, rgba(0, 0, 0, 0) ${maskSize}%, rgba(0, 0, 0, 1) ${maskSize}%)`;
        
        // Aplicar el nuevo valor de máscara
        mascara.style.maskImage = maskValue;
        mascara.style.webkitMaskImage = maskValue; // Safari requiere el prefijo webkit
      });

    }

    animarMascara();

    
    //ANIMACIÓN TIMELINES
    const linea1=document.querySelector(".aumentarL1");
    const texto1=document.querySelector(".opacidadT1");

    function animarLinea1(){
    //Evento de scroll
    window.addEventListener("scroll", ()=>{
      
      // Obtener la posición del scroll (en píxeles)
      const scrollY = window.scrollY;
      console.log(scrollY);

      //Cuando se llegue a x píxeles, que aumente la línea de tamaño
      const porcentajeStart=1000+(1000*0.10);
      
      if(scrollY>=porcentajeStart){
        linea1.style.transition="width 2s ease-in-out";
        linea1.style.width="10%";

        texto1.style.transition="opacity 2s ease-in-out";
        texto1.style.opacity=1;
      }else{
        linea1.style.transition="width 1.5s ease-in-out";
        linea1.style.width="0%";

        texto1.style.transition="opacity 2s ease-in-out";
        texto1.style.opacity=0;
      }
    })

  }

  animarLinea1();



  
  const linea2=document.querySelector(".aumentarL2");
  const texto2=document.querySelector(".opacidadT2");

  function animarLinea2(){
    //Evento de scroll
    window.addEventListener("scroll", ()=>{
      
      // Obtener la posición del scroll (en píxeles)
      const scrollY = window.scrollY;
      console.log(scrollY);

      //Cuando se llegue a x píxeles, que aumente la línea de tamaño
      const porcentajeStart=1000+(1000*0.25);
      
      if(scrollY>=porcentajeStart){
        linea2.style.transition="width 2s ease-in-out";
        linea2.style.width="20%";

        texto2.style.transition="opacity 2s ease-in-out";
        texto2.style.opacity=1;
      }else{
        linea2.style.transition="width 1.5s ease-in-out";
        linea2.style.width="0%";

        texto2.style.transition="opacity 2s ease-in-out";
        texto2.style.opacity=0;
      }
    })

  }

  animarLinea2();




  const linea3=document.querySelector(".aumentarL3");
  const texto3=document.querySelector(".opacidadT3");

  function animarLinea3(){
    //Evento de scroll
    window.addEventListener("scroll", ()=>{
      
      // Obtener la posición del scroll (en píxeles)
      const scrollY = window.scrollY;
      console.log(scrollY);

      //Cuando se llegue a x píxeles, que aumente la línea de tamaño
      const porcentajeStart=1300+(1300*0.10);
      
      if(scrollY>=porcentajeStart){
        linea3.style.transition="width 2s ease-in-out";
        linea3.style.width="30%";

        texto3.style.transition="opacity 2s ease-in-out";
        texto3.style.opacity=1;
      }else{
        linea3.style.transition="width 1.5s ease-in-out";
        linea3.style.width="0%";

        texto3.style.transition="opacity 2s ease-in-out";
        texto3.style.opacity=0;
      }
    })

  }

  animarLinea3();




  const linea4=document.querySelector(".aumentarL4");
  const texto4=document.querySelector(".opacidadT4");

  function animarLinea4(){
    //Evento de scroll
    window.addEventListener("scroll", ()=>{
      
      // Obtener la posición del scroll (en píxeles)
      const scrollY = window.scrollY;
      console.log(scrollY);

      //Cuando se llegue a x píxeles, que aumente la línea de tamaño
      const porcentajeStart=1400+(1400*0.10);
      
      if(scrollY>=porcentajeStart){
        linea4.style.transition="width 2s ease-in-out";
        linea4.style.width="40%";

        texto4.style.transition="opacity 2s ease-in-out";
        texto4.style.opacity=1;
      }else{
        linea4.style.transition="width 1.5s ease-in-out";
        linea4.style.width="0%";

        texto4.style.transition="opacity 2s ease-in-out";
        texto4.style.opacity=0;
      }
    })

  }

  animarLinea4();
    });