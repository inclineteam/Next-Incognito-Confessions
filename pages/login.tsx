import type { NextPage } from "next";
import { AuthLayout } from "../components/auth-layout";
import { getCsrfToken, getProviders, getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { AppProviders } from "next-auth/providers";
import { signIn } from "next-auth/react";
import { ProviderButton } from "../components/forms/providerButton";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

interface LoginProps {
  providers: AppProviders;
  csrfToken: string;
}

const Login: NextPage<LoginProps> = ({ providers, csrfToken }) => {
  return (
    <>
      <AuthLayout title="Log In">
        <form
          method="post"
          action="/api/auth/signin/email"
          className="flex flex-col items-center justify-center px-8 pt-5"
        >
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div className="group mt-2 mb-5 flex w-full items-center space-x-4 rounded bg-zinc-700/50 px-4 py-2 outline outline-2 outline-transparent duration-150 focus-within:outline-sky-600">
            <EnvelopeIcon className="h-4 w-4 text-white/50 group-focus-within:text-white/80" />
            {/* <i className="ai-envelope text-white/50 group-focus-within:text-white/80"></i> */}
            <input
              type="email"
              id="email"
              name="email"
              required
              className="flex-1 bg-transparent p-0 text-white/80 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-[50%] rounded border-t border-sky-500 bg-sky-600 py-3 px-4 font-medium text-white duration-150"
          >
            Continue
          </button>
        </form>
        <div className="px-8 pb-8">
          <div className="relative my-10 border-t border-zinc-700">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-800 p-2 text-sm text-zinc-500">
              OR
            </span>
          </div>
          <div className="space-y-4">
            {Object.values(providers).map((provider) => {
              if (provider.id != "email") {
                return (
                  <div key={provider.name}>
                    <ProviderButton provider={provider.id}>
                      <i
                        className={`ai-${provider.id}-fill justify-self-end text-lg ${provider.id}`}
                      ></i>
                      <span>Continue with {provider.name}</span>
                    </ProviderButton>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/home",
      },
    };
  }

  return {
    props: {
      providers,
      csrfToken,
    },
  };
}
