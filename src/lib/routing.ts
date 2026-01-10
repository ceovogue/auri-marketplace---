import { prisma } from './prisma';

/**
 * MVP routing strategy (presentation-safe):
 * - Prefer dealers with exact postalCode match
 * - Else dealers with same 2-digit prefix (π.χ. 10***)
 * - Else any dealer
 *
 * NOTE: Subscription logic can be reintroduced later (Phase 2).
 */
export async function pickDealerForLead(postalCode?: string | null) {
  if (postalCode) {
    const exact = await prisma.dealer.findFirst({ where: { postalCode } });
    if (exact) return exact;

    const prefix2 = postalCode.slice(0, 2);
    if (prefix2.length === 2) {
      const pref = await prisma.dealer.findFirst({
        where: { postalCode: { startsWith: prefix2 } },
      });
      if (pref) return pref;
    }
  }

  return prisma.dealer.findFirst();
}
