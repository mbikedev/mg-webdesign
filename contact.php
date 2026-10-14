<?php
// MG Webdesign – contact form handler
// Sends the form to info@mg-webdesign.be. Works on standard PHP hosting (Easyhost).

declare(strict_types=1);

const TO_EMAIL   = 'info@mg-webdesign.be';
const FROM_EMAIL = 'info@mg-webdesign.be'; // must be a mailbox on this domain, or many hosts refuse to send

$wantsJson = isset($_SERVER['HTTP_ACCEPT']) && str_contains($_SERVER['HTTP_ACCEPT'], 'application/json');

function respond(bool $ok, bool $json): void {
    if ($json) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok]);
    } else {
        header('Location: /?verzonden=' . ($ok ? '1' : '0') . '#contact', true, 303);
    }
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Location: /', true, 303);
    exit;
}

// Honeypot: bots fill this hidden field, people don't
if (!empty($_POST['company_url'])) {
    respond(true, $wantsJson);
}

function clean(string $key, int $max = 200): string {
    $v = trim((string)($_POST[$key] ?? ''));
    $v = str_replace(["\r", "\n", "%0a", "%0d"], ' ', $v); // no header injection
    return mb_substr($v, 0, $max);
}

$name     = clean('name');
$business = clean('business');
$website  = clean('website');
$phone    = clean('phone', 40);
$email    = clean('email');
$lang     = clean('lang', 2) === 'fr' ? 'fr' : 'nl';
$message  = mb_substr(trim((string)($_POST['message'] ?? '')), 0, 3000);
$consent  = !empty($_POST['consent']);

if ($name === '' || $business === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$consent) {
    respond(false, $wantsJson);
}

$subject = 'Websitecheck: ' . $business;
$body  = "Nieuwe aanvraag via mg-webdesign.be\n\n";
$body .= "Naam:     $name\n";
$body .= "Zaak:     $business\n";
$body .= "Website:  " . ($website !== '' ? $website : '-') . "\n";
$body .= "Telefoon: " . ($phone !== '' ? $phone : '-') . "\n";
$body .= "E-mail:   $email\n";
$body .= "Taal:     " . strtoupper($lang) . "\n\n";
$body .= "Vraag:\n" . ($message !== '' ? $message : '-') . "\n\n";
$body .= "Verzonden op " . date('d/m/Y H:i') . " – IP " . ($_SERVER['REMOTE_ADDR'] ?? '?') . "\n";

$headers  = 'From: MG Webdesign <' . FROM_EMAIL . ">\r\n";
$headers .= 'Reply-To: ' . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail(TO_EMAIL, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers, '-f' . FROM_EMAIL);

respond($sent, $wantsJson);
