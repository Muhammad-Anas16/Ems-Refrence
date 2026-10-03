import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { IpSchema } from "../schema/schemas";

const LoginDialog = ({ open, onOpenChange, onSubmit: onSubmitProp }) => {
  const [parts, setParts] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(IpSchema),
    defaultValues: {
      ip: "",
    },
  });

  const handleChange = (index, value) => {
    const valueOnly = value.replace(/\D/g, "").slice(0, 3);

    const newParts = [...parts];
    newParts[index] = valueOnly;

    setParts(newParts);

    const ip = newParts.join(".");

    setValue("ip", ip, {
      shouldValidate: false,
      shouldDirty: true,
    });

    if (valueOnly.length === 3 && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !parts[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmit = (data) => {
    // Sirf IP parent ko return/pass hogi
    onSubmitProp?.(data.ip);
  };

  const handleClose = () => {
    setParts(["", "", "", ""]);

    setValue("ip", "", {
      shouldValidate: false,
      shouldDirty: false,
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>IP Address Login</DialogTitle>

            <DialogDescription>
              Enter your IPv4 address to continue.
            </DialogDescription>
          </DialogHeader>

          {/* Hidden RHF field */}
          <input type="hidden" {...register("ip")} />

          <div className="mt-6">
            <Label>IPv4 Address</Label>

            <div className="mt-3 flex items-center justify-center gap-2">
              {parts.map((part, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    ref={(element) => {
                      inputRefs.current[index] = element;
                    }}
                    value={part}
                    onChange={(event) =>
                      handleChange(index, event.target.value)
                    }
                    onKeyDown={(event) => handleKeyDown(index, event)}
                    inputMode="numeric"
                    autoComplete="off"
                    maxLength={3}
                    className="h-11 w-14 text-center text-lg"
                  />

                  {index < 3 && <span className="text-lg">.</span>}
                </div>
              ))}
            </div>

            {errors.ip && (
              <p className="mt-2 text-center text-sm text-red-500">
                {errors.ip.message}
              </p>
            )}

            <p className="mt-2 text-center text-xs text-muted-foreground">
              Example: 192.168.1.57
            </p>
          </div>

          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>

            <Button type="submit">Login</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
