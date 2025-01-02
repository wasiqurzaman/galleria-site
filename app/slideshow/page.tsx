import { promises as fs } from "fs";
import Sildes from "../components/Sildes";

export default async function page() {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const data: ImageData[] = JSON.parse(file);
  return (
    <section className="container mx-auto xl:px-0">
      <Sildes images={data} initial={0} />
    </section>
  );
}
