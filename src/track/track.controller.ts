import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
import { CreateTrackDto } from "./dto/create-track.dto";

@Controller("/tracks")
export class TrackController{
    constructor(private controller: TrackController){}

    @Post()
    async create(@Body() dto: CreateTrackDto){
        return this.controller.create(dto)
    }

    @Get()
    async getAll(){
        return this.controller.getAll()
    }

    @Get("/one")
    async getOne(){


    }

    @Delete()
    async delete(){
        
    }
}