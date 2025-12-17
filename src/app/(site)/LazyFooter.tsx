"use client";

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false,
  loading: () => <div className="h-24 bg-[#232F3E] animate-pulse" />,
});

export default function LazyFooter() {
  return <Footer />;
}
