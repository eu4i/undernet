import { d as attr_style, f as slot, h as stringify, i as attr, j as ensure_array_like, k as attr_class, e as escape_html, c as pop, p as push, l as head } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import "swiper/element/bundle";
import "clsx";
function RandomLogo($$payload, $$props) {
  const logoBackgrounds = [
    "2_1.gif",
    "3_1.gif",
    "2_3.gif",
    "3_3.gif",
    "3_4.gif",
    "3_2.gif"
  ];
  const randomLogoBackground = logoBackgrounds[Math.floor(Math.random() * logoBackgrounds.length)];
  const logoBackgroundUrl = `${base}/images/logo_bg/${randomLogoBackground}`;
  $$payload.out += `<div${attr_style(`background-image: url(${stringify(logoBackgroundUrl)}); background-size: cover; background-position: center; background-repeat: no-repeat;`)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
}
function Logo($$payload) {
  $$payload.out += `<div class="logo-container svelte-1ozem14"><img${attr("src", `${stringify(base)}/images/logo_default.png`)} alt="Logo" class="svelte-1ozem14"></div>`;
}
function CDSlider_1($$payload, $$props) {
  push();
  const discs = [
    {
      id: "DISC11BTN",
      label: "DISC 1.1",
      img: "cd11"
    },
    {
      id: "DISC21BTN",
      label: "DISC 2.1",
      img: "cd21"
    },
    {
      id: "DISC22BTN",
      label: "DISC 2.2",
      img: "cd22"
    },
    {
      id: "DISC23BTN",
      label: "DISC 2.3",
      img: "cd23"
    },
    {
      id: "DISC31BTN",
      label: "3.1:SURGE",
      img: "cd31"
    },
    {
      id: "DISC32BTN",
      label: "3.2:RAPTURE",
      img: "cd32"
    },
    {
      id: "DISC33BTN",
      label: "3.3:SHIMMER",
      img: "cd33"
    },
    {
      id: "DISC34BTN",
      label: "3.4:ECCENTRICS",
      img: "cd34"
    }
  ];
  let selectedId = null;
  const each_array = ensure_array_like(discs);
  $$payload.out += `<swiper-container effect="cards" grab-cursor="true" centered-slides="true" loop="false" mousewheel="true" keyboard="true" class="mySwiper svelte-16yk1bo" slideShadow="true"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let disc = each_array[$$index];
    $$payload.out += `<swiper-slide class="svelte-16yk1bo"><div${attr("id", disc.id)}${attr_class(`cdbutton ${stringify(selectedId === disc.id ? "spin" : "")}`, "svelte-16yk1bo")}><div class="layer case svelte-16yk1bo"${attr_style(`background-image: url('${base}/images/${disc.img}_case.png'); opacity: ${selectedId === disc.id ? 0 : 1};`)}></div> <div class="layer disc svelte-16yk1bo"${attr_style(`background-image: url('${base}/images/${disc.img}.png'); opacity: ${selectedId === disc.id ? 1 : 0};`)}></div> ${escape_html(disc.label)}</div></swiper-slide>`;
  }
  $$payload.out += `<!--]--></swiper-container>`;
  pop();
}
function Artists($$payload, $$props) {
  push();
  $$payload.out += `<div><wrapper class="member-wrapper svelte-10muefg"><wrapper class="member-card-wrapper svelte-10muefg"><div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div> <div class="member-card svelte-10muefg"></div></wrapper> <wrapper class="member-profile svelte-10muefg"></wrapper></wrapper></div>`;
  pop();
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>under.net</title>`;
    $$payload2.out += `<link rel="icon"${attr("href", `${stringify(base)}/images/loading.png`)}> <meta name="darkreader-lock">`;
  });
  $$payload.out += `<div class="main-content"${attr_style("background-image: url('" + base + "/images/background_test.png'); background-size: cover; background-repeat: no-repeat; background-position: center; background-color: #181818;")}><section id="main-container"><div class="header-container"><div class="window" id="logo-container">`;
  RandomLogo($$payload, {
    children: ($$payload2) => {
      Logo($$payload2);
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="window" id="nextologo-container"><ul class="nav-menu"><li class="header-item"><button class="nav-button"></button></li> <li class="header-item"><button class="nav-button">󰓃</button></li> <li class="header-item"><button class="nav-button">󰒚</button></li> <li class="header-item"><button class="nav-button">󰤉</button></li> <li class="header-item"><button class="nav-button">󰋼</button></li></ul></div></div> <div class="content-wrapper"><div class="content-window" id="music-player"></div> <div${attr_class(`content-window ${stringify("hidden")}`)} id="player-container"><div class="window" id="video-container"></div> <div class="lower-music-content"><div id="cdslider-container">`;
  CDSlider_1($$payload);
  $$payload.out += `<!----></div> <div class="window" id="track-container"></div></div></div> <div${attr_class(`content-window ${stringify("")}`)} id="members-container">`;
  Artists($$payload);
  $$payload.out += `<!----></div> <div${attr_class(`content-window ${stringify("hidden")}`)} id="merch-container"></div> <div${attr_class(`content-window ${stringify("hidden")}`)} id="social-container"></div> <div${attr_class(`content-window ${stringify("hidden")}`)} id="about-container"></div></div></section></div>`;
}
export {
  _page as default
};
