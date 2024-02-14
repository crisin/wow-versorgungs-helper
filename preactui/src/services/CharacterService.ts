import { signal } from "@preact/signals";
import PocketBase from "pocketbase";
import { Character } from "../interfaces/Character.interface";

export const loadedCharacters = signal<Character[]>([]);
export const charactersStatus = signal<"pending" | "done" | "errror">(null); // todo status setzen

export const loadCharacters = async (pb: PocketBase) => {
  try {
    loadedCharacters.value = await pb
      .collection("characters")
      .getFullList<Character>();
  } catch (error) {
    console.error(error);
  }
};
