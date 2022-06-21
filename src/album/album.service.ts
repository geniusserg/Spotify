import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Album, AlbumDocument } from "./schemas/album.schemas";

@Injectable()
export class AlbumService{
    constructor(@Inject(Album.name) private albumModel: Model<AlbumDocument>){}

    getAlbum(){
        return "Album"
    }
}