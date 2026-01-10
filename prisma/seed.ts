// prisma/seed.ts
// Minimal seed to match the current Prisma schema

import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create a minimal admin user (change email if you want)
  const adminEmail = "admin@xspiti.gr";

  // Upsert user
  const user = await prisma.user.upsert({
    where: { email: adminEmail },
    update: { role: Role.ADMIN, name: "Admin" },
    create: { email: adminEmail, role: Role.ADMIN, name: "Admin" },
  });

  // Create Brand for the admin (1 brand per ownerId)
  await prisma.brand.upsert({
    where: { ownerId: user.id },
    update: { name: "Demo Brand" },
    create: { name: "Demo Brand", ownerId: user.id },
  });

  // Create Dealer for the admin (1 dealer per ownerId)
  await prisma.dealer.upsert({
    where: { ownerId: user.id },
    update: { name: "Demo Dealer" },
    create: { name: "Demo Dealer", ownerId: user.id },
  });

  console.log("✅ Seed completed");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
