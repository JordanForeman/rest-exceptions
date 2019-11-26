import { RestException } from './RestException';

const DEFAULT_MESSAGE = 'Internal Server Error';
const GENERIC_SERVER_ERROR_STATUS = 500;

export class GenericRestException extends RestException {
    constructor(message) {
        super(message || DEFAULT_MESSAGE, GENERIC_SERVER_ERROR_STATUS);
    }
}
