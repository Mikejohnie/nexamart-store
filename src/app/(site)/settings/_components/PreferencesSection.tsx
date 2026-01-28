"use client";

import SettingsCard from "@/components/settings/SettingsCard";
import { Switch } from "@/components/ui/switch";
import { useCurrencyStore } from "@/stores/useCurrencyStore";
import { Globe, Mail, Moon } from "lucide-react";

const currencies = [
  { value: "USD", label: "USD – US Dollar" },
  { value: "NGN", label: "NGN – Nigerian Naira" },
  { value: "GBP", label: "GBP – Pounds Sterling" },
  { value: "EUR", label: "EUR – Euro" },
  { value: "KES", label: "KES – Kenyan Shilling" },
  { value: "ZAR", label: "ZAR – South African Rand" },
  { value: "CAD", label: "CAD – Canadian Dollar" },
];

export default function PreferencesSection() {
  const { currency, setCurrency } = useCurrencyStore();

  return (
    <SettingsCard title="Preferences">
      <div className="space-y-6">
        {/* CURRENCY */}
        <div className="flex items-start gap-4">
          <Globe className="w-5 h-5 text-[#3c9ee0]" />
          <div className="flex-1">
            <p className="font-medium">Currency</p>
            <p className="text-sm text-gray-500">
              Choose how prices are displayed across NexaMart.
            </p>

            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="mt-2 w-full max-w-xs border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3c9ee0]"
            >
              {currencies.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* EMAIL NOTIFICATIONS */}
        <div className="flex items-start gap-4">
          <Mail className="w-5 h-5 text-[#3c9ee0]" />
          <div className="flex-1 flex items-center justify-between">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-gray-500">
                Receive updates about orders and deliveries.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>

        {/* THEME */}
        <div className="flex items-start gap-4">
          <Moon className="w-5 h-5 text-[#3c9ee0]" />
          <div className="flex-1 flex items-center justify-between">
            <div>
              <p className="font-medium">Dark Mode</p>
              <p className="text-sm text-gray-500">
                Automatically match your system theme.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>
    </SettingsCard>
  );
}
