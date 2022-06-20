import {Injectable} from "@nestjs/common";

@Injectable()
export class AppService{
    getUsers(): String{
        return " ALL USERS "
    }
}