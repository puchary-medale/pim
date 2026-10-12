# Puchary i Medale — wersja SEO, 12.10.2026

Statyczna strona HTML/CSS/JavaScript, bez frameworka, npm i etapu kompilacji.
Adres kanoniczny: https://www.pucharymedale.com/

## Wgranie na Vercel

1. Rozpakuj paczkę. Wgraj pliki projektu do repozytorium — index.html i vercel.json muszą znajdować się w katalogu głównym projektu.
2. W swoim właściwym koncie Vercel wybierz projekt i Framework Preset: Other. Build Command pozostaw puste; katalog publikacji to katalog projektu (nie dist).
3. Dodaj do właściwego projektu www.pucharymedale.com oraz pucharymedale.com. Wersja www ma wskazywać stronę, bez przekierowania w przeciwną stronę. Plik vercel.json przekierowuje domenę bez www na HTTPS z www, zachowując ścieżkę. HTTPS obsługuje Vercel.
4. Nie zmieniaj działających rekordów MX, SPF, DKIM, DMARC ani konfiguracji poczty. Ta paczka niczego nie zmienia w DNS.
5. Po publikacji wykonaj kontrolę opisaną w QA.md i zgłoś https://www.pucharymedale.com/sitemap.xml w Google Search Console.

Nie wykonano żadnej operacji na koncie Vercel, domenach ani DNS. Nie znamy adresów ewentualnych dawnych domen ani aliasu projektu vercel.app. Ich przekierowania trzeba ustawić dopiero po potwierdzeniu adresów i podpięciu ich do właściwego projektu. Nie ma ogólnej reguły przechwytującej wszystkie hosty — podglądy pozostają dostępne.

## Struktura i funkcje

To strona one-page: oferta, personalizacja, realizacje, okazje, katalog, opinie i kontakt są sekcjami jednego dokumentu. Nie ma odrębnych kategorii ani kart produktów do indeksowania. Sitemap zawiera jeden rzeczywisty adres; kotwice nie są osobnymi podstronami.

Zachowano menu, wybór parametrów nagrody, link SMS z treścią, telefon, e-mail, mapę, podgląd i pobranie PDF oraz okno prywatności. SMS otwiera aplikację urządzenia; użytkownik sam zatwierdza wysłanie. Na komputerze dostępność SMS zależy od systemu. PDF (około 18 MB) ładuje się dopiero po otwarciu podglądu; pozostawiono oryginalną jakość katalogu.

## Zakres SEO

- Nowa domena w canonical, OG, Twitter, Schema.org, robots i sitemap.
- Title, opis i H1 uwzględniają ofertę oraz potwierdzone w projekcie Jastrzębie-Zdrój.
- Treści kategorii: puchary dla klubów i na turnieje, medale sportowe z grawerem; bez nowych produktów i fikcyjnych cen.
- LocalBusiness, WebSite i WebPage, połączone identyfikatorami. Bez Product, ocen i BreadcrumbList: brak indywidualnych produktów, potwierdzonych cen i wielopoziomowej nawigacji.
- Złoty Partner Tryumf w całym interfejsie; logo TRYUMF bez zmian.
- Przezroczyste logo WebP zamiast ciężkiego PNG, warianty srcset, opisowe ALT, wymiary obrazów, lazy loading poniżej hero.
- Hero widoczne od razu, treść czytelna także bez JavaScript; Escape zamyka mobilne menu.
- Cache obrazów skrócony z roku immutable do doby z rewalidacją, ponieważ nazwy plików nie są wersjonowane.
- Strona 404 z noindex, bez przepisywania nieistniejących adresów na stronę główną.
- Usunięto z paczki stare kopie .bak HTML/CSS. Dokumentację wykluczono z publikacji przez .vercelignore.

Dotychczasowe opinie, dane rejestrowe i godziny zachowano na podstawie dostarczonej strony. Nie były niezależnie potwierdzane. Polityka prywatności nadal wymaga oceny właściciela pod kątem faktycznie stosowanych procesów i usług.
