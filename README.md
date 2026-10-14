# mg-webdesign.be

Site vitrine de **MG Webdesign** (Mbagnick Gaye, Halen) : création et entretien de sites web pour les commerçants locaux.

Live : https://mg-webdesign.be

## Stack

- HTML, CSS et JavaScript sans framework ni build
- PHP pour le formulaire de contact (`contact.php`, fonction `mail()`)
- Police Geist hébergée localement (`assets/fonts`), aucun appel externe, aucun cookie
- Hébergement : Easyhost (Webhosting Small), dossier `www`

## Structure

```
index.html          Page d'accueil (NL par défaut, FR via le bouton de langue)
privacy.html        Privacybeleid + cookiebeleid
voorwaarden.html    Algemene voorwaarden
contact.php         Envoi du formulaire vers info@mg-webdesign.be
assets/
  styles.css        Styles du site
  app.js            Traductions FR, menu mobile, bandeau cookies, formulaire
  fonts/            Geist + Geist Mono (woff2)
  work/             Captures des réalisations (webp)
  email/            Logo utilisé dans la signature e-mail
.htaccess           Redirection HTTPS + cache
robots.txt, sitemap.xml
```

## Traductions

Les textes néerlandais sont dans le HTML. Chaque élément traduisible porte un attribut `data-i18n="cle"`,
et la traduction française correspondante se trouve dans l'objet `FR` de `assets/app.js`.
Ajouter un texte = ajouter `data-i18n` dans le HTML **et** la clé dans `FR`.

## Mise en ligne

1. Après une modification des styles ou du script, augmenter le numéro de version dans les liens
   (`styles.css?v=6`, `app.js?v=6`) des trois pages HTML, sinon les navigateurs gardent l'ancienne version.
2. Créer un zip des fichiers modifiés.
3. Easyhost → Hébergement web → File Manager → dossier `www` → Upload → clic droit → Extract.
4. Supprimer le zip du dossier `www` après l'extraction.

## Test en local

```
php -S localhost:8000
```

puis ouvrir http://localhost:8000 (le formulaire n'envoie de vrais e-mails qu'en ligne).
