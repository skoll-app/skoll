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
      age: 'Edad',
      gender: 'Género',
      genderOptions: {
        male: 'Másculino',
        female: 'Fémenino',
        other: 'Otro',
      },
      interest: 'Me interesa conocer',
      interestOptions: {
        men: 'Hombres',
        women: 'Mujeres',
        both: 'Ambos',
      },
      document: 'Número de documento',
      documentType: 'Tipo de documento',
      documentTypeList: {
        CC: 'Cédula de ciudadanía',
        CE: 'Cédula de extranjería',
        NIP: 'Número de identificación personal',
        PAP: 'Pasaporte',
        NIT: 'Número de identificación personal',
      },
    },
    hasAccount: '¿Tienes una cuenta?',
    loginHere: 'Ingresa aquí',
    newClient: 'Hemos dectectado un <br />nuevo cliente',
    enterCode: 'Ingresa el codigo que hemos enviado a tu correo',
    showPassword: 'Mostrar',
    hidePassword: 'Ocultar',
    letUsKnowYou: 'Permitenos conocerte mejor',
    almostFinish: 'Pronto terminaremos, <br /> Bienvenido a Skoll',
  },
  validation: es.messages,
  passwordValidation:
    'Debe ser mínimo 8 caracteres, contener una mayúscula, una minúscula, un número y un caractér especial',
  recoverview: {
    recoverpassword: 'Recuperación de <br /> contraseña',
    enterPhoneNumber: 'Ingresa tu número de celular',
    form: {
      phoneNumber: 'Número celular',
      email: 'Correo',
      enterEmail: 'Ingresa tu correo electrónico',
      enterPassword: 'Por favor ingresa una nueva contraseña',
      password: 'Nueva contraseña',
      continue: 'Continuar',
      back: 'Volver',
    },
    validateEmail: 'Valida tu correo electrónico',
    lastStep: '¡Estamos a un paso de <br /> terminar! ',
    changePassword: 'Cambia tu contraseña',
  },
  sidebar: {
    main: {
      login: 'ingreso',
      register: 'registro',
      categories: {
        title: 'categorías',
        nightclubs: 'discotecas',
        bars: 'bares',
        restaurants: 'restaurantes',
        stores: 'tiendas',
      },
      others: {
        title: 'otros',
        registerTrade: 'registrar comercio',
        faqs: 'preguntas frecuentes',
        plans: 'planes',
      },
    },
  },
  header: {
    location: 'ubicación',
    search: 'buscar',
    login: 'ingreso',
    userMenu: {
      profile: 'Perfíl',
      config: 'Configuración',
      logout: 'Cerrar sesión',
    },
  },
  home: {
    sections: {
      timeline: {
        title: 'Reserva en todo lugar',
        subtitle:
          '¿Que planes tienes para esta noche?, Reserva ya mismo con Skoll',
        first: {
          title: '¡Reserva, ordena y disfruta!',
          description:
            'Despreocupate hoy reservando en tu bar o resturante favorito y disfruta de tu reserva',
        },
        second: {
          title: 'Conoce personas',
          description:
            'Has hoy mismo match invitando a nuevas personas a una cerveza, con Skoll  chatea y reserva un encuentro real.',
        },
        third: {
          title: 'Trabajamos las 24 horas',
          description:
            'Soporte 24/7 y una gran oferta de restaurantes y aliados con servicio las 24 horas.',
        },
      },
      register: {
        title: '<p class="text-muted mb-2">¡Registra tu</p> Restaurante o Bar!',
        description:
          'Descubre los beneficios que tienen los +50.000 aliados en 9 países que ya trabajan con Skoll.',
        button: 'registrarme',
      },
      share: {
        title:
          'Con skoll puedes compartir con tus amigos, arma y planifica tu rumba hoy mismo.',
        match:
          'Haz match hoy mismo con Skoll <br /> sin restricciones ni anuncios.',
      },
      restaurants: {
        title:
          '<small class="text-muted">Top de restaurantes en</small> Colombia',
      },
    },
  },
  feed: {
    makePlan: 'Armar parche',
    photoVideo: 'Foto / video',
    whatsToday: '¿Para donde es hoy?',
    posts: {
      seeComments: 'Ver comentarios',
      addComment: 'Agregar comentario',
    },
  },
  configview: {
    editProfile: 'Editar perfíl',
    changePassword: 'Cambiar contraseña',
    networkLinking: 'Vincular redes',
    help: 'Ayuda',
  },
}

export default esp
