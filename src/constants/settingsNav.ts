import { User, MapPin, Wallet, SlidersHorizontal, Shield } from "lucide-react";

export const settingsNav = [
  { key: "account", label: "Account", icon: User },
  { key: "addresses", label: "Addresses", icon: MapPin },
  { key: "wallet", label: "Wallet", icon: Wallet },
  { key: "preferences", label: "Preferences", icon: SlidersHorizontal },
  { key: "security", label: "Security", icon: Shield },
] as const;
