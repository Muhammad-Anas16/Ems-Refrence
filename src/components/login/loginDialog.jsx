import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { IpSchema } from "../schema/schemas";

const LoginDialog = ({ open, onOpenChange, onSubmit: onSubmitProp }) => {
  const [parts, setParts] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);

  const inputRefs = useRef([]);

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(IpSchema),
    defaultValues: {
      ip: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1500);
      });

      await onSubmitProp?.(data.ip);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (index, value) => {
    if (isLoading) return;

    const valueOnly = value.replace(/\D/g, "").slice(0, 3);

    const nextParts = [...parts];
    nextParts[index] = valueOnly;

    setParts(nextParts);

    const ip = nextParts.join(".");

    setValue("ip", ip, {
      shouldValidate: true,
      shouldDirty: true,
    });

    if (valueOnly.length === 3 && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (isLoading) return;

    if (event.key === "Backspace" && !parts[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < 3) {
      event.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (event) => {
    if (isLoading) return;

    const pasted = event.clipboardData.getData("text").trim();

    if (!/^\d{1,3}(\.\d{1,3}){3}$/.test(pasted)) {
      return;
    }

    event.preventDefault();

    const nextParts = pasted.split(".");

    setParts(nextParts);

    setValue("ip", pasted, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleClose = () => {
    if (isLoading) return;

    setParts(["", "", "", ""]);

    reset({
      ip: "",
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="
          w-[calc(100%-2rem)]
          max-w-md
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-[#0b1017]/95
          p-0
          text-white
          shadow-2xl
          backdrop-blur-2xl
          [&>button]:text-white/50
          [&>button:hover]:text-white
        "
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 sm:p-7">
            <DialogHeader className="space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                {isLoading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-cyan-300/30 border-t-cyan-300" />
                ) : (
                  <div className="h-5 w-5 rounded-full border-2 border-cyan-300" />
                )}
              </div>

              <div className="space-y-1 text-center">
                <DialogTitle className="text-xl font-semibold">
                  {isLoading ? "Authenticating..." : "IP Address Login"}
                </DialogTitle>

                <DialogDescription className="text-sm text-white/45">
                  {isLoading
                    ? "Verifying your IP address. Please wait..."
                    : "Enter your IPv4 address to continue."}
                </DialogDescription>
              </div>
            </DialogHeader>

            <div className="mt-7 space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium text-white/80">
                  IP Address
                </Label>

                <span className="text-[11px] uppercase tracking-wider text-white/30">
                  IPv4
                </span>
              </div>

              <input type="hidden" {...register("ip")} />

              <div
                className={`rounded-xl border border-white/10 bg-white/[0.03] p-4 ${
                  isLoading ? "opacity-50" : ""
                }`}
                onPaste={handlePaste}
              >
                <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                  {parts.map((part, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1.5 sm:gap-2"
                    >
                      <Input
                        ref={(element) => {
                          inputRefs.current[index] = element;
                        }}
                        value={part}
                        onChange={(event) =>
                          handleChange(index, event.target.value)
                        }
                        onKeyDown={(event) => handleKeyDown(index, event)}
                        disabled={isLoading}
                        inputMode="numeric"
                        autoComplete="off"
                        maxLength={3}
                        placeholder="000"
                        aria-label={`IPv4 octet ${index + 1}`}
                        className="
                          h-12
                          w-14
                          rounded-lg
                          border-white/10
                          bg-black/20
                          px-1
                          text-center
                          text-base
                          font-semibold
                          text-white
                          placeholder:text-white/20
                          focus-visible:border-cyan-400/60
                          focus-visible:ring-2
                          focus-visible:ring-cyan-400/10
                          focus-visible:ring-offset-0
                        "
                      />

                      {index < 3 && (
                        <span className="text-lg font-semibold text-white/30">
                          .
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {errors.ip ? (
                <p className="text-xs font-medium text-red-400">
                  {errors.ip.message}
                </p>
              ) : isLoading ? (
                <p className="text-center text-xs text-cyan-300/70">
                  Checking authorization...
                </p>
              ) : (
                <p className="text-xs text-white/30">Example: 192.168.1.57</p>
              )}
            </div>

            {/* <DialogFooter className="mt-7 bg-transparent"> */}
              <Button
                type="submit"
                disabled={isLoading}
                className="mt-4
                  h-11
                  w-full
                  rounded-lg
                  bg-cyan-500
                  font-medium
                  text-slate-950
                  shadow-lg
                  shadow-cyan-500/10
                  transition-all
                  hover:bg-cyan-400
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                  sm:w-full
                "
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950" />
                    Authenticating...
                  </span>
                ) : (
                  "Login"
                )}
              </Button>
            {/* </DialogFooter> */}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
