"use client";

import classNames from "classnames";
import { Home, Unlock } from "lucide-react";
import NextForm from "next/form";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export interface FormProps {
  className?: string;
}

export function Form({ className = "", ...props }: FormProps) {
  const searchParams = useSearchParams();
  const path = usePathname();

  const decryptKey = searchParams.get("decryptKey") || undefined;
  const payload = searchParams.get("payload") || undefined;
  const json = searchParams.get("json") || undefined;

  return (
    <NextForm
      action="/decrypt"
      className={classNames(
        "flex flex-col ~gap-4/8 w-full max-w-xl ~p-3/8 col-span-1",
        "bg-white border border-slate-200 shadow-2xl",
        "dark:bg-slate-700 dark:border-slate-600",
        className
      )}
      {...props}
    >
      <h2 className="~text-xl/2xl font-bold">Enter encrypted payload</h2>

      <div className="flex flex-col gap-4">
        <Input
          required
          placeholder="Enter decryption key"
          type="text"
          name="decryptKey"
          className="font-mono dark:border-slate-500"
          autoComplete="off"
          defaultValue={decryptKey}
        />

        <Textarea
          required
          placeholder="Encrypted data"
          name="payload"
          className="font-mono dark:border-slate-500 h-60"
          defaultValue={payload}
        />

        <div className="items-top flex space-x-2">
          <Checkbox id="json" name="json" defaultChecked={json === "on"} />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="json"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Show the Payload as JSON?
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        {path !== "/" && (
          <Button
            type="submit"
            variant="outline"
            className="uppercase font-bold"
            asChild
          >
            <Link href="/">
              <Home /> Home
            </Link>
          </Button>
        )}

        <Button type="submit" className="uppercase font-bold">
          <Unlock />
          Decrypt
        </Button>
      </div>
    </NextForm>
  );
}
