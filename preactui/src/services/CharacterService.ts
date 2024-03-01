import { signal } from "@preact/signals";
import PocketBase from "pocketbase";
import { Character } from "../interfaces/Character.interface";

export const loadedCharacters = signal<Character[]>([]);
export const charactersStatus = signal<"pending" | "done" | "error">(null); // todo status setzen

export const loadCharacters = async (pb: PocketBase) => {
  charactersStatus.value = "pending";
  try {
    loadedCharacters.value = await pb
      .collection("characters")
      .getFullList<Character>();
    charactersStatus.value = "done";
  } catch (error) {
    console.error(error);
    charactersStatus.value = "error";
  }
};
