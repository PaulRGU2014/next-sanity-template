/**
 * Standalone Sanity Studio configuration for deploying the admin backend separately.
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";
import { dashboardTool } from "@sanity/dashboard";
import { Logo_BW } from "./public/Logo_BW";
import { presentationTool } from "sanity/presentation";
import { thTHLocale } from "@sanity/locale-th-th";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { codeInput } from "@sanity/code-input";
import { dashboardConfig } from "./src/sanity/dashboardConfig";

export default defineConfig({
  basePath: "/", // served at root of standalone backend
  projectId,
  dataset,
  title: "รักษาความปลอดภัย เอราวัณ แอดมิน",
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  icon: Logo_BW,
  schema,
  plugins: ((isProd) => {
    const base = [
      thTHLocale(),
      structureTool({
        title: "โครงสร้าง",
        structure: (S) =>
          S.list()
            .id("main-structure")
            .title("เมนูหลัก")
            .items([
              S.listItem()
                .id("menu")
                .title("เมนู")
                .child(S.document().schemaType("header").documentId("header")),
              S.listItem()
                .id("pages")
                .title("หน้าเว็บ")
                .child(
                  S.documentTypeList("pages")
                    .title("หน้าเว็บ")
                    .child((documentId: string) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType("pages")
                        .views([S.view.form()])
                    )
                ),
              S.listItem()
                .id("footer")
                .title("ส่วนท้าย")
                .child(S.document().schemaType("footer").documentId("footer")),
            ]),
      }),
      dashboardTool({
        ...dashboardConfig,
        title: "แดชบอร์ด",
      }),
      // Vision is for querying with GROQ from inside the Studio
      // https://www.sanity.io/docs/the-vision-plugin
      visionTool({ defaultApiVersion: apiVersion, title: "วิชัน" }),
      media({ title: "มีเดีย" }),
      codeInput(),
    ];

    if (isProd) {
      base.push(
        presentationTool({
          previewUrl: {
            origin:
              process.env.SANITY_STUDIO_PREVIEW_ORIGIN ||
              process.env.NEXT_PUBLIC_SITE_URL ||
              (typeof window !== "undefined" ? window.location.origin : undefined),
            preview: "/",
            previewMode: {
              enable: "/api/draft-mode/enable",
              disable: "/api/draft-mode/disable",
            },
          },
        })
      );
    }

    return base;
  })(process.env.NODE_ENV === "production"),
});
