const FIREBASE_CONFIGS = {
    'simran-app-id': {
        apiKey: process.env.REACT_APP_SIMRAN_API_KEY,
        authDomain: process.env.REACT_APP_SIMRAN_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_SIMRAN_PROJECT_ID,
        storageBucket: process.env.REACT_APP_SIMRAN_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_SIMRAN_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_SIMRAN_APP_ID,
        measurementId: process.env.REACT_APP_SIMRAN_MEASUREMENT_ID
    },
    'pooja-app-id': {
        apiKey: process.env.REACT_APP_POOJA_apiKey,
        authDomain: process.env.REACT_APP_POOJA_authDomain,
        projectId: process.env.REACT_APP_POOJA_projectId,
        storageBucket: process.env.REACT_APP_POOJA_storageBucket,
        messagingSenderId: process.env.REACT_APP_POOJA_messagingSenderId,
        appId: process.env.REACT_APP_POOJA_appId,
        measurementId: process.env.REACT_APP_POOJA_measurementId
    },
}

const appNames = {
    'simran-app-id': process.env.REACT_APP_SIMRAN_MODAL_NAME
}

const failedRedirects = {
    'simran-app-id': process.env.REACT_APP_SIMRAN_FAILED_REDIRECTION,
}

const colorThemes = {
    'simran-app-id': process.env.REACT_APP_SIMRAN_COLOR_THEME,
}

const logos = {
    'simran-app-id': process.env.REACT_APP_SIMRAN_LOGO,
}

const successRedirects = {
    'simran-app-id': process.env.REACT_APP_SIMRAN_SUCCESS_REDIRECTION,
}