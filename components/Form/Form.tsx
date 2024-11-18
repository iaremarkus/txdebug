import classNames from "classnames";
import NextForm from "next/form";

export interface FormProps {
  className?: string;
}

export async function Form({ className = "", ...props }: FormProps) {
  return (
    <NextForm
      action="/decrypt"
      className={classNames(
        "flex flex-col ~gap-4/8 w-full max-w-xl ~p-3/8 rounded-md",
        "bg-white border border-slate-200 shadow-2xl",
        className
      )}
      {...props}
    >
      <h2 className="~text-xl/2xl font-bold">Enter encrypted payload</h2>

      <div className="flex flex-col gap-4">
        <input
          required
          placeholder="Enter decryption key"
          type="text"
          name="key"
          className={classNames(
            "w-full rounded-md p-2 border border-slate-200 text-xs",
            "font-mono"
          )}
        />
        <textarea
          required
          placeholder="Encrypted data"
          name="payload"
          className={classNames(
            "w-full rounded-md p-2 border border-slate-200 h-60 text-xs",
            "font-mono"
          )}
        />
      </div>

      <button
        className="bg-cyan-300 ~p-2/4 rounded-md uppercase font-bold"
        type="submit"
      >
        Decrypt
      </button>
    </NextForm>
  );
}
