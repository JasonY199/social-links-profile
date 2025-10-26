import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen p-6">
      <article className="flex flex-col gap-6 rounded-xl bg-grey-800 p-6 text-brand-white max-w-[327px]">
        <Image
          src="/avatar-jessica.jpeg"
          alt="Jessica Randall"
          width={88}
          height={88}
          className="rounded-full height-[88px] w-[88px]"
        />
        <h1>Jessica Randall</h1>
        <p>London, United Kingdom</p>
        <p>"Front-end developer and avid reader."</p>
        <ul aria-label="Social Media links">
          <li>link</li>
          <li>link</li>
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </article>
    </main>
  );
}
