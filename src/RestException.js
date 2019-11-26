const DEFAULT_MESSAGE = 'Internal Server Error';
const GENERIC_SERVER_ERROR_STATUS = 500;

export class RestException extends Error {
    constructor(message = DEFAULT_MESSAGE, statusCode = GENERIC_SERVER_ERROR_STATUS) {
        super(message);
        this.statusCode = statusCode;
    }

    get statusCode() {
        return this.statusCode;
    }

    set statusCode(statusCode) {
        this.statusCode = statusCode;
    }
}
