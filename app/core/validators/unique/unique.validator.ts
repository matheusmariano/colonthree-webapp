import { Control } from 'angular2/common'
import { Observable } from 'rxjs/Observable'

export interface Unique {
    available: boolean
}

export interface UniqueService {
    getUnique(value: any): Observable<Unique>
}

export function validateUnique(service: UniqueService) {
    return (control: Control): Promise<Unique> => {
        return new Promise((resolve) => {
            service.getUnique(control.value)
                .subscribe((unique) => {
                    let error = unique.available ? null : {
                        ctUnique: {
                            available: false
                        }
                    }
                    
                    resolve(error)
                })
        })
    }
}
