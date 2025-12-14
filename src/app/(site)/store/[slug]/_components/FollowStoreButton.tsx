import { CurrentUserId } from "@/lib/currentUser";
import { prisma } from "@/lib/prisma";
import FollowStoreClient from "./FollowStoreClient";

const FollowStoreButton = async ({ storeId }: { storeId: string }) => {
  const userId = await CurrentUserId();

  if (!userId) return null;

  const store = await prisma.store.findUnique({
    where: { id: storeId },
    select: { userId: true },
  });

  if (store?.userId === userId) return null;

  const [isFollowing, followerCount] = await Promise.all([
    prisma.storeFollower.findFirst({
      where: { storeId, userId },
      select: { id: true },
    }),
    prisma.storeFollower.count({
      where: { storeId },
    }),
  ]);

  return (
    <FollowStoreClient
      storeId={storeId}
      userId={userId}
      isFollowing={Boolean(isFollowing)}
      followerCount={followerCount}
    />
  );
};

export default FollowStoreButton;
