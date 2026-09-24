export type Finish='matte'|'glossy';
export type StickerType='single'|'sheet-a4'|'sheet-a5';
export type Product={id:string;slug:string;name:string;description:string;category:string;price:number;oldPrice?:number;rating:number;reviews:number;tags:string[];image:string;images:string[];featured?:boolean;new?:boolean};
