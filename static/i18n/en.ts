import en from 'vee-validate/dist/locale/en.json'

const eng = {
  language: {
    spanish: 'Español',
    english: 'Inglés',
  },
  loginview: {
    title: 'Log in',
    user: 'Phone number / Email',
    password: 'Password',
    enter: 'Log in',
    forgotPassword: 'Forgot your password?',
    retrieve: 'Recover it here',
    or: 'or',
    userNotExist: 'The user does not exist, please register.',
    wrongPassword: 'Wrong password',
    noAccount: "Don't have an account?",
    register: 'Register',
  },
  registerview: {
    confirmData: 'Confirm your information before <br />to continue',
    share: 'Share with your <br /> loved ones',
    form: {
      name: 'Name',
      lastname: 'Last name',
      email: 'Email',
      phone: 'Phone number',
      password: 'Password',
      country: 'País',
      city: 'City',
      otpCode: 'Code',
      continue: 'Next',
      back: 'Back',
      age: 'Age',
      gender: 'Gender',
      genderOptions: {
        male: 'Male',
        female: 'Female',
        other: 'Other',
      },
      interest: 'I am interested in knowing',
      interestOptions: {
        men: 'Men',
        women: 'Women',
        both: 'Both',
      },
    },
    hasAccount: 'Do you have an account?',
    loginHere: 'Login here',
    newClient: 'We have detected a <br />new customer',
    enterCode: 'Enter the code that we have sent to your email address',
    showPassword: 'Show',
    hidePassword: 'Hide',
    letUsKnowYou: 'Let us get to know you better',
    almostFinish: "We'll be done soon, <br /> Welcome to Skoll",
  },
  validation: en.messages,
  passwordValidation:
    'Debe contener al menos una mayuscula, una minúscula, un número y un caractér especial',
  recoverview: {
    recoverpassword: 'Password <br /> recovery',
    enterPhoneNumber: 'Enter your cell phone number',
    form: {
      phoneNumber: 'Cell phone number',
      email: 'Email',
      enterEmail: 'Enter your email address',
      enterPassword: 'Please enter a new password',
      password: 'New password',
      continue: 'Continue',
      back: 'Back',
    },
    validateEmail: 'Validate your email address',
    lastStep: 'We are one step away <br /> from finishing!',
    changePassword: 'Change your password',
  },
  sidebar: {
    main: {
      login: 'login',
      register: 'register',
      categories: {
        title: 'categories',
        nightclubs: 'night clubs',
        bars: 'bars',
        restaurants: 'restaurants',
        stores: 'stores',
      },
      others: {
        title: 'others',
        registerTrade: 'register trade',
        faqs: 'faq',
        plans: 'plans',
      },
    },
  },
  header: {
    location: 'location',
    search: 'search',
    login: 'login',
    userMenu: {
      profile: 'Profile',
      config: 'Settings',
      logout: 'Log out',
    },
  },
  home: {
    sections: {
      timeline: {
        title: 'Reservation everywhere',
        subtitle: 'What are your plans for tonight, book with Skoll right now?',
        first: {
          title: 'Book, order and enjoy!',
          description:
            "Don't worry today by making a reservation at your favorite bar or restaurant and enjoy your reservation.",
        },
        second: {
          title: 'Meet people',
          description:
            'Make a match today by inviting new people for a beer, with Skoll chat and book a real meeting.',
        },
        third: {
          title: 'We work 24 hours a day',
          description:
            '24/7 support and a wide range of restaurants and partners with 24-hour service.',
        },
      },
      register: {
        title:
          '<p class="text-muted mb-2">Register your</p> Restaurant or Bar!',
        description:
          'Discover the benefits of the +50,000 partners in 9 countries already working with Skoll.',
        button: 'sign up',
      },
      share: {
        title:
          'With skoll you can share with your friends, set up and plan your rumba today.',
        match: 'Match today with Skoll <br />without restrictions or ads.',
      },
      restaurants: {
        title: '<small class="text-muted">Top restaurants in</small> Colombia',
      },
    },
  },
  feed: {
    makePlan: 'Make a plan',
    photoVideo: 'Photo / video',
    whatsToday: 'Where is it for today?',
    posts: {
      seeComments: 'Ver comentarios',
      addComment: 'Agregar comentario',
    },
  },
  configview: {
    editProfile: {
      title: 'Edit profile',
      changeProfileImg: 'Change picture',
      maxSize: 'Maximum size 2 mb.',
      extensions: 'Images with extensions .png, .jpeg or .jpg',
      invalidExt: 'File with invalid extension',
      passwordUpdated: 'Password updated',
    },
    changePassword: {
      title: 'Change password',
    },
    networkLinking: {
      title: 'Network linking',
      facebook: 'Facebook',
      instagram: 'Instagram',
      tiktok: 'Tiktok',
      onlyfans: 'OnlyFans',
    },
    help: 'Help',
    privacy: {
      title: 'Privacy and security',
      subtitle: 'Configure all your privacy settings on the platform as you wish.',
      profile: 'Visible profile',
      notifications: 'Notifications',
      invitations: 'Allow invitations'
    },
    save: 'save',
    profileUpdated: 'Your profile has been updated',
  },
  success: 'Success',
  error: 'Error',
  form: {
    currentPassword: 'Current password',
    newPassword: 'New password',
    confirmPassword: 'Confirm password',
    save: 'save',
    validations: {
      url: 'It must be a valid url: https://....',
    },
  },
}

export default eng
