// LISTA DEFINIDA DENTRO DO PROGRAMA
// Chave: o que o usuário digita no ProtonDB
// Valor: o nome do arquivo final no seu blog
const redirects = {
  "american-mcgees-alice-2000": "american-mcgees-alice-2000",
  "atomic bomberman": "atomic-bomberman-1997",
  "better gh 3": "better-gh-3",
  "better gh3": "better-gh-3",
  "clone hero": "clone-hero",
  "gh 3": "better-gh-3",
  "gh3": "better-gh-3",
  "guitar hero 3": "better-gh-3",
  "malody": "malody",
  "pod gold": "pod-gold-1997",
  "queen of heart 99": "the-queen-of-heart-99",
  "spider man 2 the game": "spider-man-2-game-2004",
  "spider-man 2 the game": "spider-man-2-game-2004",
  "spider-man 2: the game": "spider-man-2-game-2004",
  "spider-man 2the game": "spider-man-2-game-2004",
  "stunt gp": "stunt-gp",
  "swat elite force": "swat-elite-force",
  "the queen of heart '99": "the-queen-of-heart-99",
  "the simpsons: hit & run": "the-simpsons-hit-run-2003",
  "the simpsons: hit run": "the-simpsons-hit-run-2003",
  "y8 games": "y8-games",
  "y8games": "y8-games",
  "you are empty": "you-are-empty-2006"
  "gp 500": "gp-500",
  "halo zero": "halo-zero",
  "portondb": "site",
  "the house of dead III": "the-house-of-dead-iii",
  "the house of dead lll": "the-house-of-dead-iii",
   "the house of dead 3": "the-house-of-dead-iii",
  "tibia": "tibia",
  "sonic riders x": "sonic-riders-x",
  "the house of dead 2": "the-house-of-dead-2",
  "the house of dead ll": "the-house-of-dead-2",
  "the house of dead II": "the-house-of-dead-2",
  "adrenalin extreme show": "adrenalin-extreme-show",
  "adrenalin: extreme show": "adrenalin-extreme-show",
  "the house of dead": "the-house-of-dead",
  "Power Rangers: Super Legends - 15th Anniversary": "power-rangers-super-legends-15th",
  "Power Rangers: Super Legends": "power-rangers-super-legends-15th",
  "power rangers: super legends - 15th anniversary": "power-rangers-super-legends-15th",
  "power rangers: super legends 15th anniversary": "power-rangers-super-legends-15th",
  "power rangers: super legends": "power-rangers-super-legends-15th",
  "sonic mega collection plus": "sonic-mega-collection-plus",
  "sonic knuckles collection": "sonic-knuckles-collection",
  "sonic & knuckles collection": "sonic-knuckles-collection",
  
  // Adicione quantos quiser seguindo o padrão "termo": "link" ("portondb": "site",)
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Detecta quando a URL de busca do ProtonDB é acessada
  if (changeInfo.url && changeInfo.url.includes("protondb.com/search?q=")) {
    
    try {
      const url = new URL(changeInfo.url);
      const searchQuery = decodeURIComponent(url.searchParams.get('q')).toLowerCase().trim();

      if (searchQuery && redirects[searchQuery]) {
        const fileName = redirects[searchQuery];
        // URL fixa do seu blog
        const targetUrl = `https://protondbplus.blogspot.com/2026/02/${fileName}.html`;
        
        chrome.tabs.update(tabId, { url: targetUrl });
      }
    } catch (e) {
      console.error("Erro no redirecionamento:", e);
    }
  }
});
