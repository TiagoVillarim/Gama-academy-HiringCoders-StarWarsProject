import backgroundTwo from '../../../assets/images/background/stormtrooper.png';
import darthVaderFloat from '../../../assets/images/elements/darthVaderFloat.png';
import deathStar from '../../../assets/images/elements/deathStar.png'

let footerText = `Star wars  -  this is a project made in gama academy to pratice and learn ! `

let textContent = `Lucas ipsum dolor sit amet luke sidious jango cade mace palpatine jawa wookiee wookiee kashyyyk. Dantooine calrissian r2-d2 calamari coruscant skywalker ewok. Darth fett moff endor twi'lek windu obi-wan luuke. Alderaan hutt hoth moff zabrak moff organa calamari. Ackbar mustafar wedge padmé mandalorians solo secura moff jar. Jawa luuke hutt organa jango jinn. Boba jabba kenobi moff luuke qui-gonn thrawn. Twi'lek yoda mace luke vader boba. Mace kessel darth antilles jabba. Luke hoth organa leia anakin skywalker leia ponda.
`
let textContent2 = `Moff ahsoka yavin calamari. Chewbacca skywalker yoda organa kit organa. Hutt hutt twi'lek binks. Amidala darth lando mon. Grievous solo secura mandalore bespin chewbacca sebulba cade. Gamorrean palpatine organa organa yoda hutt antilles. C-3p0 luke skywalker luke mara mara gonk antilles gamorrean. Mara moff wookiee jinn dantooine skywalker qui-gon. Kashyyyk c-3po watto organa. Droid tusken raider aayla moff thrawn darth tusken raider. Binks cade antilles ahsoka. Yoda c-3p0 dantooine antilles secura organa calamari.`

let HomeSectionTwo = `
<section id="StormTrooperFim" class="section background--two" style="background-image: url(${backgroundTwo})">
   <div class=" container block-section--two">
        <img src=${darthVaderFloat} alt="dathVaderLogo"/>

        <div class="text-block--two">
          <p>${textContent}</p>
          <br>
          <p> ${textContent2}</p>
        </div>
   </div>

   <div class="block-section">  
     <div class="footer-container">
          <p>
               ${footerText}
          </p>
          <a href="#DarthVaderInício">
          <img src=${deathStar} alt="deathStar" width="auto" heigth="180px"/>
     </div>

   </div>
</section>
`

export default HomeSectionTwo;