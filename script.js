const live = /^0x[0-9a-fA-F]{40}$/.test(CA) && BUY_LINK !== "#";

document.querySelectorAll(".js-ca").forEach((e) => (e.textContent = CA));
document.querySelectorAll(".js-chain").forEach((e) => (e.textContent = CHAIN));
document.querySelectorAll(".js-name").forEach((e) => (e.textContent = NAME));
document.querySelectorAll(".js-symbol").forEach((e) => (e.textContent = SYMBOL));
document.querySelectorAll(".js-x").forEach((a) => {
  a.href = X_LINK;
  a.target = "_blank";
  a.rel = "noopener";
});
document.querySelectorAll(".js-social").forEach((a) => {
  a.href = SOCIAL_LINK;
  a.target = "_blank";
  a.rel = "noopener";
});
document.querySelectorAll(".js-sec").forEach((a) => {
  a.href = SEC_LINK;
  a.target = "_blank";
  a.rel = "noopener";
});

document.querySelectorAll(".js-buy").forEach((a) => {
  if (live) {
    a.href = BUY_LINK;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = "Buy " + SYMBOL;
    a.classList.remove("disabled");
  } else {
    a.href = "#";
    a.classList.add("disabled");
    a.setAttribute("aria-disabled", "true");
    a.textContent = "Buy " + SYMBOL + " · Coming Soon";
    a.onclick = (e) => e.preventDefault();
  }
});

const copyBtn = document.getElementById("copy");
if (copyBtn) {
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(CA).then(() => {
      copyBtn.textContent = "Copied";
      setTimeout(() => (copyBtn.textContent = "Copy CA"), 1500);
    });
  };
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".rv").forEach((el) => io.observe(el));
