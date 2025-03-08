import config from './lib/config';
import { defineConfig } from "drizzle-kit";


export default defineConfig({
  schema: "./database/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://library_owner:npg_bS3Zj0nQpqGt@ep-bold-poetry-a11kr6p3-pooler.ap-southeast-1.aws.neon.tech/library?sslmode=require",
  },
});
