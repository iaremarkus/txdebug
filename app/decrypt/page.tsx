import Cryptr from "cryptr";

export default function Payload({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { key, payload } = searchParams;

  if (!key || !payload) {
    return <div>Missing key or payload</div>;
  }

  let decrypted: string | null = null;
  let decryptionError: Error | null = null;

  try {
    const cryptr = new Cryptr(key);
    decrypted = cryptr.decrypt(payload);
  } catch (error: Error) {
    decryptionError = error;
  }

  return (
    <div className="flex flex-col gap-12 w-full min-h-screen justify-center items-center">
      {decrypted === null && <div>Payload could not be decrypted</div>}

      <pre className="max-w-4xl">
        {JSON.stringify(decryptionError, null, 2)}
      </pre>
      <pre className="max-w-4xl">{JSON.stringify(decrypted, null, 2)}</pre>
    </div>
  );
}
