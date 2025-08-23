import fs from "fs/promises";
import path from "path";
import { BuildersList } from "~~/components/builders/BuildersList";

async function BuildersPage() {
  const buildersPath = path.join(process.cwd(), "app", "builders");
  const files = await fs.readdir(buildersPath, { withFileTypes: true });
  const buildersPages = files.filter(file => file.isDirectory()).map(dir => dir.name);

  return (
    <div className="flex justify-center align-middle flex-col ">
      <h1 className="text-center my-5 text-xl font-bold">Batch 19 Builders</h1>
      <BuildersList buildersPages={buildersPages} />
    </div>
  );
}

export default BuildersPage;
