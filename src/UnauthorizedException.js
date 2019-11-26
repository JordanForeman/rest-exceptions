import { RestException } from './RestException';

const DEFAULT_MESSAGE = 'Unauthorized';
const UNAUTHORIZED_STATUS = 401;

export class UnauthorizedException extends RestException {
    constructor(message) {
        super(message || DEFAULT_MESSAGE, UNAUTHORIZED_STATUS);
    }
}
