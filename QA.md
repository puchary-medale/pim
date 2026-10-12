# Kontrola jakości — 12.10.2026

## Wykonane

- Kontrola składni script.js: node --check — OK.
- Parsowanie HTML, JSON konfiguracji, JSON-LD i XML sitemap — OK.
- Jedno H1, zachowana struktura sekcji H2 i kart H3; unikalne ID — OK.
- Wszystkie lokalne src/href i kotwice prowadzą do istniejących plików lub elementów — OK.
- Wszystkie obrazy HTML mają alt, width i height — OK.
- Canonical i og:url: https://www.pucharymedale.com/ — OK.
- robots.txt dopuszcza indeksowanie i wskazuje nową sitemap — OK.
- Reguła przekierowania ma warunek hosta bez www, a cel z www, więc sama nie tworzy pętli. Nie potwierdzono zachowania produkcyjnego ani innych reguł na koncie.
- Brak starego statusu partnera i adresu zastępczego w plikach strony. Przejrzano zestaw grafik; nie znaleziono starego statusu na grafikach. W warstwie tekstowej dostarczonego PDF również brak takiego statusu; nie wykonano OCR wszystkich stron PDF.
- Logo TRYUMF i oryginalny katalog pozostawiono bez zmian.
- Nie ma procesu kompilacji: projekt jest bezpośrednio publikowany jako pliki statyczne.

## Ograniczenia i kontrola po publikacji

Nie uruchomiono testu w przeglądarce: brak zainstalowanego Chromium, a próba pobrania kończyła się błędem archiwum. Nie wykonano wizualnego testu responsywności, pełnego testu E2E, Lighthouse ani rzeczywistego pomiaru LCP/CLS/INP. Zachowano istniejące style i breakpointy; optymalizacja zasobów nie stanowi gwarancji wyniku CWV.

Po wgraniu:
1. Sprawdź HTTP/HTTPS oraz www/bez www: końcowy adres https://www.pucharymedale.com/, bez pętli. Sprawdź także /index, /index.html i losowy nieistniejący URL (powinien zwracać 404).
2. Sprawdź 360, 390, 768 i 1440 px: nagłówek, H1, brak przewijania poziomego, karty i kontakt.
3. Otwórz/zamknij menu, wybierz Medale i Grawer, otwórz SMS. Sprawdź odbiorcę i treść na rzeczywistym telefonie bez obowiązku wysyłania.
4. Otwórz podgląd katalogu, zamknij go, sprawdź pobieranie PDF, telefon, e-mail, Mapy Google i okno prywatności.
5. Sprawdź źródło HTML, canonical, robots i sitemap; uruchom Rich Results Test i PageSpeed Insights dla opublikowanego adresu.
6. Potwierdź uprawnienia do publikacji dotychczasowych zdjęć i opinii oraz aktualność danych firmy i godzin. Oceny zachowano jako historyczne z datą 29.07.2026; nie dodano ich do Schema.org.
7. Potwierdź, że środowiska podglądowe nie są indeksowane (ustawienia Vercel/ochrona podglądów). Nieznane stare domeny przekieruj dopiero po ich identyfikacji.

Źródła techniczne:
- https://vercel.com/docs/project-configuration
- https://vercel.com/docs/domains/working-with-domains/deploying-and-redirecting
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
