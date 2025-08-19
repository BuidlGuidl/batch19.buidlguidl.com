import fs from "fs";
import path from "path";

export function getBuilderPages(): string[] {
  // searches the folders under /builders
  const buildersPath = path.join(process.cwd(), "app", "builders");

  const folders = fs.readdirSync(buildersPath).filter(folder => {
    // checks if the folder has a page
    const folderPath = path.join(buildersPath, folder);
    const pagePath = path.join(folderPath, "page.tsx");

    return fs.statSync(folderPath).isDirectory() && fs.existsSync(pagePath);
  });

  return folders;
}

export function getBuilders(): string[] {
  return [];
}
