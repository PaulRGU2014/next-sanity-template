import { defineField, defineType } from "sanity";

export const pages = defineType({
  name: "pages",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "page_title",
      type: "string",
    }),
    defineField({
      name: "page_url",
      type: "slug",
    }),
    // defineField({
    //   name: 'menu',
    //   title: 'Menu',
    //   type: 'reference',
    //   to: [{type: 'header'}]
    // }),
    //  Activate when we want different menu per page
    defineField({
      name: "components",
      type: "array",
      of: [
        //associateHere
	{ type : 'processFlow' },
	{ type : 'titileBullets' },
	{ type : 'iconCtAs' },
        { type: "ctaTitleImg" },
        { type: "ctasCarousel" },
        { type: "fullPageHero" },
        { type: "galleryCollage" },
        { type: "gridLinksCarousel" },
        { type: "hardcodedBlocks" },
        { type: "richTextComp" },
        { type: "twoColumnSlider" },
      ],
      options: {
        insertMenu: {
          filter: true,
          showIcons: true,
          groups: [
            {
              name: "hero",
              title: "ส่วนฮีโร่",
              of: [
                //heroComponent                
                "fullPageHero",
              ],
            },
            {
              name: "cta",
              title: "ส่วน CTA",
              of: [
                //ctaComponent
	"iconCtAs",
                "ctasCarousel",
                "ctaTitleImg",
              ],
            },
            {
              name: "carousel",
              title: "คารูเซล",
              of: [
                //carouselComponent
                "ctasCarousel",
                "gridLinksCarousel",
              ],
            },
            {
              name: "media",
              title: "สื่อและรูปภาพ",
              of: [
                //mediaComponent
	"processFlow",
                "ctaTitleImg",
                "galleryCollage",
                "twoColumnSlider",
              ],
            },
            {
              name: "other",
              title: "อื่นๆ",
              of: [
                //otherComponent
	"titileBullets",
                "hardcodedBlocks",
                "richTextComp",
              ],
            },
          ],
          views: [{ name: "list" }, { name: "grid" }],
        },
      },
    }),
    // defineField({
    //   name: 'footer',
    //   title: 'Footer',
    //   type: 'reference',
    //   to: [{type: 'footer'}]
    // }),
    //  Activate when we want different footer per page
  ],
});
