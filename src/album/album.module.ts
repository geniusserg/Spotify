import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AlbumController } from "./album.controler";
import { AlbumService } from "./album.service";
import { Album, albumSchema } from "./schemas/album.schemas";

@Module(
    {
        imports:[
            MongooseModule.forFeature([{name: Album.name, schema: albumSchema}])
        ],
        providers: [AlbumService],
        controllers: [AlbumController]
    }
)
export class AppModule{
    
}