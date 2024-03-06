import { ObjectId } from "mongoose";

export interface DTO {
    id: ObjectId
    symbol: String;
    value: Number;
    when: Date;
}