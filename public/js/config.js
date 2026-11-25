/* ============================================================
   CONFIGURATION UNIQUE — modifiez ici tarifs, textes, contact.
   Aucun rebuild du code nécessaire : seul ce fichier change.
   ============================================================ */
window.SITE_CONFIG = {
  brand: { name: "Profil Impact", company: "Audaim Studio",
    slogan: "Votre expertise mérite un profil qui convainc.",
    positioning: "Personal Branding & LinkedIn Optimization" },
  contact: { whatsapp: "2290141379498", email: "audaimstudio@gmail.com", instagram: "audaimstudio" },
  hero: {
    title: "Boostez votre présence professionnelle sur LinkedIn",
    text: "Un profil optimisé, pour plus d’opportunités : visibilité renforcée, bons contacts, réseau développé.",
    cta: "Commander sur WhatsApp",
    ctaMessage: "Bonjour Audaim Studio, je souhaite en savoir plus sur Profil Impact."
  },
  offers: [
    { id: "essentielle", name: "Essentielle", tagline: "Les bases d’un profil qui inspire confiance.",
      price: { eur: 49, fcfa: 32000 }, image: "essentielle",
      features: ["Titre LinkedIn", "Section À propos", "Présentation des services", "Audit et recommandations"],
      message: "Bonjour Audaim Studio, je souhaite commander l’offre ESSENTIELLE de Profil Impact (49 € / 32 000 FCFA)." },
    { id: "premium", name: "Premium", tagline: "Le profil complet, visuels et contenus inclus.", highlight: true,
      badge: "Offre de lancement — 5 premiers clients",
      price: { eur: 79, fcfa: 52000 }, normalPrice: { eur: 119, fcfa: 78000 }, image: "premium",
      features: ["Tous les éléments de l’offre Essentielle", "Bannière personnalisée", "Photo de profil retouchée", "3 publications LinkedIn", "Guide de mise à jour du profil", "1 révision après livraison"],
      message: "Bonjour Audaim Studio, je souhaite commander l’offre PREMIUM de Profil Impact (79 € / 52 000 FCFA, tarif des 5 premiers clients)." },
    { id: "business", name: "Business", tagline: "Une présence installée dans la durée.",
      price: { eur: 149, fcfa: 98000 }, image: "business",
      features: ["Tous les éléments de l’offre Premium", "10 publications LinkedIn", "Calendrier éditorial sur 30 jours", "5 idées de contenus vidéo ou carrousel", "2 révisions"],
      message: "Bonjour Audaim Studio, je souhaite commander l’offre BUSINESS de Profil Impact (149 € / 98 000 FCFA)." }
  ],
  portfolio: {
    title: "Réalisations", intro: "Des profils LinkedIn transformés. Touchez une image pour l’agrandir.",
    items: [
      { img: "p-alexandre", alt: "Profil LinkedIn d’Alexandre Morel" },
      { img: "p-koffi", alt: "Profil LinkedIn de Koffi Mensah en marketing digital" },
      { img: "p-coaching", alt: "Profil LinkedIn de coaching professionnel" },
      { img: "p-b2b", alt: "Profil LinkedIn de consultant B2B" },
      { img: "p-marketing", alt: "Profil LinkedIn marketing digital" }
    ]
  },
  recap: { title: "Toutes les offres en un coup d’œil", alt: "Récapitulatif des offres Profil Impact" },
  faq: [
    { q: "Comment passer commande ?", a: "Cliquez sur le bouton WhatsApp de l’offre choisie : un message prérempli s’ouvre, il vous suffit de l’envoyer. Nous vous répondons pour la suite." },
    { q: "Comment se déroule le paiement ?", a: "Il n’y a pas de paiement en ligne sur ce site. Les modalités de règlement sont convenues avec vous directement sur WhatsApp." },
    { q: "Quelle offre choisir ?", a: "Essentielle pour poser les bases du profil, Premium pour y ajouter bannière, photo et premières publications, Business pour une présence active sur 30 jours." },
    { q: "Qu’est-ce que le tarif des 5 premiers clients ?", a: "L’offre Premium est proposée à 79 € / 52 000 FCFA pour les cinq premiers clients, au lieu de 119 € / 78 000 FCFA." },
    { q: "Que se passe-t-il après la livraison ?", a: "Premium inclut 1 révision après livraison et Business 2 révisions, afin d’ajuster le résultat à vos attentes." },
    { q: "Dois-je envoyer des documents ?", a: "Oui, nous vous demanderons votre profil LinkedIn actuel, votre CV ou vos informations clés, ainsi qu’une photo si vous choisissez Premium ou Business." }
  ],
  seo: { title: "Profil Impact — Optimisation de profil LinkedIn | Audaim Studio",
    description: "Profil Impact par Audaim Studio : titre, À propos, bannière, publications et calendrier éditorial pour un profil LinkedIn qui convainc. Offres dès 49 €." }
};
