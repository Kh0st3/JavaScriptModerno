// Eventos sobre los Inputs

const busqueda  = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', ()=>{ //Este muestra en consola cuando se escribe
//     console.log('Escribiendo...')
// });

// busqueda.addEventListener('keyup', ()=>{ // Este muestra la accion solo cuando se levanta el dedo de la tecla
//     console.log('Escribiendo...')
// });

// busqueda.addEventListener('blur', ()=>{ // Este muestra cuando se entra y sale del input, excelente para validaciones
//     console.log('Escribiendo...')
// });

// busqueda.addEventListener('copy', ()=>{ // Este muestra cuando se copia el texto ingresado ctrl+c
//     console.log('Escribiendo...')
// });

// busqueda.addEventListener('paste', ()=>{ // Este muestra cuando se pega un texto ingresado ctrl+v
//     console.log('Escribiendo...')
// });

// busqueda.addEventListener('cut', ()=>{ // Este muestra cuando se corta un texto ingresado ctrl+x
//     console.log('Escribiendo...')
// });

busqueda.addEventListener('input', (e)=>{ // Este muestra todos las anteriores acciones exceptuando el 'blur'
    if(e.target.value === ''){
        console.log('Fallo la validacion')
    }});