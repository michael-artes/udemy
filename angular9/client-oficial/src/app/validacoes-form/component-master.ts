export abstract class ComponetMaster {

    public sucesso = false;
    public errors: string[] = [];

    ComponetMaster(){}


    hideErros(){
        this.sucesso = true;
    }

    showErros(errors: Array<string>){
        this.sucesso = false;
        this.errors.push(...errors);
    }
}