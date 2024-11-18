import classNames from "classnames";
import Cryptr from "cryptr";
import { Terminal } from "lucide-react";
import JsonFormatter from "react-json-formatter";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export interface DecryptProps {
  decryptKey?: string;
  payload?: string;
  json?: string;
  className?: string;
}

export async function Decrypt({
  decryptKey,
  payload,
  json,
  className = "",
  ...props
}: DecryptProps) {
  let decrypted: string | null = null;
  let decryptionError: unknown | null = null;

  try {
    if (decryptKey && payload) {
      const cryptr = new Cryptr(decryptKey);
      decrypted = cryptr.decrypt(payload);
    }
  } catch (error: unknown) {
    decryptionError = error;
  }

  const jsonStyle = {
    propertyStyle: { color: "red" },
    stringStyle: { color: "green" },
    numberStyle: { color: "darkorange" },
  };

  return (
    <div
      className={classNames(
        "flex flex-col gap-12 w-full min-h-screen justify-start items-start ~p-3/8",
        className
      )}
      {...props}
    >
      {(!decryptKey || !payload) && (
        <div>Missing decryption key or payload</div>
      )}
      {decryptKey && payload && decrypted === null && (
        <div>Payload could not be decrypted</div>
      )}

      {decryptionError !== null && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>
            {Object.entries(decryptionError as Record<string, unknown>)
              .map(([key, value]) => ({
                key,
                value,
              }))
              .map((i) => i.value)
              .join("")}
          </AlertDescription>
        </Alert>
      )}

      {decrypted && json === "on" && (
        <div className="json-styles">
          <JsonFormatter json={decrypted} tabWith={4} jsonStyle={jsonStyle} />
        </div>
      )}

      {decrypted && json !== "on" && (
        <pre className="font-mono max-w-[50%] whitespace-normal">
          {decrypted}
        </pre>
      )}
    </div>
  );
}
