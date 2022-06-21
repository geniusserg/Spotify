import { Controller, Delete, Get, Post } from "@nestjs/common";
import { AlbumService } from "./album.service";

@Controller("/album")
export class AlbumController{
    constructor(private service: AlbumService){}

    @Get()
    getAlbums(){

    }

    @Post()
    postAlbum(){

    }

    @Delete()
    deleteAlbum(){
        
    }
}