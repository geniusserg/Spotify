import {Controller, Get} from "@nestjs/common";
import { AppService } from "./app.service";

@Controller('/api')
export class AppController{

    constructor(private service: AppService){}

    @Get()
    getAllUsers(){
        return this.service.getUsers()
    }
}