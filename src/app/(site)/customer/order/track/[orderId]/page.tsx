import { prisma } from "@/lib/prisma";
import { CurrentUserId } from "@/lib/currentUser";
import { DeliveryStatus, OrderStatus } from "@/generated/prisma/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  MapPin,
  Clock,
  CheckCircle2,
  XCircle,
  Package,
} from "lucide-react";
import { formatBaseUSD } from "@/lib/formatBaseUSD";
import OrderTrackCard from "@/components/order/OrderTrackCard";
import { OrderTrackDTO } from "@/lib/types";

export default async function TrackOrderPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  const userId = await CurrentUserId();

  if (!userId) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <p className="text-gray-600">
          Please{" "}
          <Link href="/login" className="text-blue-600 underline">
            login
          </Link>{" "}
          to view this order.
        </p>
      </main>
    );
  }

  const order = await prisma.order.findFirst({
    where: { id: orderId, userId },
    include: {
      items: {
        include: {
          product: { include: { images: true } },
          variant: true,
        },
      },
      delivery: {
        include: {
          rider: { select: { id: true, name: true, email: true } },
        },
      },
    },
  });

  if (!order) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <p className="text-red-500">Order not found or unauthorized.</p>
      </main>
    );
  }

  const orderDTO: OrderTrackDTO = {
    id: order.id,
    status: order.status,
    deliveryType: order.deliveryType,
    deliveryAddress: order.deliveryAddress,
    paymentMethod: order.paymentMethod,
    shippingFee: order.shippingFee,
    totalAmount: order.totalAmount,
    createdAt: order.createdAt.toISOString(),

    items: order.items.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      product: {
        name: item.product.name,
        images: item.product.images.map((img) => ({
          imageUrl: img.imageUrl,
        })),
      },
    })),

    delivery: order.delivery
      ? {
          status: order.delivery.status,
          rider: order.delivery.rider
            ? {
                name: order.delivery.rider.name,
                email: order.delivery.rider.email,
              }
            : null,
        }
      : null,
  };

  return <OrderTrackCard order={orderDTO} />;
}
