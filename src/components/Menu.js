import React from 'react'
import "./Menu.css";
import pasta from "../assets/pasta.avif"
import drink from "../assets/drink.jpg"
import dessert from "../assets/dessert.jpg"
import curry from "../assets/curry.jpg"
import rice from "../assets/rice.jpg"
import soup from "../assets/soup.avif"
import menu from "../assets/menu.png"
import cap from "../assets/cap.png"

const Menu = () => {
  return (
    <div className='main p-4'>
      <div className='flex flex-col sm:flex-row items-center justify-between mb-6'>
        <img src={menu} width="200rem" className='menu mb-4 sm:mb-0' />
        <img src={cap} width="100rem" className='menuu' />
      </div>

      <div className='text-white flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-6 sm:ml-4'>
          <div>
            <img src={pasta} width="200rem" className='imagee' />
          </div>
          <div className='box'>
            <p className='headd'>Appetizers</p>
            <ul className='flex flex-col gap-6'>
              <li>
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10rem] name'>Tandoori Lobster Tail <p>350</p></div>
                <span className='exp'>Succulent lobster tail marinated in a blend of yogurt, spices, and saffron, then grilled in a traditional tandoor oven.</span>
              </li>
              <li>
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10rem] name'>Butter Chicken Pasta <p>400</p></div>
                <span className='exp'>Tender pieces of tandoori chicken breast tossed with al dente fettuccine pasta in a creamy truffle-infused butter sauce.</span>
              </li>
              <li>
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10rem] name'>Truffle Naan <p>250</p></div>
                <span className='exp'>Handcrafted naan bread infused with truffle oil and sprinkled with edible gold flakes, served with a selection of gourmet chutneys and dips.</span>
              </li>
              <li className='flex flex-col'>
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10rem] name'>Foie Gras Samosa <p>300</p></div>
                <span className='exp'>Crispy samosas filled with decadent foie gras, caramelized onions, and spiced potatoes, served with a drizzle of mango coulis.</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <p className='headd'>Soups</p>
            <ul>
              <li>
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10rem] name'>Saffron Seafood Bisque <p>370</p></div>
              </li>
              <li>
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10rem] name'>Wild Mushroom Shorba <p>380</p></div>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <img />
          </div>
          <div className='box'>
            <p className='headd'>Main Course</p>
            <ul className='flex flex-col gap-6'>
              <li>
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10rem] name'>Galouti Kebab Platter <p>850</p></div>
                <span className='exp'>A selection of melt-in-your-mouth Galouti kebabs made from tender minced lamb, delicately spiced and served with silver leaf garnish</span>
              </li>
              <li>
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10rem] name'>Murgh Shahi Korma <p>600</p></div>
                <span className='exp'>Tender pieces of chicken simmered in a luxurious cashew and cream-based gravy, infused with saffron and garnished with edible gold flakes.</span>
              </li>
              <li>
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10rem] name'>Truffle Malai Paneer <p>550</p></div>
                <span className='exp'>Soft cubes of paneer cheese simmered in a velvety gravy made from cashew nuts, cream, and truffle-infused oil, garnished with edible rose petals.</span>
              </li>
            </ul>
          </div>
          <div>
            <img src={curry} width="200rem" className='imagee' />
          </div>
          <div className='box'>
            <p className='headd'>Sides</p>
            <ul>
              <li>
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10rem] name'>Black Truffle Biryani <p>650</p></div>
              </li>
              <li>
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10rem] name'>Kesar Pista Kulcha <p>350</p></div>
              </li>
            </ul>
          </div>
          <div>
            <img src={rice} width="200rem" className='ima mt-4' />
          </div>
        </div>

        <div className='flex flex-col gap-6 sm:mr-6'>
          <img src={dessert} width="200rem" className='imagee' />
          <div className='box'>
            <p className='headd'>Desserts</p>
            <ul>
              <li>
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10rem] name'>Gulab Jamun Brûlée <p>350</p></div>
                <span className='exp'>Classic gulab jamun transformed into a luxurious dessert with a caramelized sugar crust, served with a scoop of homemade saffron ice cream.</span>
              </li>
              <li>
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10rem] name'>Saffron and Chocolate RasMalai <p>380</p></div>
                <span className='exp'>Velvety soft cheese dumplings soaked in a saffron-infused milk syrup, topped with white chocolate shavings and edible gold dust</span>
              </li>
            </ul>
          </div>
          <div className='box'>
            <p className='headd'>Beverages</p>
            <ul>
              <li>
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10rem] name'>Mango and Saffron Lassi <p>270</p></div>
              </li>
              <li>
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-[10rem] name'>Rose Petal Martini <p>370</p></div>
              </li>
            </ul>
          </div>
          <div>
            <img src={drink} width="200rem" className='imagee' />
          </div>
          <div>
            <img src={soup} width="200rem" className='ima' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
