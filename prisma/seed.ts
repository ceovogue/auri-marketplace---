import { PrismaClient, Role, ProductSource, AvailabilityStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Clear (order matters due to relations)
  await prisma.dealerListing.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.dealer.deleteMany();
  await prisma.brand.deleteMany();
  await prisma.user.deleteMany();

  const mkUser = async (email: string, password: string, role: Role, name?: string) => {
    const passwordHash = await bcrypt.hash(password, 10);
    return prisma.user.create({ data: { email, passwordHash, role, name } });
  };

  // Categories (very small demo tree)
  const catBuild = await prisma.category.create({ data: { name: 'Χτίζω', slug: 'xtizo', pillar: 'Χτίζω' } });
  const catMasonry = await prisma.category.create({
    data: { name: 'Τοιχοποιία', slug: 'toixopoiia', pillar: 'Χτίζω', parentId: catBuild.id },
  });

  // Brand
  const brandUser = await mkUser('brand@xspiti.gr', 'Brand123!', Role.BRAND, 'Demo Brand');
  const brand = await prisma.brand.create({
    data: { name: 'Demo Brand SA', website: 'https://example.com', userId: brandUser.id },
  });

  // Dealer
  const dealerUser = await mkUser('dealer@xspiti.gr', 'Dealer123!', Role.DEALER, 'Demo Dealer');
  const dealer = await prisma.dealer.create({
    data: { name: 'Demo Dealer (Αθήνα)', area: 'Αθήνα', postalCode: '10557', userId: dealerUser.id },
  });

  // Brand product
  const p1 = await prisma.product.create({
    data: {
      title: 'Τσιμεντόλιθος (standard)',
      summary: 'Τυποποιημένο δομικό υλικό για τοιχοποιία.',
      source: ProductSource.BRAND,
      brandId: brand.id,
      categoryId: catMasonry.id,
      specsJson: JSON.stringify({ dimensions: '20x40', strength: 'C12/15' }),
      instructionsJson: JSON.stringify({ note: 'Ακολουθήστε τις οδηγίες του κατασκευαστή.' }),
    },
  });

  // Dealer custom product
  const p2 = await prisma.product.create({
    data: {
      title: 'Τσιμεντόλιθος ειδικού σχήματος (custom)',
      summary: 'Κατασκευή κατά παραγγελία για ειδικές εφαρμογές.',
      source: ProductSource.DEALER,
      ownerDealerId: dealer.id,
      categoryId: catMasonry.id,
      isMadeToOrder: true,
      leadTimeDays: 7,
      specsJson: JSON.stringify({ note: 'Διαστάσεις/σχήματα κατόπιν μέτρησης.' }),
    },
  });

  // Dealer listings (handoff)
  await prisma.dealerListing.createMany({
    data: [
      {
        dealerId: dealer.id,
        productId: p1.id,
        availability: AvailabilityStatus.LIMITED,
        externalUrl: 'https://example.com/dealer/product-1',
        notes: 'Διαθέσιμο κατόπιν επικοινωνίας.',
      },
      {
        dealerId: dealer.id,
        productId: p2.id,
        availability: AvailabilityStatus.MADE_TO_ORDER,
        externalUrl: 'https://example.com/dealer/custom-1',
        notes: 'Μόνο κατά παραγγελία (απαιτείται μέτρηση).',
      },
    ],
  });

  console.log('Seed complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
