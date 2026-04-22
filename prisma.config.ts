import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },

datasource: {
  url: "mysql://root:@localhost:3306/workspace?connection_limit=5&socket_timeout=30", 
},
});
