
import { type SchemaTypeDefinition } from 'sanity'
//importHere
	import { processFlow } from './processFlow';
	import { titileBullets } from './titileBullets';
	import { iconCtAs } from './iconCtAs';
	import { twoColumnSlider } from './twoColumnSlider.schema';
	import { richTextComp } from './richTextComp.schema';
	import { gridLinksCarousel } from './gridLinksCarousel.schema';
	import { fullPageHero } from './fullPageHero.schema';
	import { ctasCarousel } from './ctasCarousel.schema';
	import { ctaTitleImg } from './ctaTitleImg.schema';
import {galleryCollage} from './galleryCollage.schema'
import {pages} from './pages'
import {footer} from './footer.schema'
import {header} from './header.schema'
import {hardcodedBlocks} from './hardcodedBlocks'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    //associateHere
processFlow,
titileBullets,
iconCtAs,
twoColumnSlider,
richTextComp,
gridLinksCarousel,
fullPageHero,
ctasCarousel,
ctaTitleImg,
		hardcodedBlocks,
		 footer, 
		 header, 
		 pages, 
		 galleryCollage, 
    ],
}
