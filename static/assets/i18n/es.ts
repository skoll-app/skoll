import es from 'vee-validate/dist/locale/es.json'

const esp = {
  language: {
    spanish: 'Español',
    english: 'Inglés',
  },
  loginview: {
    title: 'iniciar sesión',
    user: 'Teléfono / Correo',
    password: 'Contraseña',
    enter: 'ingresar',
    forgotPassword: '¿Olvidaste tu contraseña?',
    retrieve: 'Recuperala aquí',
    or: 'o',
    userNotExist: 'El usuario no existe, por favor registrate',
    wrongPassword: 'Contraseña errónea',
    noAccount: '¿Aún no tienes una cuenta?',
    register: 'Regístrate',
  },
  registerview: {
    confirmData: 'Confirma tus datos antes <br />de continuar',
    share: '¡Comparte con quienes <br /> mas quieres!',
    form: {
      name: 'Nombres',
      lastname: 'Apellidos',
      email: 'Correo',
      phone: 'Teléfono',
      password: 'Contraseña',
      country: 'País',
      city: 'Ciudad',
      otpCode: 'Código',
      continue: 'Continuar',
      back: 'Volver',
    },
    hasAccount: '¿Tienes una cuenta?',
    loginHere: 'Ingresa aquí',
    newClient: 'Hemos dectectado un <br />nuevo cliente',
    enterCode: 'Ingresa el codigo que hemos enviado a tu correo',
    showPassword: 'Mostrar',
    hidePassword: 'Ocultar',
  },
  validation: es.messages,
  passwordValidation:
    'Debe ser mínimo 8 caracteres, contener una mayúscula, una minúscula, un número y un caractér especial',
}

export default esp
