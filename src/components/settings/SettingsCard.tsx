"use client";

import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function SettingsCard({ title, children }: Props) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-[#3c9ee0]">{title}</h2>
      {children}
    </div>
  );
}
