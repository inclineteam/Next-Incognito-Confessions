import React from "react";
import { signIn, SignInResponse } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface ProviderButtonProps {
  provider: string;
  children: React.ReactNode;
}

export const ProviderButton = ({ provider, children }: ProviderButtonProps) => {
  const handleSignIn = () => {
    signIn(provider, { callbackUrl: "/home" });
  };

  // handleSignIn();
  return (
    <div className="flex w-full grid-cols-[0.9fr_1.1fr] items-center justify-center space-x-4 rounded border border-zinc-700/50 bg-transparent py-3 font-medium text-zinc-300 hover:bg-zinc-700/30">
      <button
        className="flex items-center justify-center gap-2"
        type="submit"
        onClick={handleSignIn}
      >
        {children}
      </button>
    </div>
  );
};
