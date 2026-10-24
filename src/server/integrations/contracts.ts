/** Future provider boundaries. No provider is connected in this version. */
export interface SchedulingProvider {
  getAvailability(input: { serviceId: string; from: string; to: string }): Promise<{ start: string; end: string }[]>;
  createBooking(input: { serviceId: string; start: string; name: string; email: string; idempotencyKey: string }): Promise<{ bookingId: string }>;
}

export interface PaymentProvider {
  createCheckout(input: { bookingId: string; idempotencyKey: string }): Promise<{ checkoutId: string; checkoutUrl: string }>;
  verifyWebhook(input: { rawBody: string; headers: Headers }): Promise<{ eventId: string; paymentId: string; status: "pending" | "approved" | "rejected" }>;
}
