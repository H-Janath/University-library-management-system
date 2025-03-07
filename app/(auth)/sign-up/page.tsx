'use client'

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validation";
import React from "react";

const page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        fullName: "",
        email: "",
        universityId: 0,
        password: "",
        universityCard: "",
      }}
      onSubmit={()=>{}}

    />
  );
};

export default page;
