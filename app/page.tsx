import { KebabClient } from "@/components/KebabClient";
import { bodyHtml } from "@/lib/body.html";

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <KebabClient />
    </>
  );
}
