import UserForm from "@/components/UserForm";
import UserInfo from "@/components/UserInfo";
import React from "react";

export default function Page() {
  return (
    <div className="text-white">
      <UserInfo />
      <UserForm />
    </div>
  );
}
