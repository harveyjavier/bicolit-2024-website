import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container flex z-20 sticky top-0 justify-between items-center flex-row w-full p-4">
      <Link href="/">
        <Image
          src={siteConfig.ogImage}
          alt="Bicol IT Logo"
          height={70}
          width={70}
          priority
        />
      </Link>

      <div className="flex items-center justify-between gap-5 mr-2">
        {siteConfig.links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="text-sm font-normal"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
