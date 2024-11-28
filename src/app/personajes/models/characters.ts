import { Links } from "./links";
import { Personaje } from "./personaje";
import { Meta } from "./meta";
export interface Characters {
    items: Personaje[];
    meta: Meta;
    links: Links;
}
