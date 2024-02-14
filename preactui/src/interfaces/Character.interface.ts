import { RecordModel } from "pocketbase";

export interface Character extends RecordModel {
  name: string;
  user: string;
}
