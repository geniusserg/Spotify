import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import { Track } from "./track.schema";
import * as mongoose from "mongoose";

export type CommentDocument = Comment & Document;


@Schema()
export class Comment{
    @Prop()
    author: string;
    @Prop()
    text: string;
    @Prop()
    likes: string;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Track'})
    comment: Track;
}

export const commentSchema = SchemaFactory.createForClass(Comment)
