interface EmailLinkProps {
  address: string;
}

export default function EmailLink({ address }: EmailLinkProps) {
  return (
    <a
      href={`mailto:${address}`}
      className="underline hover:opacity-75"
      style={{ color: '#B9BCB5' }}
    >
      {address}
    </a>
  );
}
