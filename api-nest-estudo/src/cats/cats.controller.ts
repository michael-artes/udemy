import { Controller, Get, Req, Post, HttpCode, Header, Param } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('cats')
export class CatsController {

    //status nos retornos
    @Post('create2')
    @HttpCode(204)
    create2() {
        return 'This action adds a new cat';
    }

    @Post()
    create(): string {
        return 'This action adds a new cat';
    }

    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    //rodas baseadas em padroes
    @Get('ab*cd')
    findAllPadroes(): string {
        return 'This action returns all cats by padroes';
    }

    //cabecalhos especificos
    @Post()
    @Header('Cache-Control', 'none')
    create4() {
        return 'This action adds a new cat';
    }
    
    @Get('observable')
    findAll3(): Observable<any[]> {
      return of([]);
    }    

    @Get('async')
    async findAllAsync(): Promise<any[]> {
      return [];
    }  

    //parametros nas rodas
    @Get(':id')
    findOne(@Param() params): string {
      console.log(params.id);
      return `This action returns a #${params.id} cat`;
    }    


    //outra forma de passar os parametros
    @Get(':id')
    findOne2(@Param('id') id): string {
      return `This action returns a #${id} cat`;
    }

}