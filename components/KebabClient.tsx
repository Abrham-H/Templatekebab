"use client";

import { useEffect } from "react";

export function KebabClient() {
  useEffect(() => {
    const ac = new AbortController();
    const { signal } = ac;

    const siteNav = document.getElementById("siteNav");
    const navToggle = document.getElementById("navToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const backTopBtn = document.getElementById("backTop");
    if (
      !(siteNav instanceof HTMLElement) ||
      !(navToggle instanceof HTMLElement) ||
      !(mobileMenu instanceof HTMLElement) ||
      !(backTopBtn instanceof HTMLElement)
    ) {
      return;
    }

    const navRoot = siteNav;
    const toggleBtn = navToggle;
    const menuOverlay = mobileMenu;
    const backTopEl = backTopBtn;

    function setNavScrolled() {
      if (window.scrollY > 24) navRoot.classList.add("is-scrolled");
      else navRoot.classList.remove("is-scrolled");
    }

    function closeMobile() {
      menuOverlay.classList.remove("is-open");
      toggleBtn.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
      menuOverlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    function openMobile() {
      menuOverlay.classList.add("is-open");
      toggleBtn.classList.add("is-open");
      toggleBtn.setAttribute("aria-expanded", "true");
      menuOverlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    setNavScrolled();
    const onScroll = () => {
      setNavScrolled();
      if (window.scrollY > 400) backTopEl.classList.add("is-visible");
      else backTopEl.classList.remove("is-visible");
    };
    window.addEventListener("scroll", onScroll, { passive: true, signal });

    const onToggle = () => {
      if (menuOverlay.classList.contains("is-open")) closeMobile();
      else openMobile();
    };
    toggleBtn.addEventListener("click", onToggle, { signal });

    menuOverlay.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", closeMobile, { signal });
    });

    backTopEl.addEventListener(
      "click",
      () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      { signal }
    );

    const tabs = document.querySelectorAll(".menu-tab");
    const cards = document.querySelectorAll(".menu-card");
    tabs.forEach((tab) => {
      tab.addEventListener(
        "click",
        () => {
          const f = tab.getAttribute("data-filter");
          tabs.forEach((t) => {
            t.classList.toggle("is-active", t === tab);
            t.setAttribute("aria-selected", t === tab ? "true" : "false");
          });
          cards.forEach((card) => {
            const cat = card.getAttribute("data-category");
            const show = f === "all" || cat === f;
            (card as HTMLElement).hidden = !show;
          });
        },
        { signal }
      );
    });

    const reveals = document.querySelectorAll(".reveal");
    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("is-visible");
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      reveals.forEach((el) => io!.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("is-visible"));
    }

    return () => {
      io?.disconnect();
      ac.abort();
    };
  }, []);

  return null;
}
