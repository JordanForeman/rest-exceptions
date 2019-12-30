import { RestException } from './RestException';

const NOT_IMPLEMENTED_STATUS = 501;
const DEFAULT_MESSAGE = 'Not Implemented';

export class NotImplementedException extends RestException {
    constructor(message) {
        super(message || DEFAULT_MESSAGE, NOT_IMPLEMENTED_STATUS);
    }
}
