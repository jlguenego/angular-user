export interface Error {
    code: string;
    message: string;
}

export const ERROR = {
    MAIL_ALREADY_IN_USE: {
        code: 'auth/mail-already-in-use',
        message: 'The mail is already in use'
    },
    WEAK_PASSWORD: {
        code: 'auth/weak-password',
        message: 'The password is too weak'
    },
    BAD_LOGIN: {
        code: 'auth/bad-login',
        message: 'Bad login or password'
    }
    
}
