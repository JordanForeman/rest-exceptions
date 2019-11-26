# `@jordanforeman/rest-exceptions`

A set of common REST exceptions to be used in conjunction with [`@jordanforeman/api-framework`](https://github.com/JordanForeman/api-framework).

<span class="badge-npmversion"><a href="https://www.npmjs.com/package/@jordanforeman/rest-exceptions" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@jordanforeman/rest-exceptions.svg" alt="NPM version" /></a></span>
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![](https://github.com/JordanForeman/rest-exceptions/workflows/Semantic%20Release/badge.svg)
![](https://github.com/JordanForeman/rest-exceptions/workflows/PR%20Verify/badge.svg)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

## Installation

```bash
$ npm i --save @jordanforeman/rest-exceptions
```

## Usage

When something goes wrong in your application, choose which error to throw, and do so. Below is an example of throwing a [`404 Not Found`](https://developer.mozilla.org/bg/docs/Web/HTTP/Status/404) exception:

```js
import {NotFoundException} from '@jordanforeman/rest-exceptions';

function getTheThing(id) {
    try {
        const myThing = await repository.getTheThingById(id);

        return myThing;
    } catch (e) {
        throw new NotFoundException();
    }
}
```

**...and with a custom error message**

```js
import {NotFoundException} from '@jordanforeman/rest-exceptions';

function getTheThing(id) {
    try {
        const myThing = await repository.getTheThingById(id);

        return myThing;
    } catch (e) {
        throw new NotFoundException('Could not find the thing you were looking for!');
    }
}
```

### Available Exceptions

| Exception Name | Status Code | Default Message | Documentation |
|----------------|-------------|-----------------|---------------|
| `BadRequestException` | `400` | Bad Request | [MDN](https://developer.mozilla.org/bg/docs/Web/HTTP/Status/400) |
| `ConflictingResourceException` | `409` | Conflict | [MDN](https://developer.mozilla.org/bg/docs/Web/HTTP/Status/409) |
| `ForbiddenException` | `403` | Forbidden | [MDN](https://developer.mozilla.org/bg/docs/Web/HTTP/Status/403) |
| `GenericRestException` | `500` | Internal Server Error | [MDN](https://developer.mozilla.org/bg/docs/Web/HTTP/Status/500) |
| `NotFoundException` | `404` | Not Found | [MDN](https://developer.mozilla.org/bg/docs/Web/HTTP/Status/404) |
| `UnauthorizedException` | `401` | Unauthorized | [MDN](https://developer.mozilla.org/bg/docs/Web/HTTP/Status/401) |
