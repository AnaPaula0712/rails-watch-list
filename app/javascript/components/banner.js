import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Um grande acervo de filmes!"],
    typeSpeed: 75,
    loop: true
  });

}

export { loadDynamicBannerText }
