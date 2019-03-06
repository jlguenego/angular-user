export interface Error {
    code: string;
    message: string;
}

export const ERROR = {
    MAIL_ALREADY_IN_USE: <Error>{
        code: 'auth/mail-already-in-use',
        message: 'The mail is already in use'
    },
    WEAK_PASSWORD: <Error>{
        code: 'auth/weak-password',
        message: 'The password is too weak'
    },
    BAD_LOGIN: <Error>{
        code: 'auth/bad-login',
        message: 'Bad login or password'
    },
    BAD_PASSWORD: <Error>{
        code: 'auth/bad-password',
        message: 'Bad password'
    },
    NOT_CONNECTED: <Error>{
        code: 'auth/not-connected',
        message: 'Must be connected'
    }

}
