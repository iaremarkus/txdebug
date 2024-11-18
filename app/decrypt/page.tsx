import { Decrypt } from "@/components/Decrypt";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Payload({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
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
