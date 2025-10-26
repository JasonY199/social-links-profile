interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function SocialLink({ href, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="transition-colors block bg-grey-700 p-3 text-center rounded-lg text-sm font-bold leading-normal w-full cursor-pointer hover:bg-brand-green hover:text-black"
    >
      {children}
    </a>
  );
}
