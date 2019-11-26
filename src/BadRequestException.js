import { RestException } from './RestException';

const DEFAULT_MESSAGE = 'Bad Request';
const BAD_REQUEST_STATUS = 400;

export class BadRequestException extends RestException {
    constructor(message) {
        super(message || DEFAULT_MESSAGE, BAD_REQUEST_STATUS);
    }
}
