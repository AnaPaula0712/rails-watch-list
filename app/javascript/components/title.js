import Typed from 'typed.js';

const loadDynamicListTitle = () => {
  new Typed('#title-typed-text', {
    strings: ["Agora é só pegar a pipoca e relaxar!"],
    typeSpeed: 90,
    loop: true
  });

}

export { loadDynamicListTitle }
