//Se crea una variable para cargar las imagenes en el boton 
const BotonCat = document.querySelector('#botoncargar');
const imageGato = document.querySelector('#cat-image');

BotonCat.addEventListener('click', async () => {
  try{
    const promise = await fetch ('https://cataas.com/cat');
    alert('LA IMAGEN CARGO EXITOSAMENTE');
    if(!promise.ok){
      throw new console.error('NO SE PUEDE CARGAR LA IMAGEN');
    }
  
    const respuesta = await promise.blob();
    imageGato.src = URL.createObjectURL(respuesta);
  } catch (error){
    console.error(error);
    alert('TENEMOS UN ERROR AL CARGAR LA IMAGEN');
  }
});
