import React from "react";
import lunchEnchiladas from "../../appImgs/lunchDinner/lunchEnchiladas.jpg";
import lunchFajitas from "../../appImgs/lunchDinner/lunchFajitas.jpg";
import lunchPlates from "../../appImgs/lunchDinner/lunchPlates.jpg";
import lunchQueso from "../../appImgs/lunchDinner/lunchQueso.jpg";
import lunchSalad from "../../appImgs/lunchDinner/lunchSalad.jpg";
import lunchSides from "../../appImgs/lunchDinner/lunchSides.jpg";
import lunchTacos from "../../appImgs/lunchDinner/lunchTacos.jpg";

import "../menu/Menu.css";

const LunchDinner = () => {
  return (
    <div
      classname="Container"
      style={{ backgroundColor: "white", color: "black" }}
    >
      <h1 className="mainMenuHeader">LUNCH AND DINNER</h1>
      <div className="lunchDinner">
        <div className="starters whiteBackground">
          <div className="startersImg menuSectionImg ">
            <img className="img" src={lunchQueso} alt="" />
          </div>
          <div className="menuInfo">
            <h1 className="sectionHeader">STARTERS</h1>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">GRILLED PADRON PEPPERS</h4>
              <h5>
                {`mesquite grilled spanish chiles, smoked salt, carrots, heirloom tomatoes, adobo-citrus glaze`}
              </h5>
              <h6>(527-947)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">{`QUESO BLANCO & ROASTED SALSA`}</h4>
              <h5>
                {`tres mexican cheeses, toasted dried chile, taste of guac, cilantro`}
              </h5>
              <h6>(486-906)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">GUACAMOLE</h4>
              <h5>{`avocado, red onion, cilantro, queso fresco, chile, lime`}</h5>
              <h6>(978)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">AREPAS</h4>
              <h5>
                {`griddled corn cakes, slow roasted barbacoa, slaw, cilantro crema `}
              </h5>
              <h6>(800)</h6>
            </div>
          </div>
        </div>
        <div className="salads blackBackground">
          <div className="liteBitesImg menuSectionImg order2">
            <img className="img" src={lunchSalad} alt="" />
          </div>
          <div className="menuInfo order1">
            <h1 className="sectionHeader">SALADS</h1>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">SHRIMP AVOCADO & LIME</h4>
              <h5>
                {`grilled shrimp, mixed greens, piquillo peppers, corn, grape tomatoes, avocado, queso fresco, tortilla crisps, pepitas, cilantro-lime vinaigrette`}
              </h5>
              <h6>(787)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">MANGO NAPA CHICKEN</h4>
              <h5>
                {`grilled chicken, napa, baby kale, mango, avocado, carrot, jicama, toasted coconut, spiced cashew, tomato, mojo vinaigrette`}
              </h5>
              <h6>(835)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">{`GRILLED ROMAINE & SKIRT STEAK`}</h4>
              <h5>
                {`mesquite grilled skirt, queso fresco, chile bacon, green onion, grape tomato, carrot, pickled red onion, latin green goddess`}
              </h5>
              <h6>(1227)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">SOUP AND SALAD</h4>
              <h5>{`cup of soup and your choice of any half salad`}</h5>
              <h6>(798)</h6>
            </div>
          </div>
        </div>
        <div className="fajitas whiteBackground">
          <div className="fajitasImg menuSectionImg">
            <img className="img" src={lunchFajitas} alt="" />
          </div>
          <div className="menuInfo">
            <div className="eachMenuItem">
              <h1 className="sectionHeader">Fajitas</h1>
              <h5>
                {`grilled baby sweet bell peppers & grilled onions, cilantro rice, black beans, pickled onions, queso fresco, guacamole, hand pressed corn tortillas`}
              </h5>
              <h6>(1000 - 1200)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">MESQUITE GRILLED CHICKEN</h4>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">ADOBO GRILLED SKIRT STEAK</h4>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">
                GRILLED CHICKEN AND SKIRT STEAK COMBO
              </h4>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">GRILLED GULF SHRIMP</h4>
            </div>
          </div>
        </div>
        <div className="tacos blackBackground">
          <div className="tacosImg menuSectionImg order2">
            <img className="img" src={lunchTacos} alt="" />
          </div>
          <div className="menuInfo">
            <h1 className="sectionHeader">TACOS</h1>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">BRASAS CHICKEN</h4>
              <h5>
                {`grilled chicken, salsa, roasted corn pico, queso blanco, chipotle crema, queso fresco, micro cilantro`}
              </h5>
              <h6>(497)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">SPICY HABANERO CHICKEN</h4>
              <h5>
                {`poached eggs*, fresh spinach, toasted english muffin, creamy hollandaise, diced tomato & feta. choice of side`}
              </h5>
              <h6>(535)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">CARNE ASADA</h4>
              <h5>
                {`wood grilled skirt steak, pickled radish, chimichurri, arugula, manchego cheese, tomato-mango pico, cilantro`}
              </h5>
              <h6>(890)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">BARBACOA</h4>
              <h5>
                {`slow roasted brisket, salsa verde, corn salad, queso fresco`}
              </h5>
              <h6>(890)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">PESCADO</h4>
              <h5>
                {`adobo marinated rockfish, avocado spread, kale, apple slaw, pickled onion, mojo vinaigrette, lima crema, mango pico, micro cilantro, hibiscus tortillas`}
              </h5>
              <h6>(890)</h6>
            </div>
          </div>
        </div>
        <div className="plates whiteBackground">
          <div className="platesImg menuSectionImg">
            <img className="img" src={lunchPlates} alt="" />
          </div>
          <div className="menuInfo">
            <h1 className="sectionHeader">PLATES</h1>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">MESQUITE CHICKEN</h4>
              <h5>{`boneless breast, avocado, pickled red onion, queso fresco, salsa verde, heirloom tomato salad`}</h5>
              <h6>(747)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">GULF RED SNAPPER FILLET</h4>
              <h5>
                {`pan roasted fillet, hearts of palm citrus-fennel salad, pasilla-sherry emulsion`}
              </h5>
              <h6>(632)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">BONE-IN PORK CHOP</h4>
              <h5>{`chile brined & slow roasted, charred tri-colored cauliflower & carrots, orange-agave butter`}</h5>
              <h6>(800)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">MESQUITE GRILLED SALMON</h4>
              <h5>{`latin corn succotash, creamy poblano corn`}</h5>
              <h6>(1030)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">TORTA AHOGADA</h4>
              <h5>
                {`barbacoa, black bean purée, avocado spread, cilantro, pickled red onion, crispy baguette, spicy tomato broth`}
              </h5>
              <h6>(1030)</h6>
            </div>
          </div>
        </div>
        <div className="enchiladas blackBackground ">
          <div className="enchiladasImg menuSectionImg order2">
            <img className="img" src={lunchEnchiladas} alt="" />
          </div>
          <div className="menuInfo">
            <h1 className="sectionHeader">ENCHILADAS</h1>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">ROASTED CHICKEN</h4>
              <h5>
                {`manchego cheese, queso blanco, salsa verde, salsa roja, pico de gallo, black beans, cilantro-lime rice`}
              </h5>
              <h6>(623)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">MESQUITE GRILLED STEAK</h4>
              <h5>
                {`skirt steak, manchego cheese, chimichurri, mango-tomato pico, salsa verde, salsa roja, black beans, cilantro-lime rice`}
              </h5>
              <h6>(747)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">JUMBO LUMP CRAB</h4>
              <h5>
                {`roasted corn, queso fresco, pico de gallo, poblano crema, salsa roja, black beans, cilantro-lime rice`}
              </h5>
              <h6>(978)</h6>
            </div>
          </div>
        </div>
        <div className="sides whiteBackground">
          <div className="sidesImg menuSectionImg">
            <img className="img" src={lunchSides} alt="" />
          </div>
          <div className="menuInfo">
            <h1 className="sectionHeader ">SIDES</h1>
            <div className="eachMenuItem">
              <h4>CILANTRO FINGERLING PAPAS</h4>
              <h6>(444)</h6>
            </div>
            <div className="eachMenuItem">
              <h4>ELOTE 'STREET STYLE CORN' </h4>
              <h6>(603)</h6>
            </div>
            <div className="eachMenuItem">
              <h4>CILANTRO LIME RICE</h4>
              <h6>(406)</h6>
            </div>
            <div className="eachMenuItem">
              <h4>LATIN CORN SUCCOTASH</h4>
              <h6>(530)</h6>
            </div>
            <div className="eachMenuItem">
              <h4>CAULIFLOWER AND CARROTS</h4>
              <h6>(530)</h6>
            </div>
            <div className="eachMenuItem">
              <h4>APPLE SLAW</h4>
              <h6>(530)</h6>
            </div>
            <div className="eachMenuItem">
              <h4>HEIRLOOM TOMATO SALAD</h4>
              <h6>(530)</h6>
            </div>
            <div className="eachMenuItem">
              <h4>GRILLED ASPARAGUS</h4>
              <h6>(530)</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LunchDinner;
