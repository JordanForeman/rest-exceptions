import { RestException } from './RestException';

const DEFAULT_MESSAGE = 'Forbidden';
const FORBIDDEN_STATUS = 403;

export class ForbiddenException extends RestException {
    constructor(message) {
        super(message || DEFAULT_MESSAGE, FORBIDDEN_STATUS);
    }
}
