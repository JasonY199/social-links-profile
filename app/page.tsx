import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen p-6">
      <article className="flex flex-col gap-6 items-center rounded-xl bg-grey-800 p-6 text-brand-white max-w-[327px]">
        <Image
          src="/avatar-jessica.jpeg"
          alt="Jessica Randall"
          width={88}
          height={88}
          className="rounded-full height-[88px] w-[88px]"
        />
        <div className="text-center">
          <h1 className="text-2xl leading-normal font-semibold">
            Jessica Randall
          </h1>
          <p className="text-sm font-bold leading-normal text-brand-green">
            London, United Kingdom
          </p>
        </div>
        <p className="text-sm leading-normal">
          "Front-end developer and avid reader."
        </p>
        <ul aria-label="Social Media links" className="text-center">
          <li>GitHub</li>
          <li>Frontend Mentor</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </article>
    </main>
  );
}
