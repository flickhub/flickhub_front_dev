import { responseObj, commentsObj } from "./network";
import { icons } from "../constants/icons";

export const theWitcher = new responseObj(
         "The Witcher (2019-)",
         "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.Creator: Lauren Schmidt Stars: Henry Cavill, Freya Allan, Anya Chalotra",
         {
           icons: {
             netflixIcon: icons.netflixIcon,
             rottenTomatoesIcon: icons.rottenTomatoes,
             imdbIcon: icons.imdbIcon,
           },
           netflix: "https://www.netflix.com/title/70143822",
           imdb: "https://www.imdb.com/title/tt5753856/",
           rottenTomatoes: "https://www.rottentomatoes.com/tv/dark",
           youtube: "https://www.youtube.com/embed/ndl1W4ltcmg",
         },
         "https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
         "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.",
         "Creators: Baran bo Odar, Jantje Friese",
         "Stars: Karoline Eichhorn, Louis Hofmann, Jördis Triebel"
       );

export const mindHunter = new responseObj(
         "Mindhunter(2017-2019)",
         " Set in the late 1970s, two FBI agents are tasked with interviewing serial killers to solve open cases. ",
         {
           icons: {
             netflixIcon: icons.netflixIcon,
             rottenTomatoesIcon: icons.rottenTomatoes,
             imdbIcon: icons.imdbIcon,
           },
           netflix: "https://www.netflix.com/title/80114855",
           imdb: "https://www.imdb.com/title/tt5290382/",
           rottenTomatoes: "https://www.rottentomatoes.com/tv/mindhunter",
           youtube: "https://www.youtube.com/embed/oFlKiTwhd38",
         },
         "https://m.media-amazon.com/images/M/MV5BNWNmYzQ1ZWUtYTQ3ZS00Y2UwLTlkMDctZThlOTJkMGJiNzBiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
         " Set in the late 1970s, two FBI agents are tasked with interviewing serial killers to solve open cases. ",
         " Creator: Joe Penhall ",
         "Stars: Jonathan Groff, Holt McCallany, Anna Torv "
       );

export const twoAndAHalfMen = new responseObj(
         "Two And a Half Men(2003-2015)",
         " A hedonistic jingle writer's free-wheeling life comes to an abrupt halt when his brother and 10-year-old nephew move into his beach-front house. ",
         {
           icons: {
             netflixIcon: icons.netflixIcon,
             primeVideoIcon: icons.primeVideoIcon,
             rottenTomatoesIcon: icons.rottenTomatoes,
             imdbIcon: icons.imdbIcon,
           },
           netflix: "https://www.netflix.com/title/70143822",
           primeVideo:
             "https://www.primevideo.com/detail/0GM6ZNFEBHZFBA5KY9J4CIP4OU/ref=atv_dp_amz_det_c_Iw3Dma_1_1",
           imdb: "https://www.imdb.com/title/tt0369179/",
           rottenTomatoes:
             "https://www.rottentomatoes.com/tv/two_and_a_half_men",
           youtube: "https://www.youtube.com/embed/097pUW0L_Xc",
         },
         "https://vignette.wikia.nocookie.net/twohalfmen/images/4/40/Taahm-season9-pre.jpg/revision/latest?cb=20110818162606",
         "A hedonistic jingle writer's free-wheeling life comes to an abrupt halt when his brother and 10-year-old nephew move into his beach-front house. ",
         " Creators: Lee Aronsohn, Chuck Lorre ",
         " Stars: Jon Cryer, Ashton Kutcher, Angus T. Jones " 
       );

export const tbbt = new responseObj(
         "The Big Bang Theory Show(2007-2019)",
         " A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory. ",
         {
           icons: {
             netflixIcon: icons.netflixIcon,
             primeVideoIcon: icons.primeVideoIcon,
             hotstarIcon: icons.hotstarIcon,
             rottenTomatoesIcon: icons.rottenTomatoes,
             imdbIcon: icons.imdbIcon,
           },
           netflix: "https://www.netflix.com/title/70143830",
           primeVideo:
             "https://www.amazon.com/Big-Bang-Theory-Complete-Season/dp/B000VZYPB4",
           hotstar: "https://www.hotstar.com/in",
           imdb: "https://www.imdb.com/title/tt0369179/",
           rottenTomatoes:
             "https://www.rottentomatoes.com/tv/two_and_a_half_men",
           youtube: "https://www.youtube.com/embed/3g2yTcg1QFI",
         },
         "https://vignette.wikia.nocookie.net/bigbangtheory/images/f/f3/Big_bang_theory_poster.jpg/revision/latest/scale-to-width-down/340?cb=20090218074507",
         " A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory. ",
         " Creators: Chuck Lorre, Bill Prady ",
         " Stars: Johnny Galecki, Jim Parsons, Kaley Cuoco  "
       );

export const titles = () => {
   const titlesArray = [
     theWitcher,
     mindHunter,
     twoAndAHalfMen,
     tbbt,
     theWitcher,
     mindHunter,
   ];

   return titlesArray
}


export const theWitcherCommentsArray = () => {
  const comment1 = new commentsObj(
    "I highly recommend this show. I don't want to compare it to any other show but it reminded me of Twin Peaks in terms of its darkness. Each episode raises audiences' suspense, which is a good thing. However, you should note every character's name on a paper, prepare a family tree otherwise it will be harder to remember. Great show!!",
    "gamzeyilmazcan8"
  );

  const comment2 = new commentsObj(
    "This show is the best thing Netflix has done. It is an absolute masterpiece of story telling.",
    "sliterjacob-163-407746"
  );
  const comment3 = new commentsObj(
    "Insanely good, every episode shocks you in ways you never thought was possible. The constant gripping revelations were so unexpected but tied the story so well together. Exceptional and convincing acting skills by the entire cast and tons of heartfelt scenes between different character dynamics. This show is the perfect epitome of a well thought out show that knows where it's trying to advance it's story. Perhaps one of the best TV shows of our time. Cannot wait for the next season!",
    "savindri"
  );

  let comments = [];

  comments.push(comment1);
  comments.push(comment2);
  comments.push(comment3);

  return comments;
};
