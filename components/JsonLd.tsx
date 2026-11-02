interface JsonLdProps {
  data: object | object[];
}

/**
 * Renders schema.org data as a JSON-LD script in the server-rendered HTML.
 * "<" is escaped so the content cannot close the script tag early.
 */
export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
