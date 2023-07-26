import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { WatchService } from "./watch.service"

export class User {

    public name: string = ''
    public email: string = ''
    public phone: string = ''
    public gender: boolean = true
    public topic: string = ''
    public date: string = ''
}

export class Employee {
    employeeName: string = ''
    genderId: GenderId = new GenderId()
    email: string = ''
    dateOfBirth: Date = new Date()
    dateOfJoining: Date = new Date()
    age: number = 0

}
export class GenderId {
    GenderId: number = 0
    name: string = ''
}


export const httpInterceptorProvider=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:WatchService,
        multi:true
    }
];