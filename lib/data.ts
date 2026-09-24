import {Product} from '@/types/product';

export const categories=[
 {slug:'developers-engineers',name:'Developers & Engineers',emoji:'💻'},
 {slug:'gaming-anime',name:'Gaming & Anime',emoji:'🎮'},
 {slug:'memes',name:'Memes',emoji:'😂'},
 {slug:'cars',name:'Cars',emoji:'🏎️'},
 {slug:'packs',name:'Sticker Packs',emoji:'📦'}
];

const img=(seed:string)=>`https://images.unsplash.com/${seed}?auto=format&fit=crop&w=900&q=85`;
export const products:Product[]=[
 {id:'1',slug:'code-never-sleeps',name:'Code Never Sleeps',description:'A crisp die-cut vinyl sticker for laptops and setups.',category:'developers-engineers',price:75,rating:4.9,reviews:38,tags:['developer','vinyl','die-cut'],image:img('photo-1515879218367-8466d910aaa4'),images:[img('photo-1515879218367-8466d910aaa4')],featured:true},
 {id:'2',slug:'pixel-quest',name:'Pixel Quest',description:'Retro gaming energy with a premium waterproof finish.',category:'gaming-anime',price:80,rating:4.8,reviews:27,tags:['gaming','retro'],image:img('photo-1542751371-adc38448a05e'),images:[img('photo-1542751371-adc38448a05e')],featured:true,new:true},
 {id:'3',slug:'turbo-mode',name:'Turbo Mode',description:'A bold car-culture sticker made for toolboxes and cars.',category:'cars',price:70,rating:4.8,reviews:19,tags:['cars','turbo'],image:img('photo-1503736334956-4c8f8e92946d'),images:[img('photo-1503736334956-4c8f8e92946d')],featured:true},
 {id:'4',slug:'404-coffee',name:'404: Coffee Required',description:'For developers powered by caffeine.',category:'developers-engineers',price:65,rating:4.7,reviews:15,tags:['meme','developer'],image:img('photo-1498050108023-c5249f4df085'),images:[img('photo-1498050108023-c5249f4df085')],new:true},
 {id:'5',slug:'anime-energy',name:'Anime Energy',description:'Original anime-inspired aesthetic without using copyrighted character art.',category:'gaming-anime',price:85,rating:4.9,reviews:41,tags:['anime','energy'],image:img('photo-1578632767115-351597cf2477'),images:[img('photo-1578632767115-351597cf2477')]},
 {id:'6',slug:'weekend-driver',name:'Weekend Driver',description:'Minimal motorsport-style vinyl.',category:'cars',price:72,rating:4.8,reviews:22,tags:['car','motorsport'],image:img('photo-1552519507-da3b142c6e3d'),images:[img('photo-1552519507-da3b142c6e3d')]},
 {id:'7',slug:'brain-buffering',name:'Brain Buffering',description:'A clean meme sticker for notebooks and laptops.',category:'memes',price:60,rating:4.6,reviews:12,tags:['meme'],image:img('photo-1516321318423-f06f85e504b3'),images:[img('photo-1516321318423-f06f85e504b3')],new:true},
 {id:'8',slug:'setup-essentials',name:'Setup Essentials Pack',description:'A curated 10-piece setup pack.',category:'packs',price:499,oldPrice:650,rating:5,reviews:54,tags:['pack','setup'],image:img('photo-1593642532973-d31b6557fa68'),images:[img('photo-1593642532973-d31b6557fa68')],featured:true}
];
export const getProduct=(slug:string)=>products.find(p=>p.slug===slug);
