import { MissingParamError } from '../errors/missim-param-error'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helper/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
