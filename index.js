const BadRequestException = require('./lib/BadRequestException').BadRequestException;
const ConflictingResourceException = require('./lib/ConflictingResourceException').ConflictingResourceException;
const ForbiddenException = require('./lib/ForbiddenException').ForbiddenException;
const GenericRestException = require('./lib/GenericRestException').GenericRestException;
const NotFoundException = require('./lib/NotFoundException').NotFoundException;
const RestException = require('./lib/RestException').RestException;
const UnauthorizedException = require('./lib/UnauthorizedException').UnauthorizedException;

module.exports = {
    BadRequestException: BadRequestException,
    ConflictingResourceException: ConflictingResourceException,
    ForbiddenException: ForbiddenException,
    GenericRestException: GenericRestException,
    NotFoundException: NotFoundException,
    RestException: RestException,
    UnauthorizedException: UnauthorizedException
};
