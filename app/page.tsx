import Image from "next/image";
import SocialLink from "@/components/SocialLink";

export default function Home() {
  return (
    <main className="w-full max-w-[327px]">
      <article className="flex flex-col gap-6 items-center rounded-xl bg-grey-800 p-6 text-brand-white">
        <Image
          src="/avatar-jessica.jpeg"
          alt="Jessica Randall"
          width={88}
          height={88}
          className="rounded-full"
        />
        <div className="text-center">
          <h1 className="text-2xl leading-normal font-semibold">
            Jessica Randall
          </h1>
          <p className="text-sm font-bold leading-normal text-brand-green">
            London, United Kingdom
          </p>
        </div>
        <p className="text-sm leading-normal text-center">
          "Front-end developer and avid reader."
        </p>
        <nav aria-label="Social Media links" className="w-full">
          <ul className="flex flex-col gap-4">
            <li>
              <SocialLink href="https://github.com">GitHub</SocialLink>
            </li>
            <li>
              <SocialLink href="https://frontendmentor.io">
                Frontend Mentor
              </SocialLink>
            </li>
            <li>
              <SocialLink href="https://linkedin.com">LinkedIn</SocialLink>
            </li>
            <li>
              <SocialLink href="https://twitter.com">Twitter</SocialLink>
            </li>
            <li>
              <SocialLink href="https://instagram.com">Instagram</SocialLink>
            </li>
          </ul>
        </nav>
      </article>
    </main>
  );
}
