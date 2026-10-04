# Kontrola końcowa

Data: 2026-10-04

## Wykonane sprawdzenia

- 1 × H1 i logiczna hierarchia H2/H3.
- wszystkie nowe grafiki i katalog PDF są lokalne w `assets/`.
- fotografie zostały zoptymalizowane do WebP; duży katalog PDF jest ładowany dopiero na żądanie.
- karty kategorii prowadzą do sekcji katalogu zamiast wyglądać jak nieaktywne przyciski.
- katalog ma trzy ścieżki dostępu: podgląd na stronie, otwarcie PDF w nowej karcie i pobranie pliku.
- podgląd katalogu ma przycisk zamknięcia i komunikat awaryjny dla przeglądarek, które nie renderują PDF w iframe.
- menu główne i mobilne zawierają odnośnik „Katalog 2026”.
- sekcja TRYUMF jest osobnym blokiem i zawiera dostarczone logo partnera.
- sekcja „Każdy sukces ma swoją scenę” ma przyciemnione zdjęcie w tle oraz zachowany kontrast tekstu i tagów.
- galeria korzysta z dostarczonych zdjęć i zachowuje działający lightbox.
- `script.js` przechodzi kontrolę składni JavaScript.
- wszystkie lokalne odwołania `src`/`href` oraz kotwice sekcji zostały sprawdzone pod kątem brakujących plików i celów.
- zachowano tryb `prefers-reduced-motion` także dla nowych animacji/hoverów.

## Dane wymagające podmiany po wyborze domeny

W całej paczce wyszukaj `https://twoja-domena.pl/` i zastąp docelowym adresem HTTPS. Dotyczy canonical, Open Graph, schema.org, robots.txt i sitemap.xml.
