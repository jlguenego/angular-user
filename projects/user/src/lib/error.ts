export interface Error {
    code: string;
    message: string;
}

export const ERROR = {
    MAIL_ALREADY_IN_USE: {
        code: 'auth/mail-already-in-use',
        message: 'The mail is already in use'
    } as Error,
    WEAK_PASSWORD: {
        code: 'auth/weak-password',
        message: 'The password is too weak'
    } as Error,
    BAD_LOGIN: {
        code: 'auth/bad-login',
        message: 'Bad login or password'
    } as Error,
    BAD_PASSWORD: {
        code: 'auth/bad-password',
        message: 'Bad password'
    } as Error,
    NOT_CONNECTED: {
        code: 'auth/not-connected',
        message: 'Must be connected'
    } as Error,
    NEEDS_RECENT_AUTH: {
        code: 'auth/needs-recent-auth',
        message: 'Needs recent authentication for security reason.'
    } as Error

};
