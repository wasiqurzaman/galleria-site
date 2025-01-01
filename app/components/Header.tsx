import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto xl:px-0">
      <div className="flex justify-between items-center h-full py-6 border-b border-lightGray">
        <div>
          <Image
            src="/assets/shared/logo.svg"
            alt="logo"
            width={170}
            height={48}
            className="w-[113px] h-[32px] md:w-[170px] md:h-[48px]"
          />
        </div>
        <nav>
          <Link
            href="/slideshow"
            className="link2 sm:link1 uppercase hover:text-black transition-all duration-300"
          >
            Start Slideshow
          </Link>
        </nav>
      </div>
    </header>
  );
}
