export const getPosts = () => {
  return [
    {
      title: "Yüksek Lisans, Erasmus ve Salsa :)",
      slug: "yl-erasmus-salsa",
      details: require("./posts/yles.md").default,
      date: "23 Ocak 2020"
    },
    {
      title: "1500TL ödül! Sen de yarışmaya katıl!",
      slug: "yarisma",
      details: require("./posts/yarisma.md").default,
      date: "5 Aralık 2019"
    },
    {
      title: "Örnek yazı",
      slug: "ornek-yazi",
      details: require("./posts/ornek-yazi.md").default,
      date: "3 Aralık 2019"
    },
    {
      title: "Merhaba dünya!",
      slug: "merhaba",
      details: require("./posts/merhaba.md").default,
      date: "1 Aralık 2019"
    }
  ];
};
