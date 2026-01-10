export const categories = {
  domika: {
    title: 'Δομικά Υλικά',
    subtitle: 'Υλικά για την κατασκευή ενός σπιτιού',
    items: [
      {
        title: 'Σκυρόδεμα & Οπλισμός',
        desc: 'Μπετόν, σίδερα, καλούπια',
        href: '/domika-ylika',
      },
      {
        title: 'Τσιμέντα & Κονιάματα',
        desc: 'Τσιμέντο, λάσπες, κόλλες',
        href: '/domika-ylika',
      },
    ],
  },

  kataskeves: {
    title: 'Κατασκευές',
    subtitle: 'Προκατασκευασμένες λύσεις & έτοιμα προϊόντα',
    items: [
      {
        title: 'Προκατασκευασμένα Σπίτια',
        desc: 'Ξύλινα, μπετόν, sandwich panel',
        href: '/kataskeves',
      },
      {
        title: 'Πέργκολες & Στέγαστρα',
        desc: 'Έτοιμες λύσεις σκίασης',
        href: '/kataskeves',
      },
    ],
  },

  energia: {
    title: 'Ενέργεια & Άνεση',
    subtitle: 'Θέρμανση, ψύξη, ζεστό νερό, αυτοματισμοί',
    items: [
      {
        title: 'Θέρμανση & Ψύξη',
        desc: 'Αντλίες, λέβητες, κλιματισμός',
        href: '/energia',
      },
      {
        title: 'Smart Home',
        desc: 'Θερμοστάτες, αυτοματισμοί',
        href: '/energia',
      },
    ],
  },

  eksoplismos: {
    title: 'Εξοπλισμός Σπιτιού',
    subtitle: 'Συσκευές, έπιπλα, οργάνωση',
    items: [
      {
        title: 'Ηλεκτρικές Συσκευές',
        desc: 'Ψυγεία, πλυντήρια, κουζίνες',
        href: '/eksoplismos',
      },
      {
        title: 'Έπιπλα & Διακόσμηση',
        desc: 'Σαλόνι, υπνοδωμάτιο, μπάνιο',
        href: '/eksoplismos',
      },
    ],
  },
} as const;

export type CategoryKey = keyof typeof categories;
