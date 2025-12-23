"use client";

const KEY = "nexamart_recently_viewed";
const MAX_ITEMS = 10;

export function addRecentlyViewed(productId: string) {
  try {
    const raw = localStorage.getItem(KEY);
    const items: string[] = raw ? JSON.parse(raw) : [];

    const filtered = items.filter((id) => id !== productId);
    const updated = [productId, ...filtered].slice(0, MAX_ITEMS);

    localStorage.setItem(KEY, JSON.stringify(updated));
  } catch {}
}

export function getRecentlyViewed(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function clearRecentlyViewed() {
  try {
    localStorage.removeItem("nexamart_recently_viewed");
  } catch {}
}
