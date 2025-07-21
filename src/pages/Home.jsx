import Footer from "../components/Footer";
import Header from "../components/Header";
import websiteImg from "../imgs/website.png";
import communityImg from "../imgs/community.png";
import scriptImg from "../imgs/script.png";
import adsImg from "../imgs/ads.png";
import '../styles/Home.min.css';

const serviceCards = [
  {
    id: 1,
    imgSrc: websiteImg,
    imgAlt: "Création de Site Web",
    title: "Création de Site Web",
    text: "Nous créons votre site de A à Z, le design, le développement, la publication et son référencement pour vous créer une présence en ligne professionel qui vous permettra d'avoir une bonne image de marque.",
    link: "https://google.com",
  },
  {
    id: 2,
    imgSrc: communityImg,
    imgAlt: "Community Management",
    title: "Community Management",
    text: "Nous gérons votre présence sur les réseaux sociaux, en créant une stratégie efficace et du contenu engageant pour renforcer votre image de marque et établir des liens solides avec votre communauté.",
    link: "https://google.com",
  },
  {
    id: 3,
    imgSrc: adsImg,
    imgAlt: "Campagne Publicitaire",
    title: "Campagne Publicitaire",
    text: "Nous gérons vos campagnes publicitaires, notament sur les réseaux sociaux (création du visuel video, image, photo), mise en place de la campagne publicitaire en ligne et enfin analyse des résultats.",
    link: "https://google.com",
  },
  {
    id: 4,
    imgSrc: scriptImg,
    imgAlt: "Développement FiveM",
    title: "Développement FiveM",
    text: "Nous développons et personnalisons votre serveur FiveM selon vos besoins : scripts sur-mesure, optimisation des performances, etc..., pour offrir une expérience de jeu fluide et professionnelle à votre communauté.",
    link: "https://google.com",
  },
];

const Home = () => {
  return (
    <div className="app">
      <Header />
      <section id="home">
        <h1>ALDES Consutling,<br />Agence de Marketing Digital</h1>
        <h2>Une agence à l'écoute de vos besoins. Vous gagnez, nous gagnons !</h2>
        <a href="">Découvrir ALDES Consulting</a>
      </section>
      <section id="services">
        <h2>Nos services</h2>
        <section id="services-cards">
          {serviceCards.map((card) => (
            <div key={card.id} className={`service-card service-card-${card.id}`}>
              <img className="service-card-img" src={card.imgSrc} alt={card.imgAlt} />
              <h3 className="service-card-title">{card.title}</h3>
              <p className="service-card-text">{card.text}</p>
              <a className="service-card-link" href={card.link}>En savoir plus</a>
            </div>
          ))}
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Home;





//  .:.                            .-++=                                       
// -###*-                         -*####-                                      
// *#####*:                     .+##***#=                                      
// ***#####+.                  :####***#=                                      
// *****####*-               .=####*****-                                      
// =****####%#*-.......:...:-*###***+*+*.         ...                          
// .*******###**+====::-===+******++++++      :=******++-.                     
//  +**+*++****+++=-=::---===+++++++++*+    .=*####******+:                    
//  =#**+++++++++++==--==-=++===+++****-    :*######*******-                   
//  :*#*++*+++==++==+======++=-====++**.    .-*###**********:                  
//   +**++++++==+++++======++++==-===+=       .-+++++*******+.                 
//   :==+++++++++**++===++++++**+====-:.           .=**##****:                 
//  .-=++++*##%##***+=====-+#%+**+=--:::           .+*######*:                 
//  :=+++===*+##*#==+==--:-=-#*-+-=---:-.          =*#######*-                 
//  +++++==---===#*=+===-:=+:---===-:---:         :+*######**-                 
//  +*++++==---::-===--:---::--====----=-        .+*###**#**-                  
//  =***+*+++==----=+==+=+-:--=+==-----=:       :+#####****+:                  
//  .++++++++++=---=#%###+-::-====-==--=.      -*######****+.                  
//   -*++***+++=---=-+##+--:-----+++===:     .=*########**=.                   
//   .+******+=+=+====+*==--++=--===++=:    :+#######****=.                    
//    -***+++++*+==++**#*+++++*===+++*+-. .=*######******:                     
//     =**##**++**+****+*#****++++++++-==:*#######*****=.                      
//     .+**#*+*+*****++++****+++*+--=====-=*#***####**+.                       
//     .=+++=*+++*+***++++*+*+++==+==+=++=-=******##*-.                        
//     :#*==++*+***###*####***+*+++**++===--+****#*+.                          
//     =#++**+***#############****+**+===--==**##*=.                           
//     =**##***################**+*+*++==-===***=.                             
//     -*###*#*###%%%#####%####****++++==--====:                               
//     =*###*#*####%%##########***+*+++=---=+-                                 
//    .+*#####*##############*****+*+++===-=*-                                 
//    :**##*##*############*******++++======*=                                 
//    :*****###*##########*******++++++=====*+                                 
//    :******##*#########*****+**++++=======*+                                 
//    .+*********#*********+++++*+++++======*+                                 
//    .+****+*****************++**++========*+.                                
//     =*************#*******+*++++++=======++:                                
//     =+******************+++++++++=+======++:                                
//     -+*+***************++++++++++++======++-                                
//     :+**+******++*+++++++++++++++++=++===+=-                                
//     -+*************++++++++++++++++======+=:                                
//     :**+***********+++************+====+===.                                
//     .+*++******************#****++++==+*+=-                                 
//      :*++*************************++===++-.                                 
//       +*+*****************##*******+==++=:                                  
//       -*+******#****##***#####*#**++==++=.                                  
//       :******###**##############***+=-++-                                   
//        +*******######*#####*++++++++===+:                                   
//        :***#####%%###*******++****++====.                                   
//        .+**###%#%%%##****+*+++*****+===-                                    
//         -***#####%%##****++*+**#***+===:                                    
//          =**#####%%##++**++**##***+=-==.                                    
//          :***#####%#*+*#*++**##**+++===.                                    
//          .+*****####*+###*++*****+====-                                     
//           -*****####**###+=++***++=+==:                                     
//           .+**********%%#*=++***+++=+=.                                     
//            -+***+*****%%%#==+*+++++==-                                      
//            .=********+%%%#==***+==++=.                                      
//             :++*+++**+#%%#=++*++====:                                       
//             .=++++***++%%*=+***+=-==.                                       
//              =++++***++##+++***+=---                                        
//              :+++*****=*#+==+*++=--:                                        
//              :=+**####*+#+=+***+=--:                                        
//              .=***###%#**=+****+==-:                                        
//              =++**####%*+=+++*#***+:                                        
//             .++*######%#==++#+***+==:                                       
//             .****#**###*-=**#*##**+==.                                      
//              ....::::::--=********+==.                                      
//                         .::----=--:..                                       
