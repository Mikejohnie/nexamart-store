"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import AccountSection from "./_components/AccountSection";
import AddressSection from "./_components/AddressSection";
import PreferencesSection from "./_components/PreferencesSection";
import SecuritySection from "./_components/SecuritySection";
import SettingsSidebar from "./_components/SettingsSidebar";
import WalletSection from "./_components/WalletSection";
import SettingsMobileNav from "./_components/SettingsMobileNav";

const contentVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export default function SettingsPage() {
  const [active, setActive] = useState("account");

  return (
    <div className="min-h-screen bg-background py-4">
      {/* MOBILE NAV */}
      <SettingsMobileNav active={active} onChange={setActive} />

      <div className="max-w-6xl mx-auto flex gap-8 px-4 py-12">
        {/* DESKTOP SIDEBAR */}
        <SettingsSidebar active={active} onChange={setActive} />

        {/* CONTENT */}
        <main className="flex-1 space-y-6 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="space-y-6"
            >
              {active === "account" && <AccountSection />}
              {active === "addresses" && <AddressSection />}
              {active === "wallet" && <WalletSection />}
              {active === "preferences" && <PreferencesSection />}
              {active === "security" && <SecuritySection />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
