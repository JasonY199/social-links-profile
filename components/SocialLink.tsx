interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function SocialLink({ href, children }: SocialLinkProps) {
  return (
    <a href={href} className="block bg-grey-700">
      {children}
    </a>
  );
}
