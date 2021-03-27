import{ Location } from './location'

export interface Character {
    "id": number,
    "name": string,
    "status": string,
    "species": string,
    "gender": string,
    "hair": string,
    "alias": [string],
    "origin": Location,
    "abilities": [string],
    "img_url": string
}
