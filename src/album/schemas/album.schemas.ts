import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import { Track } from "../../track/schemas/track.schema";
import * as mongoose from "mongoose";

export type AlbumDocument = Album & Document;


@Schema()
export class Album{
    @Prop()
    author: string;
    @Prop()
    name: string;
    @Prop()
    likes: string;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Track'})
    track: Track[];
}

export const albumSchema = SchemaFactory.createForClass(Album)
