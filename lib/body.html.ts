export const bodyHtml = `<header class="nav" id="siteNav" role="banner">
    <div class="nav__inner">
      <a href="#hero" class="nav__brand" aria-label="Kebab Musterwebsite">
        <span class="wordmark wordmark--nav">Kebab<span class="wordmark__sub">Musterwebsite</span></span>
      </a>
      <nav aria-label="Hauptnavigation">
        <ul class="nav__links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button type="button" class="nav__toggle" id="navToggle" aria-expanded="false" aria-controls="mobileMenu" aria-label="Menü öffnen">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <div class="mobile-overlay" id="mobileMenu" aria-hidden="true" role="dialog" aria-label="Mobile Navigation">
    <a href="#menu">Menu</a>
    <a href="#about">About</a>
    <a href="#gallery">Gallery</a>
    <a href="#contact">Contact</a>
  </div>

  <main id="main">
    <section class="hero" id="hero" aria-labelledby="hero-heading">
      <div class="hero__dots" aria-hidden="true"></div>
      <div class="hero__content">
        <h1 id="hero-heading" class="hero__title font-display">
          <span class="hero__title-line1">Crafted with</span>
          <span class="hero__title-line2">FIRE &amp; SOUL</span>
        </h1>
        <p class="hero__sub">Platzhaltertext – Kebab-Restaurant Musterwebsite</p>
        <div class="hero__ctas">
          <a class="btn btn--primary" href="#menu">Explore Menu</a>
          <a class="btn btn--ghost" href="#about">Our Story</a>
        </div>
      </div>
      <a href="#menu" class="hero__scroll" aria-label="Weiter zum Menü">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
        <span>Scroll</span>
      </a>
    </section>

    <div class="marquee-strip" aria-hidden="true">
      <div class="marquee__track">
        <div class="marquee__inner">
          <span class="marquee__text">TACOS · KEBAB · SHWARMA · DÖNER · MUSTERWEBSITE · PLATZHALTER · BEISPIELINHALTE ·</span>
        </div>
        <div class="marquee__inner" aria-hidden="true">
          <span class="marquee__text">TACOS · KEBAB · SHWARMA · DÖNER · MUSTERWEBSITE · PLATZHALTER · BEISPIELINHALTE ·</span>
        </div>
      </div>
    </div>

    <section class="section--menu reveal" id="menu" aria-labelledby="menu-heading">
      <header class="section-head">
        <p class="section-label">Das Menü</p>
        <h2 id="menu-heading">Frisch. Jeden Tag.</h2>
      </header>
      <div class="menu-tabs" role="tablist" aria-label="Menü filtern">
        <button type="button" class="menu-tab is-active" data-filter="all" role="tab" aria-selected="true">Alle</button>
        <button type="button" class="menu-tab" data-filter="kebabs" role="tab" aria-selected="false">Kebabs</button>
        <button type="button" class="menu-tab" data-filter="plates" role="tab" aria-selected="false">Plates</button>
        <button type="button" class="menu-tab" data-filter="wraps" role="tab" aria-selected="false">Wraps</button>
        <button type="button" class="menu-tab" data-filter="drinks" role="tab" aria-selected="false">Drinks</button>
      </div>
      <div id="menu-list">
        <article class="menu-card" data-category="kebabs">
          <span class="menu-card__num">01</span>
          <div>
            <h3 class="menu-card__name">Döner Kebab</h3>
            <p class="menu-card__desc">Beef &amp; lamb, flatbread, crisp salad, house sauce</p>
          </div>
          <span class="menu-card__price">CHF 13.50</span>
        </article>
        <article class="menu-card" data-category="kebabs">
          <span class="menu-card__num">02</span>
          <div>
            <h3 class="menu-card__name">Chicken Shwarma</h3>
            <p class="menu-card__desc">Slow-marinated chicken, garlic cream, fresh herbs</p>
          </div>
          <span class="menu-card__price">CHF 14.00</span>
        </article>
        <article class="menu-card" data-category="plates">
          <span class="menu-card__num">03</span>
          <div>
            <h3 class="menu-card__name">Mixed Grill Plate</h3>
            <p class="menu-card__desc">Beef kebab, chicken thigh, lamb chop, saffron rice</p>
          </div>
          <span class="menu-card__price">CHF 22.00</span>
        </article>
        <article class="menu-card" data-category="wraps">
          <span class="menu-card__num">04</span>
          <div>
            <h3 class="menu-card__name">Falafel Wrap</h3>
            <p class="menu-card__desc">Crispy falafel, hummus, pickled veg, tahini</p>
          </div>
          <span class="menu-card__price">CHF 12.00</span>
        </article>
        <article class="menu-card" data-category="wraps">
          <span class="menu-card__num">05</span>
          <div>
            <h3 class="menu-card__name">Lahmacun</h3>
            <p class="menu-card__desc">Thin Turkish pizza, spiced minced meat, lemon</p>
          </div>
          <span class="menu-card__price">CHF 9.50</span>
        </article>
        <article class="menu-card" data-category="plates">
          <span class="menu-card__num">06</span>
          <div>
            <h3 class="menu-card__name">Iskender Plate</h3>
            <p class="menu-card__desc">Sliced döner, tomato sauce, butter, yogurt</p>
          </div>
          <span class="menu-card__price">CHF 19.00</span>
        </article>
        <article class="menu-card" data-category="wraps">
          <span class="menu-card__num">07</span>
          <div>
            <h3 class="menu-card__name">Tacos</h3>
            <p class="menu-card__desc">Seasoned meat, fresh salsa, sour cream, cheese</p>
          </div>
          <span class="menu-card__price">CHF 11.00</span>
        </article>
        <article class="menu-card" data-category="drinks">
          <span class="menu-card__num">08</span>
          <div>
            <h3 class="menu-card__name">Ayran</h3>
            <p class="menu-card__desc">Cold salted yogurt drink</p>
          </div>
          <span class="menu-card__price">CHF 3.50</span>
        </article>
        <article class="menu-card" data-category="drinks">
          <span class="menu-card__num">09</span>
          <div>
            <h3 class="menu-card__name">Turkish Tea</h3>
            <p class="menu-card__desc">Traditional çay in tulip glass</p>
          </div>
          <span class="menu-card__price">CHF 2.50</span>
        </article>
      </div>
    </section>

    <section class="break reveal" aria-labelledby="break-heading">
      <div class="break__overlay"></div>
      <div class="break__content">
        <p class="break__stars" aria-hidden="true">★ ★ ★</p>
        <h2 id="break-heading" class="break__title font-display">Musterwebsite – Platzhalter.</h2>
        <p class="break__tag">Keine Kompromisse. Nur Beispieltext.</p>
      </div>
    </section>

    <section class="section--about reveal" id="about" aria-labelledby="about-heading">
      <span class="about__deco-letter" aria-hidden="true">K</span>
      <div class="about__grid">
        <div class="about__logo-box">
          <div class="wordmark wordmark--about" aria-hidden="true">
            Kebab<span class="wordmark__sub">Musterwebsite</span>
          </div>
        </div>
        <div class="about__body">
          <p class="section-label">Unsere Geschichte</p>
          <h2 id="about-heading" class="font-display">Vom Grill auf den Teller</h2>
          <p>Dies ist eine Musterwebsite ohne Bezug zu einem realen Betrieb. Texte, Preise und Kontaktdaten sind Beispiele und ersetzen keine echten Angaben.</p>
        </div>
      </div>
    </section>

    <section class="section--gallery reveal" id="gallery" aria-labelledby="gallery-heading">
      <header class="section-head">
        <p class="section-label">Aus unserer Küche</p>
        <h2 id="gallery-heading" class="font-display">Ein Einblick in unsere Küche</h2>
      </header>
      <div class="gallery__grid">
        <div class="gallery__item">
          <img src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80" alt="Frischer Döner Kebab – Beispielbild Musterwebsite" width="800" height="600" loading="lazy"/>
          <div class="gallery__overlay"><span class="gallery__label">Der Döner</span></div>
        </div>
        <div class="gallery__item">
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80" alt="Gegrilltes Fleisch – Beispielbild" width="800" height="533" loading="lazy"/>
          <div class="gallery__overlay"><span class="gallery__label">Frisch vom Grill</span></div>
        </div>
        <div class="gallery__item">
          <img src="https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=800&q=80" alt="Hausgemachte Saucen – Beispielbild" width="800" height="600" loading="lazy"/>
          <div class="gallery__overlay"><span class="gallery__label">Hausgemachte Saucen</span></div>
        </div>
        <div class="gallery__item">
          <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80" alt="Frisches Fladenbrot – Beispielbild" width="800" height="600" loading="lazy"/>
          <div class="gallery__overlay"><span class="gallery__label">Unser Brot</span></div>
        </div>
        <div class="gallery__item">
          <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" alt="Frische Zutaten – Beispielbild" width="800" height="600" loading="lazy"/>
          <div class="gallery__overlay"><span class="gallery__label">Frische Zutaten</span></div>
        </div>
        <div class="gallery__item">
          <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80" alt="Gerichte aus der Küche – Beispielbild" width="800" height="534" loading="lazy"/>
          <div class="gallery__overlay"><span class="gallery__label">Familienküche</span></div>
        </div>
      </div>
    </section>

    <section class="section--contact reveal" id="contact" aria-labelledby="contact-heading">
      <header class="section-head">
        <p class="section-label">Kontakt</p>
        <h2 id="contact-heading" class="font-display">Besuchen Sie uns</h2>
      </header>
      <div class="contact__grid">
        <div>
          <table class="hours-table">
            <tbody>
              <tr><th scope="row">Mo–Fr</th><td>11:00 – 22:00</td></tr>
              <tr><th scope="row">Samstag</th><td>11:00 – 23:00</td></tr>
              <tr><th scope="row">Sonntag</th><td>12:00 – 21:00</td></tr>
            </tbody>
          </table>
          <a class="btn btn--whatsapp" href="https://wa.me/41000000000?text=Hallo%20Musterwebsite%20Kebab" target="_blank" rel="noopener noreferrer">Jetzt per WhatsApp bestellen →</a>
        </div>
        <div>
          <div class="contact__map">
            <iframe
              title="Karte – Platzhalter Musterstadt"
              src="https://www.google.com/maps?q=Z%C3%BCrich+HB&amp;output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p class="contact__info">
            <strong>Kebab Musterwebsite</strong><br />
            Musterstrasse 1<br />
            8000 Musterstadt, Schweiz<br />
          </p>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer" role="contentinfo">
    <div class="wordmark wordmark--footer" role="presentation">
      Kebab<span class="wordmark__sub">Musterwebsite · Platzhalter</span>
    </div>
    <div class="footer__social" aria-label="Social Media">
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </a>
    </div>
    <p class="footer__copy">© 2026 Musterwebsite – Platzhalter · keine echten Geschäftsdaten</p>
  </footer>

  <button type="button" class="back-top" id="backTop" aria-label="Nach oben scrollen">↑</button>`;
