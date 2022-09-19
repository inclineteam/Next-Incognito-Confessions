import type { NextPage } from "next";
import { AuthLayout } from "../components/auth-layout";
import { getCsrfToken, getProviders } from "next-auth/react";
import React from "react";
import { useRouter } from "next/router";

const VerifyRequest: NextPage = () => {
  const router = useRouter();
  const params = router.query;

  return (
    <AuthLayout title="Error">
      <div className="flex h-[10rem] justify-center p-8">
        {params.error === "AccessDenied" ? (
          <p className="p-5 text-white">Access Denied</p>
        ) : params.error === "Verification" ? (
          <p className="p-5 text-white">The sign in link is no longer valid</p>
        ) : (
          <p>Something went wrong</p>
        )}
      </div>
    </AuthLayout>
  );
};

export default VerifyRequest;
