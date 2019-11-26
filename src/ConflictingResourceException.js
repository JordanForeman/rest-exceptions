import { RestException } from './RestException';

const DEFAULT_MESSAGE = 'Conflict';
const CONFLICT_STATUS = 409;

export class ConflictingResourceException extends RestException {
    constructor(message) {
        super(message || DEFAULT_MESSAGE, CONFLICT_STATUS);
    }
}
