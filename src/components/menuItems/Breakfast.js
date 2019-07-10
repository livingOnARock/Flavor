import React from "react";
import "../menu/Menu.css";
import breakfastCombos from "../../appImgs/breakfast/breakfastCombos.jpg";
import breakfastSandwich from "../../appImgs/breakfast/breakfastSandwich.jpg";
import breakfastOats from "../../appImgs/breakfast/breakfastOats.jpg";
import breakfastBenedict from "../../appImgs/breakfast/breakfastBenedict.jpg";
import breakfastOmelettes from "../../appImgs/breakfast/breakfastOmelettes.jpg";
import breakfastTaco from "../../appImgs/breakfast/breakfastTaco.jpg";
import breakfastFrenchtoast from "../../appImgs/breakfast/breakfastFrenchtoast.jpg";

const Breakfast = () => {
  return (
    <div
      classname="Container"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <h1 className="mainMenuHeader">BREAKFAST</h1>

      <div className="breakfast">
        <div className="combos blackBackground">
          <div className="combosImg menuSectionImg order2">
            <img className="img" src={breakfastCombos} alt="" />
          </div>
          <div className="menuInfo order1">
            <h1 className="sectionHeader">COMBOS</h1>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Our Famous Hearty Breakfast</h4>
              <h5>
                {`two eggs*, buttermilk pancakes, choice of bacon, sausage or ham, &
            your choice of side`}
              </h5>
              <h6>(527-947)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Big Bite Breakfast</h4>
              <h5>
                {`two eggs*, choice of bacon, sausage or ham, choice of side & toast`}
              </h5>
              <h6>(486-906)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">King CFS</h4>
              <h5>
                {`hand breaded chicken fried steak, sausage gravy, two eggs*, choice of side & toast`}
              </h5>
              <h6>(978)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Meat Lover’s Breakfast</h4>
              <h5>
                {`two eggs*, bacon, ham and sausage, choice of side & toast `}
              </h5>
              <h6>(800)</h6>
            </div>
          </div>
        </div>
        <div className="specialties whiteBackground">
          <div className="specialtiesImg menuSectionImg ">
            <img className="img" src={breakfastSandwich} alt="" />
          </div>
          <div className="menuInfo">
            <h1 className="sectionHeader">SPECIALTIES</h1>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Loaded Hash Browns</h4>
              <h5>
                {`golden-crispy hash browns, topped with two eggs*, sausage gravy, cheese and sautéed onion. served with toast`}
              </h5>
              <h6>(787)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Big Breakfast Sandwich</h4>
              <h5>
                {`two over-hard eggs, bacon, cheddar and chipotle mayo on a toasted brioche roll. choice of side`}
              </h5>
              <h6>(835)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">{`Stuffed Biscuit & Gravy`}</h4>
              <h5>
                {`a giant fresh baked biscuit stuffed with sausage, peppers, onions & cheese. topped with gravy. served with two eggs*`}
              </h5>
              <h6>(1227)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Homemade Corned Beef Hash</h4>
              <h5>{`a secret family recipe! served with two eggs* and toast `}</h5>
              <h6>(798)</h6>
            </div>
          </div>
        </div>
        <div className="liteBites blackBackground">
          <div className="liteBitesImg menuSectionImg order2">
            <img className="img" src={breakfastOats} alt="" />
          </div>
          <div className="menuInfo order1">
            <h1 className="sectionHeader">LITE BITES</h1>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Power Breakfast</h4>
              <h5>
                {`scrambled egg whites, chicken sausage, fresh fruit & toast`}
              </h5>
              <h6>(491)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Banana Bread Oatmeal</h4>
              <h5>
                {`a bowl of gluten free oats from Bob’s Red Mill, sliced banana, brown sugar, chopped walnuts, cinnamon & a drizzle of honey`}
              </h5>
              <h6>(520)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Berry Yogurt Bowl</h4>
              <h5>
                {`organic vanilla yogurt, sliced fruit, granola & a swirl of our homemade berry jam, served with a homemade muffin`}
              </h5>
              <h6>(432-962)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Protein Wrap</h4>
              <h5>
                {`egg whites, chicken sausage, fresh spinach, mushrooms & monterey jack cheese in a whole wheat tortilla. choice of side`}
              </h5>
              <h6>(638)</h6>
            </div>
          </div>
        </div>
        <div className="benedict whiteBackground">
          <div className="benedictImg menuSectionImg">
            <img className="img" src={breakfastBenedict} alt="" />
          </div>
          <div className="menuInfo">
            <h1 className="sectionHeader">EGG'S BENEDICT</h1>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Eggs Benedict</h4>
              <h5>
                {`poached eggs*, Canadian bacon, toasted english muffin, creamy hollandaise. choice of side`}
              </h5>
              <h6>(497)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Revelence’s Benedict</h4>
              <h5>
                {`poached eggs*, fresh spinach, toasted english muffin, creamy hollandaise, diced tomato & feta. choice of side`}
              </h5>
              <h6>(535)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Low Country Bene</h4>
              <h5>
                {`poached eggs, hand-breaded fried chicken on a split biscuit, homemade pimento cheese & sausage gravy`}
              </h5>
              <h6>(890)</h6>
            </div>
          </div>
        </div>
        <div className="omelettes blackBackground">
          <div className="omelettesImg menuSectionImg order2">
            <img className="img" src={breakfastOmelettes} alt="" />
          </div>
          <div className="menuInfo">
            <h1 className="sectionHeader">OMELETTES</h1>
            <h5>served with your choice of side and toast</h5>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Denver</h4>
              <h5>{`ham, onions, green peppers, mushrooms & monterey jack`}</h5>
              <h6>(747)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Veggie</h4>
              <h5>
                {`egg white omelette, tomatoes, onions, peppers, spinach, mushrooms & jack cheese`}
              </h5>
              <h6>(499)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">STF</h4>
              <h5>{`fresh spinach, diced tomatoes & crumbled feta cheese`}</h5>
              <h6>(597)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Country</h4>
              <h5>
                {`sausage, hash browns, onions, peppers, cheddar, & sausage gravy`}
              </h5>
              <h6>(1030)</h6>
            </div>
          </div>
        </div>
        <div className="texMex whiteBackground">
          <div className="texMexImg menuSectionImg">
            <img className="img" src={breakfastTaco} alt="" />
          </div>
          <div className="menuInfo">
            {" "}
            <h1 className="sectionHeader">TEX-MEX</h1>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Migas Breakfast Tacos</h4>
              <h5>
                {`egg, tortilla chips, queso fresco, cilantro, pico de gallo & avocado. choice of side`}
              </h5>
              <h6>(623)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Breakfast Quesadilla</h4>
              <h5>
                {`scrambled eggs, black bean salsa, tomatoes, red onion & jack, stuffed in a golden crisped flour tortilla`}
              </h5>
              <h6>(747)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Revelence’s Skillet</h4>
              <h5>
                {`hash browns stacked with carnitas, cheese, guajillo hot sauce, crema, house salsas & a fried egg. served with corn tortillas`}
              </h5>
              <h6>(978)</h6>
            </div>
            <div className="eachMenuItem">
              <h4 className="menuItemHeader">Carnitas Burrito</h4>
              <h5>
                {`egg, roasted pork carnitas, cheese, potatoes & pico de gallo folded into a flour tortilla. choice of side`}
              </h5>
              <h6>(857)</h6>
            </div>
          </div>
        </div>
        <div className="pancakes blackBackground ">
          <div className="pancakesImg menuSectionImg order2">
            <img className="img" src={breakfastFrenchtoast} alt="" />
          </div>
          <div className="menuInfo">
            {" "}
            <h1 className="sectionHeader ">CAKES</h1>
            <div className="eachMenuItem">
              <h4>Buttermilk Pancakes</h4>
              <h6>(444)</h6>
            </div>
            <div className="eachMenuItem">
              <h4>Cinnamon Roll Pancakes </h4>
              <h6>(856)</h6>
            </div>
            <div className="eachMenuItem">
              <h4>Funky Monkey Pancakes</h4>
              <h6>(1052)</h6>
            </div>
            <div className="eachMenuItem">
              <h4>Thick Griddled French Toast</h4>
              <h6>(530)</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
