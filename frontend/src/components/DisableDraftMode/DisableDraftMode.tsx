"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { disableDraftMode } from "@/app/actions";

export function DisableDraftMode() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDisable = () => {
    startTransition(async () => {
      await disableDraftMode();
      router.refresh();
    });
  };

  return (
    <button
      type="button"
      onClick={handleDisable}
      disabled={isPending}
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: 50,
      }}
    >
      {isPending ? "Disabling..." : "Disable Draft Mode"}
    </button>
  );
}
