import { Control } from 'angular2/common'

import { validateEmail } from './email/email.validator'
import { validateUnique } from './unique/unique.validator'

export module Validators {
    export var email = validateEmail
    export var unique = validateUnique
}
