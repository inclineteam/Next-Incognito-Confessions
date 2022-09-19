import type { NextPage } from "next";
import { AuthLayout } from "../components/auth-layout";
import { getCsrfToken, getProviders } from "next-auth/react";
import React from "react";

const VerifyRequest: NextPage = () => {
  return (
    <AuthLayout title="Check your email">
      <div className="flex h-[10rem] justify-center p-8">
        <p className="p-5 text-white">
          Check your email for a link to sign in.
        </p>
      </div>
    </AuthLayout>
  );
};

export default VerifyRequest;
