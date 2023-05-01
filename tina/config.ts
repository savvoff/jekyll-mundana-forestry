import { defineConfig } from "tinacms";
import { postFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "0ffd7e0e-86c7-492b-a01b-efc15d565662", // Get this from tina.io
  token: "9ae51c823e39767c79931519b320e092c021c8df", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "jekyll-mundana-forestry/admin",
    publicFolder: ".",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: ".",
    },
  },
  schema: {
    collections: [
      {
        format: "yml",
        label: "Configuration",
        name: "configuration",
        path: ".",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_config",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
    ],
  },
});
