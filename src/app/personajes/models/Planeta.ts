import { Personaje } from "./personaje";

export interface Planeta {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: string | null;
    personaje: Personaje[];
  }