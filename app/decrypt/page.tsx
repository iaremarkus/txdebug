import { Decrypt } from "@/components/Decrypt";
import { ScrollArea } from "@/components/ui/scroll-area";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function Payload(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;

  return (
    <div className="w-full min-h-screen">
      <ScrollArea className="h-screen w-full">
        <Decrypt
          decryptKey={searchParams.decryptKey}
          payload={searchParams.payload}
          json={searchParams.json}
        />
      </ScrollArea>
    </div>
  );
}
