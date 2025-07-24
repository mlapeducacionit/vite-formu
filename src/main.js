import './style.css'

const start = () => {

   console.warn('// ! Formularios (validaciones)');

   console.warn('// ! Trabajo con el anchor tag');

   const linkGoogle = document.getElementById('link-google')
   console.log(linkGoogle) // No debe ser null

   linkGoogle.addEventListener('click', function(e) { // e | evt | evento | event
   e.preventDefault() // Detiene el comportamiento por defecto del navegador
   console.log('Hicieron click sobre el hipervínculo')
   console.log(e) // Obj del evento
   e.target.textContent = 'Educación IT'
   /* linkGoogle.textContent */

   /* BOM */
   // window.setTimeout(callback, time-ms)
      window.setTimeout(() => {
         //location.href = e.target.href
         // API -> BOM
         window.location.href = 'https://educacionit.com'
      }, 5000)

   })

   console.warn('// ! Trabajo con el formulario');
   
   const dataForm = document.querySelector('#data-form')

   // Evento se submit de un formulario
   dataForm.addEventListener('submit', (e) => {
      e.preventDefault() // Detener el comporamiento por defecto del formulario
      console.log('Se está por enviar la info...')

      // * Vemos que hay dentro del objeto e (El objeto que se crea cuando el addEventListener se ejecuta)
      //console.log(e)

      const formulario = e.target

      console.log(formulario) // representacion
      console.dir(formulario) // radiografía (nodos html)

      const nombreName = formulario[0].name // 'nombre'
      let nombreValue = formulario[0].value // 'Maxi'
      const [ ,inpuApellido, inputEdad, inputCorreo, inputPassword] = formulario // inputApellido
      const apellidoName = inpuApellido.name // 'apellido'
      let apellidoValue = inpuApellido.value // 'Principe'
      const edadName = inputEdad.name // 'edad'
      let edadValue = inputEdad.value // '22'
      const correoName = inputCorreo.name // 'correo'
      let correoValue = inputCorreo.value // 'max@gmail.com'
      const passwordName = inputPassword.name // 'password'
      let passwordValue = inputPassword.value // '123456'
      console.log(nombreName)
      console.log(nombreValue)
      console.log(apellidoName)
      console.log(apellidoValue)
      console.log(edadName)
      console.log(edadValue)
      console.log(correoName)
      console.log(correoValue)
      console.log(passwordName)
      console.log(passwordValue)

      
      // Dentro de las cadenas (string), voy a tener métodos
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

      nombreValue = nombreValue.trim()
      apellidoValue = apellidoValue.trim()
      edadValue = edadValue.trim()
      correoValue = correoValue.trim()
      passwordValue = passwordValue.trim()

      console.log('-----------------------------------')
      console.log('Comienzo validaciones')
      console.log('-----------------------------------')

      if ( nombreValue === '' ) {
         console.warn(`El campo ${nombreName} es obligatorio`)
      }

      if ( nombreValue.length < 5 ) {
         console.warn(`El campo ${nombreName} tiene que tener al menos 5 caracteres `)
      }

      if ( apellidoValue === '' ) {
         console.warn(`El campo ${apellidoName} es obligatorio`)
      }

      if ( edadValue === '' ) {
         console.warn(`El campo ${edadName} es obligatorio`)
      }

      if ( correoValue === '' ) {
         console.warn(`El campo ${correoName} es obligatorio`)
      }
      
      if ( !correoValue.includes('@') ) {
         console.warn(`El campo ${correoName} no es válido`)
      }

      if ( passwordValue === '' ) {
         console.warn(`El campo ${passwordName} es obligatorio`)
      }

      const resultadoName = nombreValue === '' // true o false
      const resultadoLargoName = nombreValue.length < 5 // true o false
      const resultadoApellidoName = apellidoValue === ''
      const resultadoEdadName = edadValue === ''
      const resultadoCorreoName = correoValue === ''
      const resultadoCorreoValidoName = !correoValue.includes('@')
      const resultadoPasswordName = passwordValue === ''

      // ------------------------
      // a    ||   b    = resultado
      // true ||  true   = true
      // true ||  false  = true
      // false || true   = true
      // false || false  = false // <------------------
      // ------------------------

      if( resultadoName || resultadoLargoName || resultadoApellidoName || resultadoEdadName || resultadoCorreoName || resultadoCorreoValidoName || resultadoPasswordName) {
         console.error('Debe completar los campos obligatorios')
      } else {
         console.log('Se envia la data...')

         const dataAEnviar = {
            [nombreName]: nombreValue,
            [apellidoName]: apellidoValue,
            [edadName]: edadValue,
            [correoName]: correoValue,
            [passwordName]: passwordValue,
         }

         console.log(dataAEnviar) // AJAX -> XMLHttpRequest | fetch | AXIOS

         // Limpia los inputs
         formulario.reset()
         
      }
      
      // Expresiones regulares para validaciones más complejas en el correo y el password

   })


}

   /* Shortcuts */
   /* Para seleccionar y crear cursores al seleccionar (Ctrl + DobleClick) */
   /* Para crear cursores (Ctrl + Alt + ⬆️ o ⬇️)  */
   /* Tecla inicio para moverse al inicio de la línea */
   /* Tecla fin para moverse al final de la línea */

// DOMContentLoaded -> Se dispara cuando todo el DOM (Todo html está completamente cargado en el cliente)
document.addEventListener('DOMContentLoaded', start)