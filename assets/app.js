// MG Webdesign – language switch (NL/FR) and contact form
(function () {
  document.documentElement.classList.add('js');

  var FR = {
    'skip': 'Aller au contenu',
    'nav.services': 'Services', 'nav.prices': 'Tarifs', 'nav.work': 'Réalisations', 'nav.contact': 'Contact',
    'nav.process': 'Méthode', 'nav.cta': 'Check gratuit',
    'hero.status': 'Disponible pour de nouveaux projets dans le Limbourg',
    'facts.fix': 'dépannage', 'facts.online': 'pour être en ligne', 'facts.lang': 'langues',
    'term.score': 'Score', 'term.note': '→ 3 points vous font perdre des clients',
    'term.caption': 'Exemple : les 10 points que je vérifie chez chaque commerçant. Gratuitement.',
    'stack.label': 'Construit avec',
    'p.choose': 'Demander', 'p.popular': 'Le plus choisi',
    'about.head': 'Un développeur près de chez vous',
    'hero.title': 'Votre site doit amener des clients, pas les faire fuir.',
    'hero.lead': "Je suis Mbagnick Gaye, développeur web à Halen. Je crée et j'entretiens les sites des commerçants de la région : horeca, coiffeurs, instituts de beauté, garages et artisans. Prix fixes, et vous pouvez simplement m'appeler.",
    'hero.cta': 'Demander mon check gratuit', 'hero.call': 'Appeler',
    'hero.note': 'Pas encore de site ? Je regarde votre fiche Google.',
    'receipt.sub': 'Check gratuit de votre site', 'receipt.total': 'TOTAL', 'receipt.foot': 'Merci et à bientôt !',
    'receipt.caption': 'Les 10 points que je vérifie chez chaque commerçant.',
    'check.1': 'Correct sur Google Maps', 'check.2': 'Lisible sur mobile', 'check.3': 'Appel en un clic',
    'check.4': 'Réserver ou commander', 'check.5': 'Chargement rapide', 'check.6': 'Textes sans fautes',
    'check.7': 'Aucun reste de modèle', 'check.8': 'Infos à jour', 'check.9': 'Sûr et en règle',
    'check.10': 'Trouvable dans votre commune',
    'services.title': 'Ce que je fais pour vous',
    'services.fix.t': 'Réparer votre site actuel',
    'services.fix.p': "Mauvais numéro, anciennes fermetures, invisible sur Google ? Je corrige, même si quelqu'un d'autre a fait le site.",
    'services.new.t': 'Un nouveau site',
    'services.new.p': 'Un site rapide et clair, sur tous les téléphones, avec vos horaires, votre menu ou vos prix et un plan vers votre commerce.',
    'services.book.t': 'Réservation et commande en ligne',
    'services.book.p': 'Tables, rendez-vous ou plats à emporter, même tard le soir quand vous ne pouvez pas décrocher. Avec confirmation par e-mail.',
    'services.care.t': 'Entretien sans souci',
    'services.care.p': "Un jour de fermeture, de nouveaux prix ou des photos ? Envoyez un message, je m'en occupe. Hébergement et sécurité compris.",
    'prices.title': 'Des prix fixes, sans surprise',
    'prices.lead': 'Tous les prix sont hors TVA (21 %). Vous recevez toujours un devis écrit avant.',
    'p.fix.t': 'Dépannage', 'p.fix.p': 'Les principales erreurs de votre site actuel corrigées : Google, coordonnées, mentions légales.', 'p.fix.d': 'Prêt en 2 à 3 jours',
    'p.card.t': 'Site vitrine', 'p.card.p': "Jusqu'à 5 pages, formulaire de contact, plan, horaires, fiche Google en ordre.", 'p.card.d': 'En ligne en 2 semaines',
    'p.book.t': 'Réservation', 'p.book.p': 'Le site vitrine plus la réservation, la prise de rendez-vous ou la commande en ligne, et un menu ou des tarifs que vous modifiez vous-même.', 'p.book.d': 'En ligne en 3 à 4 semaines',
    'care.title': 'Entretien mensuel',
    'care.basic': 'Hébergement, nom de domaine, sécurité, sauvegardes et 30 minutes de modifications par mois.',
    'care.plus': "Tout Basis, 1 heure de modifications, et je tiens votre fiche Google à jour.",
    'care.note': 'Votre nom de domaine est à votre nom. Si vous arrêtez, vous gardez votre adresse.',
    'work.title': 'Réalisations', 'work.lead': 'Quelques-unes de mes réalisations.',
    'work.eaw.where': 'Restaurant libanais, Bruxelles',
    'work.eaw.p': 'Site et application en trois langues, avec menu, réservation de table en ligne, commandes à emporter et e-mails de confirmation.',
    'work.eaw.link': 'Voir eastatwest.com',
    'work.eaw.w1': 'langues : NL, FR, EN', 'work.eaw.w2': 'réservation de table en ligne', 'work.eaw.w3': 'commandes à emporter',
    'work.taxi.where': 'Taxi & VTC, Halen',
    'work.taxi.p': "Site de réservation pour un service de taxi, avec tarifs fixes, compte client et une application à installer sur le téléphone.",
    'work.taxi.t1': 'Réservation en ligne', 'work.taxi.t2': 'App installable', 'work.taxi.link': 'Voir mg-taxi.be',
    'work.mik.where': 'Fintech, Sénégal',
    'work.mik.p': "Site pour une application de paiement : services, tarifs, FAQ et inscriptions, avec un espace d'administration pour l'équipe.",
    'work.mik.t1': 'Espace admin', 'work.mik.link': 'Voir mikaty.com',
    'work.mgw.where': 'Ce site',
    'work.mgw.p': "Site rapide en deux langues, sans cookies et sans scripts externes : tout est sur notre propre serveur.",
    'work.mgw.t1': '0 cookie', 'work.mgw.t2': 'Code sur mesure',
    'work.next': "Votre commerce ici ? Les premiers commerçants de Halen bénéficient d'un prix de lancement.",
    'steps.title': 'Comment nous travaillons',
    'steps.1.t': 'Rencontre', 'steps.1.p': "Je passe dans votre commerce ou on s'appelle. Je vous montre ce qui peut être amélioré, gratuitement.",
    'steps.2.t': 'Devis', 'steps.2.p': 'Vous recevez un prix fixe par écrit. Vous décidez tranquillement.',
    'steps.3.t': 'Construction', 'steps.3.p': "Vous fournissez photos et textes, je m'occupe du reste. Vous voyez le résultat en cours de route.",
    'steps.4.t': 'En ligne', 'steps.4.p': 'Le site est publié et je reste joignable pour les modifications.',
    'about.title': 'Qui suis-je',
    'about.p1': "J'habite à Halen et je travaille comme développeur web indépendant. Je crée des sites et des applications avec des techniques modernes, et je parle néerlandais, français et anglais.",
    'about.p2': "Je travaille pour les commerces du coin parce que je les connais : si votre site ne marche pas, je suis au comptoir.",
    'contact.title': 'Demander un check gratuit',
    'contact.lead': 'Laissez vos coordonnées et je regarde votre site ou votre fiche Google. Réponse sous 2 jours ouvrables, sans engagement.',
    'form.name': 'Votre nom', 'form.business': 'Nom de votre commerce', 'form.site': 'Votre site (si vous en avez un)',
    'form.phone': 'Téléphone', 'form.email': 'E-mail', 'form.msg': 'Votre question',
    'form.consent': "J'accepte que MG Webdesign utilise mes données pour me répondre.",
    'form.privacy': 'Politique de confidentialité', 'form.send': 'Demander le check',
    'foot.vat': "Numéro d'entreprise",
    // privacy page
    'priv.title': 'Politique de confidentialité',
    'priv.intro': 'MG Webdesign (Mbagnick Gaye, 3545 Halen, BE 1037.540.803) respecte votre vie privée. Cette page explique quelles données nous traitons et pourquoi.',
    'priv.h1': 'Quelles données', 'priv.p1': "Uniquement ce que vous saisissez dans le formulaire de contact : nom, nom du commerce, site, téléphone, e-mail et votre question.",
    'priv.h2': 'Pourquoi', 'priv.p2': "Pour répondre à votre demande et, si vous le souhaitez, vous envoyer un devis. Base légale : votre consentement et les mesures précontractuelles.",
    'priv.h3': 'Combien de temps', 'priv.p3': "Au maximum 12 mois après notre dernier contact, sauf si vous devenez client : les données de facturation sont alors conservées 7 ans (obligation légale).",
    'priv.h4': 'Partage', 'priv.p4': "Vos données ne sont jamais vendues. Elles sont stockées chez notre hébergeur (Easyhost, Belgique). Les polices et les autres fichiers sont chargés directement depuis notre propre serveur : aucune donnée n'est envoyée à Google ou à d'autres tiers.",
    'priv.h5': 'Politique en matière de cookies', 'priv.p5': "Ce site ne dépose aucun cookie. Nous n'utilisons aucun outil d'analyse, de suivi ou de publicité, ni de boutons de réseaux sociaux qui vous suivent. C'est pourquoi vous ne voyez pas de bandeau cookies.",
    'priv.p5b': "Seul votre choix de langue (NL ou FR) est conservé localement dans votre propre navigateur (localStorage), pour que le site s'ouvre dans votre langue. Cette information ne quitte pas votre appareil et vous pouvez l'effacer dans les réglages de votre navigateur.",
    'priv.p5c': "Le lien WhatsApp du site est un simple lien : WhatsApp ne s'ouvre que si vous cliquez vous-même dessus.",
    'foot.cookies': 'Cookies', 'foot.terms': 'Conditions générales',
    'terms.kicker': 'conditions', 'terms.title': 'Conditions générales',
    'terms.intro': "Ces conditions s'appliquent à toutes les offres, missions et abonnements de MG Webdesign, nom commercial de Mbagnick Gaye, 3545 Halen, numéro d'entreprise BE 1037.540.803. Version du 14 octobre 2026.",
    'terms.h1': '1. Offre et commande', 'terms.p1': "Chaque mission commence par un devis écrit, valable 30 jours. La commande est définitive dès que vous acceptez le devis par écrit ou par e-mail et que l'acompte est payé.",
    'terms.h2': '2. Prix et paiement', 'terms.p2': "Tous les prix sont hors TVA. Pour les sites web, nous demandons un acompte de 50 % à la commande et le solde à la livraison. Le dépannage est payé en totalité après exécution. Les factures sont payables dans les 14 jours. En cas de retard de paiement, nous pouvons, après un rappel, suspendre le travail ou l'entretien et compter les intérêts légaux.",
    'terms.h3': '3. Exécution et délais', 'terms.p3': "Les délais annoncés sont indicatifs. Ils ne commencent qu'à la réception de tout le contenu (textes, photos, logo, accès). Deux séries de corrections sont incluses dans le prix. Le travail supplémentaire hors devis est facturé 45 € de l'heure, après votre accord.",
    'terms.h4': '4. Ce que vous fournissez', 'terms.p4': "Vous êtes responsable de l'exactitude du contenu que vous fournissez et vous déclarez avoir le droit d'utiliser ces textes, photos et logos.",
    'terms.h5': '5. Livraison', 'terms.p5': "Après la livraison, vous avez 7 jours pour transmettre vos remarques. Sans remarque dans ce délai, ou dès que le site est publié en ligne, le travail est considéré comme accepté.",
    'terms.h6': '6. Propriété', 'terms.p6': "Après paiement complet, vous pouvez utiliser librement le site livré pour votre commerce. Votre nom de domaine est toujours à votre nom. Le code général et les éléments que MG Webdesign utilise aussi pour d'autres projets restent la propriété de MG Webdesign.",
    'terms.h7': "7. Abonnement d'entretien", 'terms.p7': "L'abonnement (Basis ou Plus) dure au moins 12 mois, puis se renouvelle chaque mois. Vous pouvez ensuite l'arrêter avec un préavis d'un mois. Le temps de modification non utilisé n'est pas reporté au mois suivant. En cas d'arrêt, nous vous remettons les fichiers de votre site et vous aidons à transférer votre nom de domaine.",
    'terms.h8': '8. Hébergement et disponibilité', 'terms.p8': "Les sites sont hébergés chez un hébergeur externe. Nous faisons de notre mieux pour résoudre rapidement les pannes, mais nous ne pouvons pas garantir une disponibilité ininterrompue.",
    'terms.h9': '9. Responsabilité', 'terms.p9': "Notre responsabilité est limitée au montant de la facture concernée. Nous ne sommes pas responsables des dommages indirects, comme une perte de chiffre d'affaires. Nous ne promettons ni une position sur Google ni un nombre de clients.",
    'terms.h10': '10. Vie privée', 'terms.p10': 'La façon dont nous traitons les données personnelles est expliquée dans notre',
    'terms.h11': '11. Droit applicable', 'terms.p11': "Ces conditions sont soumises au droit belge. En cas de litige, nous cherchons d'abord une solution ensemble. À défaut, les tribunaux de l'arrondissement du Limbourg sont compétents.",
    'priv.h6': 'Vos droits', 'priv.p6': "Vous pouvez consulter, corriger ou faire supprimer vos données via info@mg-webdesign.be. Vous pouvez aussi porter plainte auprès de l'Autorité de protection des données (gegevensbeschermingsautoriteit.be).",
    'priv.back': "Retour à l'accueil"
  };

  var MSG = {
    nl: { sending: 'Bezig met verzenden…', ok: 'Bedankt! Uw aanvraag is verzonden. U krijgt binnen 2 werkdagen antwoord.', err: 'Verzenden is niet gelukt. Bel of mail ons gerust: 0496 93 57 45 of info@mg-webdesign.be.', missing: 'Vul uw naam, de naam van uw zaak en een geldig e-mailadres in, en vink het akkoord aan.' },
    fr: { sending: 'Envoi en cours…', ok: 'Merci ! Votre demande est envoyée. Réponse sous 2 jours ouvrables.', err: "L'envoi a échoué. Appelez ou écrivez-nous : 0496 93 57 45 ou info@mg-webdesign.be.", missing: 'Indiquez votre nom, le nom de votre commerce et un e-mail valide, et cochez la case d’accord.' }
  };

  var META = {
    nl: { title: document.title, desc: (document.querySelector('meta[name="description"]') || {}).content },
    fr: document.body.dataset.page === 'privacy'
      ? { title: 'Politique de confidentialité – MG Webdesign', desc: 'Comment MG Webdesign traite vos données.' }
      : document.body.dataset.page === 'terms'
      ? { title: 'Conditions générales – MG Webdesign', desc: 'Conditions générales de MG Webdesign pour les sites web, modifications et entretien.' }
      : { title: 'MG Webdesign – Sites web pour les commerçants de Halen et environs', desc: 'Sites web, réservation en ligne et entretien pour les commerces de Halen, Diest et Hasselt. Check gratuit en 10 points.' }
  };

  var nodes = document.querySelectorAll('[data-i18n]');
  var NL = {};
  nodes.forEach(function (el) { NL[el.dataset.i18n] = el.textContent; });

  var current = 'nl';
  function setLang(lang) {
    current = lang === 'fr' ? 'fr' : 'nl';
    var dict = current === 'fr' ? FR : NL;
    nodes.forEach(function (el) {
      var t = dict[el.dataset.i18n];
      if (t) el.textContent = t;
    });
    document.documentElement.lang = current;
    document.title = META[current].title;
    var d = document.querySelector('meta[name="description"]');
    if (d && META[current].desc) d.content = META[current].desc;
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === current));
    });
    var hidden = document.querySelector('input[name="lang"]');
    if (hidden) hidden.value = current;
    try { localStorage.setItem('mg-lang', current); } catch (e) {}
  }

  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });

  var saved = null;
  try { saved = localStorage.getItem('mg-lang'); } catch (e) {}
  var param = new URLSearchParams(location.search).get('lang');
  if (param === 'fr' || param === 'nl') saved = param;
  if (saved === 'fr') setLang('fr');

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Cookie notice (informational: the site sets no cookies)
  (function () {
    var seen = null;
    try { seen = localStorage.getItem('mg-cookie-notice'); } catch (e) {}
    if (seen === '1') return;
    var T = {
      nl: { text: 'Deze website gebruikt geen cookies en volgt u niet. Enkel uw taalkeuze wordt in uw browser onthouden.', more: 'Meer info', ok: 'OK, begrepen' },
      fr: { text: "Ce site n'utilise pas de cookies et ne vous suit pas. Seul votre choix de langue est mémorisé dans votre navigateur.", more: 'En savoir plus', ok: "OK, j'ai compris" }
    };
    var bar = document.createElement('div');
    bar.className = 'cookie';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Cookies');
    bar.innerHTML = '<p class="cookie__text"><span class="cookie__icon" aria-hidden="true">🍪</span><span class="cookie__msg"></span> <a class="cookie__more" href="privacy.html#cookies"></a></p><button type="button" class="btn btn--accent btn--sm cookie__ok"></button>';
    function fill() {
      var t = T[current] || T.nl;
      bar.querySelector('.cookie__msg').textContent = t.text;
      bar.querySelector('.cookie__more').textContent = t.more;
      bar.querySelector('.cookie__ok').textContent = t.ok;
    }
    fill();
    document.querySelectorAll('[data-lang]').forEach(function (b) { b.addEventListener('click', function () { setTimeout(fill, 0); }); });
    bar.querySelector('.cookie__ok').addEventListener('click', function () {
      try { localStorage.setItem('mg-cookie-notice', '1'); } catch (e) {}
      bar.remove();
    });
    document.body.appendChild(bar);
  })();

  // Navbar: scrolled state, hamburger menu, active section
  var nav = document.getElementById('nav');
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('menu');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('is-scrolled', window.scrollY > 20); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  function setMenu(open) {
    if (!burger || !menu) return;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open
      ? (current === 'fr' ? 'Fermer le menu' : 'Menu sluiten')
      : (current === 'fr' ? 'Ouvrir le menu' : 'Menu openen'));
    menu.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (burger && menu) {
    burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setMenu(false); burger.focus(); } });
    window.addEventListener('resize', function () { if (window.innerWidth > 960) setMenu(false); });
  }
  if ('IntersectionObserver' in window) {
    var links = document.querySelectorAll('.nav__links a');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (l) { l.classList.toggle('is-active', l.getAttribute('href') === '#' + en.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['diensten', 'prijzen', 'werk', 'werkwijze'].forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  // Contact form
  var form = document.querySelector('.form');
  if (!form) return;
  var status = form.querySelector('.form__status');

  // Message after a non-JS submit redirect
  var sent = new URLSearchParams(location.search).get('verzonden');
  if (sent && status) {
    status.textContent = sent === '1' ? MSG[current].ok : MSG[current].err;
    status.className = 'form__status ' + (sent === '1' ? 'ok' : 'err');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true;
    ['name', 'business', 'email'].forEach(function (n) {
      var f = form.elements[n];
      var bad = !f.value.trim() || (n === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim()));
      f.setAttribute('aria-invalid', bad ? 'true' : 'false');
      if (bad) ok = false;
    });
    if (!form.elements.consent.checked) ok = false;
    if (!ok) {
      status.textContent = MSG[current].missing;
      status.className = 'form__status err';
      return;
    }
    status.textContent = MSG[current].sending;
    status.className = 'form__status';
    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;

    fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
      .then(function (r) { return r.json().catch(function () { return { ok: false }; }); })
      .then(function (data) {
        if (data && data.ok) {
          status.textContent = MSG[current].ok;
          status.className = 'form__status ok';
          form.reset();
          setLang(current);
        } else {
          status.textContent = MSG[current].err;
          status.className = 'form__status err';
        }
      })
      .catch(function () {
        status.textContent = MSG[current].err;
        status.className = 'form__status err';
      })
      .finally(function () { btn.disabled = false; });
  });
})();
