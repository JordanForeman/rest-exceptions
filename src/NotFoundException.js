import { RestException } from './RestException';

const NOT_FOUND_STATUS = 404;
const DEFAULT_MESSAGE = 'Not Found';

export class NotFoundException extends RestException {
    constructor(message) {
        super(message || DEFAULT_MESSAGE, NOT_FOUND_STATUS);
    }
}
