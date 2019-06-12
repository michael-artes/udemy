import { Response } from "@angular/http";
import { Observable } from "rxjs";

export class ErrorHandler {

    static handlerError(error : Response | any){

        let errorMessage: string;

        if (error instanceof Response) {
            errorMessage = `Error ${error.status} ao acessar a url ${error.url} - ${error.statusText}`;
        } else {
            errorMessage = error.toString();
        }

        console.log(errorMessage);

        return Observable.throw(errorMessage);
    }
}