import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type TrackDocument = Track & Document;

@Schema()
export class Track{
    @Prop()
    name: string;

    @Prop()
    picture: string;
    @Prop()
    artist: string;
    @Prop()
    audio: string;
    @Prop()
    text: string;
    @Prop()
    listens: string;
    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]})
    comments: Comment[];
    @Prop()
    likes: string;
    
}

export const trackSchema = SchemaFactory.createForClass(Track)