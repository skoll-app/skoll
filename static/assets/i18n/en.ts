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
    },
  },
}

export default eng
