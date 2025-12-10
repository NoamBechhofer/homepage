"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clipboard, RefreshCw } from "feather-icons-react";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const buffer = useRef(new Uint32Array(8));
  const [hash, setHash] = useState<string>();

  function computeSHA256Hash() {
    setHash(undefined);

    crypto.getRandomValues(buffer.current);

    const computeHash = async () => {
      const hashBuffer = await window.crypto.subtle.digest(
        "SHA-256",
        buffer.current.buffer,
      );
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
      setHash(hashHex);
    };

    computeHash();
  }

  useEffect(() => {
    computeSHA256Hash();
  }, []);

  const [clipColor, setClipColor] = useState("");
  const copyhash = () => {
    if (hash) {
      return navigator.clipboard
        .writeText(hash)
        .then(() => {
          setClipColor("green");
          setTimeout(() => {
            setClipColor("");
          }, 1000);
        })
        .catch((_) => {
          setClipColor("red");
          setTimeout(() => {
            setClipColor("");
          }, 1000);
        });
    }
  };

  return (
    <>
      <div className="m-5 text-center">
        <br />
        <span className="text-xl">Your secret is</span>
        <br />
        {!hash ? (
          <>
            Loading...
            <br />
          </>
        ) : (
          <>
            <Card className="mx-auto max-w-lg p-1 font-mono text-2xl text-balance break-all my-3">
              {hash}
            </Card>
            <br />
            <div className="flex justify-center">
              <Button onClick={copyhash} className="m-1 inline-block">
                <Clipboard
                  className="inline-block cursor-pointer"
                  color={clipColor}
                  size={20}
                />
              </Button>{" "}
              <Button onClick={computeSHA256Hash} className="m-1 inline-block">
                <RefreshCw className="inline-block cursor-pointer" size={20} />
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
