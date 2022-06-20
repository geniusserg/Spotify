import { Module } from "@nestjs/common";
import { TrackController } from "./track.controller";
import { TrackService } from "./track.service";
import {MongooseModule} from "@nestjs/mongoose";
import { Track, trackSchema} from "./schemas/track.schema";
import { commentSchema } from "./schemas/comment.schema";

@Module(
{
    imports: [
        MongooseModule.forFeature([{name: Track.name, schema: trackSchema}]),
        MongooseModule.forFeature([{name: Comment.name, schema: commentSchema}])
    ],
    controllers: [TrackController],
    providers: [TrackService]
}
)
export class TrackModule{


}