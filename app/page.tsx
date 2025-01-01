import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";

type ImageData = {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: {
    image: string;
    name: string;
  };
  images: {
    thumbnail: string;
    hero: {
      small: string;
      large: string;
    };
    gallery: string;
  };
};

const heights = [25, 40, 28, 25, 34, 28, 50, 35, 42, 26, 50, 26, 45, 45, 34];

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const data: ImageData[] = JSON.parse(file);

  console.log(data);
  return (
    <div className="container mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[10px] gap-x-5 gap-y-0 py-5">
        {data.map((item, index) => (
          <li
            key={index}
            className="mt-5 group"
            style={{
              width: "100%",
              height: "auto",
              gridRowEnd: `span ${heights[index]}`,
            }}
          >
            <Link
              href={`photo/${item.name.replaceAll(" ", "-")}`}
              className="w-full h-full relative bg-gradient-to-b from-white to-black"
            >
              <Image
                src={item.images.gallery}
                alt={`Image of ${item.name} by ${item.artist}`}
                width={500}
                height={500}
                style={{ width: "100%", height: "100%" }}
                className="object-cover "
              />
              <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-white/10 to-black/80 group-hover:bg-white/50 transition-all duration-300 "></div>
              <div className="absolute left-[calc(10%)] bottom-[32px] flex flex-col gap-2 w-[85%]">
                <h3 className="heading2 text-white tracking-normal">
                  {item.name}
                </h3>
                <p className="subhead2 text-lightGray font-normal">
                  {item.artist.name}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
