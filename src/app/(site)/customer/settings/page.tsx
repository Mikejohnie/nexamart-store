"use client";

import { useState } from "react";
import SettingsSidebar from "./_components/SettingsSidebar";
import AccountSection from "./_components/AccountSection";
// later:
// import AddressSection from "./_components/AddressSection";
// import WalletSection from "./_components/WalletSection";

export default function SettingsPage() {
  const [active, setActive] = useState("account");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto flex gap-8 px-4 py-8">
        {/* SIDEBAR */}
        <SettingsSidebar active={active} onChange={setActive} />

        {/* CONTENT */}
        <main className="flex-1 space-y-6">
          {active === "account" && <AccountSection />}
          {/* {active === "addresses" && <AddressSection />} */}
          {/* {active === "wallet" && <WalletSection />} */}
        </main>
      </div>
    </div>
  );
}
