
## Environment (.env)
Create a `.env` file (see `.env.example`). At minimum set:
- `DATABASE_URL`
- `JWT_SECRET` (for production)

Note: This build auto-detects the base URL from request headers, so it works on **multiple domains** without hardcoding.
# xspiti (MVP Demo) — Brands → Dealers → Καταναλωτής

Αυτό το repo είναι **MVP demo build** για παρουσίαση του xspiti, με έμφαση στο domain model:

- **Brands** ανεβάζουν authoritative προϊόντα (specs/οδηγίες/προδιαγραφές)
- **Dealers**:
  - δηλώνουν διαθεσιμότητα/offer για Brand προϊόντα (handoff σε e-shop)
  - ανεβάζουν και **custom/local προϊόντα** (π.χ. ειδικοί τσιμεντόλιθοι)
- **Γενικός κατάλογος**: εμφανίζει και Brand και Dealer προϊόντα (με σαφή σήμανση)
- **AI**: διαβάζει structured γνώση (specs/instructions) για να “μεταφράζει” στον καταναλωτή (Phase 2)

## Presentation mode (Phase 1)
Για να μπορείς να κάνεις πλήρη παρουσίαση χωρίς “ψεύτικα” προϊόντα:
- Τα menu links οδηγούν σε placeholder σελίδα `/catalog?title=...` με τη λέξη **ΠΡΟΪΟΝ**
- Στη λειτουργία επαγγελματία (`/pro`) τα ίδια links οδηγούν σε `/pro/catalog?title=...` με τη λέξη **ΠΛΗΡΟΦΟΡΙΕΣ**

## Tech stack
- Next.js (App Router) + TypeScript
- Prisma ORM
- PostgreSQL (docker-compose)

## Quick start
1) Install:
```bash
npm i
```

2) DB (Postgres):
```bash
docker compose up -d
```

3) Prisma:
```bash
npx prisma db push
npx prisma generate
```

4) (Optional) Seed:
```bash
npx prisma db seed
```

5) Run:
```bash
npm run dev
```