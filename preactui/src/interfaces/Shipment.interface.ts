import { RecordModel } from "pocketbase";

export interface Shipment extends RecordModel {
  item: string;
  quantity: number;
  wowheadlink: string;
}
