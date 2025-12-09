export interface CurrentUser {
  id: string;
  name: string;
  username: string;
  fullName: string;
  email: string;
  role: "USER" | "ADMIN" | "MODERATOR" | "SELLER" | "RIDER";
  image?: string | null;
}
