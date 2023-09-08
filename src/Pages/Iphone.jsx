import './Iphone.css'
import { useState } from 'react'

import iphone14promax from './Iphoneimages/iphone14promax.jpg'
import iphone14pro from './Iphoneimages/iphone14pro.jpg'
import iphone14plus from './Iphoneimages/iphone14plus.jpg'
import iphone14 from './Iphoneimages/iphone14.jpg'
import iphone13promax from './Iphoneimages/iphone13promax.jpeg'
import iphone13pro from './Iphoneimages/iphone13pro.jpeg'
import iphone13mini from './Iphoneimages/iphone13mini.png'
import iphone13 from './Iphoneimages/iphone13.png'
import iphone12promax from './Iphoneimages/iphone12promax.jpeg'
import iphone12pro from './Iphoneimages/iphone12pro.jpeg'
import iphone12mini from './Iphoneimages/iphone12mini.jpg'
import iphone12 from './Iphoneimages/iphone12.png'
import iphone11promax from './Iphoneimages/iphone11promax.jpg'
import iphone11pro from './Iphoneimages/iphone11pro.jpeg'
import iphone11 from './Iphoneimages/iphone11.jpeg'


import { Cart } from './cart'



export const Iphone = () => {


// _____________________Iphone 14 Pro Max____________________________
 
let [quantity14promax, setQuantity14promax] = useState(1)
let [price14promax, setPrice14promax] = useState(132999);
let inc14promax = () => {
    setPrice14promax(price14promax + 132999)
    setQuantity14promax(quantity14promax + 1)
}
let dec14promax = () => {
    if (quantity14promax > 1){
    setPrice14promax(price14promax - 132999)
    setQuantity14promax(quantity14promax - 1)
    }
}

// _____________________Iphone 14 Pro ____________________________

let [quantity14pro, setQuantity14pro] = useState(1)
let [price14pro, setPrice14pro] = useState(123999);
let inc14pro = () => {
    setPrice14pro(price14pro + 123999)
    setQuantity14pro(quantity14pro + 1)
}
let dec14pro = () => {
    if (quantity14pro > 1){
    setPrice14pro(price14pro - 123999)
    setQuantity14pro(quantity14pro - 1)
    }
}

// _____________________Iphone 14 Plus____________________________

let [quantity14plus, setQuantity14plus] = useState(1)
let [price14plus, setPrice14plus] = useState(79112);
let inc14plus = () => {
    setPrice14plus(price14plus + 79112)
    setQuantity14plus(quantity14plus + 1)
}
let dec14plus = () => {
    if (quantity14plus > 1){
    setPrice14plus(price14plus - 79112)
    setQuantity14plus(quantity14plus - 1)
    }
}


// _____________________Iphone 14 ____________________________

let [quantity14, setQuantity14] = useState(1)
let [price14, setPrice14] = useState(69513);
let inc14 = () => {
    setPrice14(price14 + 69513)
    setQuantity14(quantity14 + 1)
}
let dec14 = () => {
    if (quantity14> 1){
    setPrice14(price14 - 69513)
    setQuantity14(quantity14 - 1)
    }
}
// _____________________________________________________________________

// _____________________Iphone 13 Pro Max____________________________
 
let [quantity13promax, setQuantity13promax] = useState(1)
let [price13promax, setPrice13promax] = useState(129900);
let inc13promax = () => {
    setPrice13promax(price13promax + 129900)
    setQuantity13promax(quantity13promax + 1)
}
let dec13promax = () => {
    if (quantity13promax > 1){
    setPrice13promax(price13promax - 129900)
    setQuantity13promax(quantity13promax - 1)
    }
}

// _____________________Iphone 13 Pro ____________________________

let [quantity13pro, setQuantity13pro] = useState(1)
let [price13pro, setPrice13pro] = useState(119900);
let inc13pro = () => {
    setPrice13pro(price13pro + 119900)
    setQuantity13pro(quantity13pro + 1)
}
let dec13pro = () => {
    if (quantity13pro > 1){
    setPrice13pro(price13pro - 119900)
    setQuantity13pro(quantity13pro - 1)
    }
}

// _____________________Iphone 13 Mini____________________________

let [quantity13mini, setQuantity13mini] = useState(1)
let [price13mini, setPrice13mini] = useState(64900);
let inc13mini = () => {
    setPrice13mini(price13mini + 64900)
    setQuantity13mini(quantity13mini + 1)
}
let dec13mini = () => {
    if (quantity13mini > 1){
    setPrice13mini(price13mini - 64900)
    setQuantity13mini(quantity13mini - 1)
    }
}


// _____________________Iphone 13 ____________________________

let [quantity13, setQuantity13] = useState(1)
let [price13, setPrice13] = useState(69900);
let inc13 = () => {
    setPrice13(price13 + 69900)
    setQuantity13(quantity13 + 1)
}
let dec13 = () => {
    if (quantity13> 1){
    setPrice13(price13 - 69900)
    setQuantity13(quantity13 - 1)
    }
}

// _____________________Iphone 12 Pro Max____________________________
 
let [quantity12promax, setQuantity12promax] = useState(1)
let [price12promax, setPrice12promax] = useState(129900);
let inc12promax = () => {
    setPrice12promax(price12promax + 129900)
    setQuantity12promax(quantity12promax + 1)
}
let dec12promax = () => {
    if (quantity12promax > 1){
    setPrice12promax(price12promax - 129900)
    setQuantity12promax(quantity12promax - 1)
    }
}

// _____________________Iphone 12 Pro ____________________________

let [quantity12pro, setQuantity12pro] = useState(1)
let [price12pro, setPrice12pro] = useState(102900);
let inc12pro = () => {
    setPrice12pro(price12pro + 102900)
    setQuantity12pro(quantity12pro + 1)
}
let dec12pro = () => {
    if (quantity12pro > 1){
    setPrice12pro(price12pro - 102900)
    setQuantity12pro(quantity12pro - 1)
    }
}

// _____________________Iphone 12 Mini____________________________

let [quantity12mini, setQuantity12mini] = useState(1)
let [price12mini, setPrice12mini] = useState(52900);
let inc12mini = () => {
    setPrice12mini(price12mini + 52900)
    setQuantity12mini(quantity12mini + 1)
}
let dec12mini = () => {
    if (quantity12mini > 1){
    setPrice12mini(price12mini - 52900)
    setQuantity12mini(quantity12mini - 1)
    }
}


// _____________________Iphone 12 ____________________________

let [quantity12, setQuantity12] = useState(1)
let [price12, setPrice12] = useState(77584);
let inc12 = () => {
    setPrice12(price13 + 77584)
    setQuantity12(quantity12 + 1)
}
let dec12 = () => {
    if (quantity12> 1){
    setPrice12(price12 - 77584)
    setQuantity12(quantity12 - 1)
    }
}

// _____________________Iphone 11 Pro Max____________________________
 
let [quantity11promax, setQuantity11promax] = useState(1)
let [price11promax, setPrice11promax] = useState(96900);
let inc11promax = () => {
    setPrice11promax(price11promax + 96900)
    setQuantity11promax(quantity11promax + 1)
}
let dec11promax = () => {
    if (quantity11promax > 1){
    setPrice11promax(price11promax - 96900)
    setQuantity11promax(quantity11promax - 1)
    }
}

// _____________________Iphone 11 Pro ____________________________

let [quantity11pro, setQuantity11pro] = useState(1)
let [price11pro, setPrice11pro] = useState(89900);
let inc11pro = () => {
    setPrice11pro(price11pro + 89900)
    setQuantity11pro(quantity11pro + 1)
}
let dec11pro = () => {
    if (quantity11pro > 1){
    setPrice11pro(price11pro - 89900)
    setQuantity11pro(quantity11pro - 1)
    }
}

// _____________________Iphone 12 Mini____________________________

// let [quantity12mini, setQuantity12mini] = useState(1)
// let [price12mini, setPrice12mini] = useState(52900);
// let inc12mini = () => {
//     setPrice12mini(price12mini + 52900)
//     setQuantity12mini(quantity12mini + 1)
// }
// let dec12mini = () => {
//     if (quantity12mini > 1){
//     setPrice12mini(price12mini - 52900)
//     setQuantity12mini(quantity12mini - 1)
//     }
// }


// _____________________Iphone 11 ____________________________

let [quantity11, setQuantity11] = useState(1)
let [price11, setPrice11] = useState(41990);
let inc11 = () => {
    setPrice11(price11 + 41990)
    setQuantity11(quantity11 + 1)
}
let dec11 = () => {
    if (quantity11> 1){
    setPrice11(price11 - 41990)
    setQuantity11(quantity11 - 1)
    }
}





// __________________________________________________________________________
// __________________________________________________________________________
    return (
        <div id="iphonecontainer">
            <div className='iphonetitle'>
                <h2>iPhone</h2>
                <hr />
            </div>


{/* ______________________________ROW 1______________________________________ */}

           <div id='iphone'>
                <div className='iphonebox'>
                     <div className='iphoneimage'>
                        <img src={iphone14promax} alt="" height={170} width={250} />
                     </div>
                     <div className='iphonecolor'>
                        <div className='grey'></div> <div className='rosegold'></div> <div className='silver'></div> <div className='black'></div>
                     </div>
                     <div class='iphonetitle'>
                       <h3>iPhone 14 Pro Max</h3>
                     </div>
                     <span className='iphonedesc'>The Ultimate Phone</span>
                     <div id='amount'>
                        From <b> &#8377; {price14promax} </b>
                     </div>
                     <div>
                        <span>
                            <button id='cart'>Add Item:  <button className='minus' onClick={dec14promax} > - </button>{quantity14promax} <button className='plus' onClick={inc14promax} > + </button> </button>
                        </span>
                        </div>
                        <div>
                            <button id='buy'>Buy</button>
                        </div>      

                </div>
                <div className='iphonebox'>
                <div className='iphoneimage'>
                        <img src={iphone14pro} alt="" height={170} width={250} />
                     </div>
                     <div className='iphonecolor'>
                     <div className='grey'></div> <div className='rosegold'></div> <div className='silver'></div> <div className='black'></div>
                     </div>
                     <div class='iphonetitle'>
                       <h3>iPhone 14 Pro</h3>
                     </div>
                     <span className='iphonedesc'>A total powerhouse</span>
                     <div id='amount'>
                        From <b> &#8377; {price14pro} </b>
                     </div>
                     <div>
                        <span>
                            <button id='cart'>Add Item:  <button className='minus' onClick={dec14pro} > - </button>{quantity14pro} <button className='plus' onClick={inc14pro} > + </button> </button>
                        </span>
                        </div>
                        <div>
                            <button id='buy'>Buy</button>
                        </div>
                </div>
                <div className='iphonebox'>
                <div className='iphoneimage'>
                        <img src={iphone14plus} alt="" height={170} width={250} />
                     </div>
                     <div className='iphonecolor'>
                     <div className='black'></div> <div className='white'></div> <div className='red'></div> <div className='darkgrey'></div> <div className='silver'></div> <div className='lightyellow'></div>
                     </div>
                     <div class='iphonetitle'>
                       <h3>iPhone 14 Plus</h3>
                     </div>
                     <span className='iphonedesc'>As amazing as ever</span>
                     <div id='amount'>
                        From <b> &#8377; {price14plus} </b>
                     </div>
                     <div>
                        <span>
                            <button id='cart'>Add Item:  <button className='minus' onClick={dec14plus} > - </button>{quantity14plus} <button className='plus' onClick={inc14plus} > + </button> </button>
                        </span>
                        </div>
                        <div>
                            <button id='buy'>Buy</button>
                        </div>
                </div>
                <div className='iphonebox'>
                <div className='iphoneimage'>
                        <img src={iphone14} alt="" height={170} width={250} />
                     </div>
                     <div className='iphonecolor'>
                        <div className='black'></div> <div className='white'></div> <div className='red'></div> <div className='darkgrey'></div> <div className='silver'></div> <div className='lightyellow'></div>
                     </div>
                     <div class='iphonetitle'>
                       <h3>iPhone 14</h3>
                     </div>
                     <span className='iphonedesc'>Serious power. Serious value</span>
                     <div id='amount'>
                        From <b> &#8377; {price14} </b>
                     </div>
                     <div>
                        <span>
                            <button id='cart'>Add Item:  <button className='minus' onClick={dec14} > - </button>{quantity14} <button className='plus' onClick={inc14} > + </button> </button>
                        </span>
                        </div>
                        <div>
                            <button id='buy'>Buy</button>
                        </div>
                </div>
           </div>

{/* ______________________________ROW 2______________________________________ */}
           
           <div id='iphone'>
           <div className='iphonebox'>
                     <div className='iphoneimage'>
                        <img src={iphone13promax} alt="" height={170} width={250} />
                     </div>
                     <div className='iphonecolor'>
                        <div className='darkgrey'></div><div className='matblack'></div> <div className='rosegold'></div> <div className='white'></div> <div className='darkgreen'></div>
                     </div>
                     <div class='iphonetitle'>
                       <h3>iPhone 13 Pro Max</h3>
                     </div>
                     <span className='iphonedesc'>The Ultimate Phone</span>
                     <div id='amount'>
                        From <b> &#8377; {price13promax} </b>
                     </div>
                     <div>
                        <span>
                            <button id='cart'>Add Item:  <button className='minus' onClick={dec13promax} > - </button>{quantity13promax} <button className='plus' onClick={inc13promax} > + </button> </button>
                        </span>
                        </div>
                        <div>
                            <button id='buy'>Buy</button>
                        </div>      

                </div>
                <div className='iphonebox'>
                <div className='iphoneimage'>
                        <img src={iphone13pro} alt="" height={170} width={250} />
                     </div>
                     <div className='iphonecolor'>
                        <div className='matblack'></div> <div className='rosegold'></div> <div className='white'></div> <div className='darkgrey'></div>
                     </div>
                     <div class='iphonetitle'>
                       <h3>iPhone 13 Pro</h3>
                     </div>
                     <span className='iphonedesc'>A total powerhouse</span>
                     <div id='amount'>
                        From <b> &#8377; {price13pro} </b>
                     </div>
                     <div>
                        <span>
                            <button id='cart'>Add Item:  <button className='minus' onClick={dec13pro} > - </button>{quantity13pro} <button className='plus' onClick={inc13pro} > + </button> </button>
                        </span>
                        </div>
                        <div>
                            <button id='buy'>Buy</button>
                        </div>
                </div>
                <div className='iphonebox'>
                <div className='iphoneimage'>
                        <img src={iphone13mini} alt="" height={170} width={250} />
                     </div>
                     <div className='iphonecolor'>
                        <div className='red'></div> <div className='white'></div> <div className='black'></div> <div className='darkgrey'></div> <div className='rosegold'></div> <div className='darkgreen'></div>
                     </div>
                     <div class='iphonetitle'>
                       <h3>iPhone 13 Mini</h3>
                     </div>
                     <span className='iphonedesc'>As amazing as ever</span>
                     <div id='amount'>
                        From <b> &#8377; {price13mini} </b>
                     </div>
                     <div>
                        <span>
                            <button id='cart'>Add Item:  <button className='minus' onClick={dec13mini} > - </button>{quantity13mini} <button className='plus' onClick={inc13mini} > + </button> </button>
                        </span>
                        </div>
                        <div>
                            <button id='buy'>Buy</button>
                        </div>
                </div>
                <div className='iphonebox'>
                <div className='iphoneimage'>
                        <img src={iphone13} alt="" height={170} width={250} />
                     </div>
                     <div className='iphonecolor'>
                     <div className='red'></div> <div className='white'></div> <div className='black'></div> <div className='darkgrey'></div> <div className='rosegold'></div> <div className='darkgreen'></div>
                     </div>
                     <div class='iphonetitle'>
                       <h3>iPhone 13</h3>
                     </div>
                     <span className='iphonedesc'>Serious power. Serious value</span>
                     <div id='amount'>
                        From <b> &#8377; {price13} </b>
                     </div>
                     <div>
                        <span>
                            <button id='cart'>Add Item:  <button className='minus' onClick={dec13} > - </button>{quantity13} <button className='plus' onClick={inc13} > + </button> </button>
                        </span>
                        </div>
                        <div>
                            <button id='buy'>Buy</button>
                        </div>
                </div>
           </div>
          

{/* ______________________________ROW 3______________________________________ */}

           <div id='iphone'>
                <div className='iphonebox'>
                     <div className='iphoneimage'>
                        <img src={iphone12promax} alt="" height={170} width={250} />
                     </div>
                     <div className='iphonecolor'>
                        <div className='white'></div> <div className='matblack'></div> <div className='rosegold'></div> <div className='grey'></div>
                     </div>
                     <div class='iphonetitle'>
                       <h3>iPhone 12 Pro Max</h3>
                     </div>
                     <span className='iphonedesc'>The Ultimate Phone</span>
                     <div id='amount'>
                        From <b> &#8377; {price12promax} </b>
                     </div>
                     <div>
                        <span>
                            <button id='cart'>Add Item:  <button className='minus' onClick={dec12promax} > - </button>{quantity12promax} <button className='plus' onClick={inc12promax} > + </button> </button>
                        </span>
                        </div>
                        <div>
                            <button id='buy'>Buy</button>
                        </div>      

                </div>
                <div className='iphonebox'>
                <div className='iphoneimage'>
                        <img src={iphone12pro} alt="" height={170} width={250} />
                     </div>
                     <div className='iphonecolor'>
                     <div className='white'></div> <div className='matblack'></div> <div className='rosegold'></div> <div className='grey'></div>
                     </div>
                     <div class='iphonetitle'>
                       <h3>iPhone 12 Pro</h3>
                     </div>
                     <span className='iphonedesc'>A total powerhouse</span>
                     <div id='amount'>
                        From <b> &#8377; {price12pro} </b>
                     </div>
                     <div>
                        <span>
                            <button id='cart'>Add Item:  <button className='minus' onClick={dec12pro} > - </button>{quantity12pro} <button className='plus' onClick={inc12pro} > + </button> </button>
                        </span>
                        </div>
                        <div>
                            <button id='buy'>Buy</button>
                        </div>
                </div>
                <div className='iphonebox'>
                <div className='iphoneimage'>
                        <img src={iphone12mini} alt="" height={170} width={250} />
                     </div>
                     <div className='iphonecolor'>
                        <div className='black'></div> <div className='white'></div> <div className='red'></div> <div className='darkgrey'></div> <div className='darkblue'></div> <div className='purple'></div>
                     </div>
                     <div class='iphonetitle'>
                       <h3>iPhone 12 Mini</h3>
                     </div>
                     <span className='iphonedesc'>As amazing as ever</span>
                     <div id='amount'>
                        From <b> &#8377; {price12mini} </b>
                     </div>
                     <div>
                        <span>
                            <button id='cart'>Add Item:  <button className='minus' onClick={dec12mini} > - </button>{quantity12mini} <button className='plus' onClick={inc12mini} > + </button> </button>
                        </span>
                        </div>
                        <div>
                            <button id='buy'>Buy</button>
                        </div>
                </div>
                <div className='iphonebox'>
                <div className='iphoneimage'>
                        <img src={iphone12} alt="" height={170} width={250} />
                     </div>
                     <div className='iphonecolor'>
                     <div className='black'></div> <div className='white'></div> <div className='red'></div> <div className='darkgrey'></div> <div className='darkblue'></div> <div className='purple'></div>
                     </div>
                     <div class='iphonetitle'>
                       <h3>iPhone 12</h3>
                     </div>
                     <span className='iphonedesc'>Serious power. Serious value</span>
                     <div id='amount'>
                        From <b> &#8377; {price12} </b>
                     </div>
                     <div>
                        <span>
                            <button id='cart'>Add Item:  <button className='minus' onClick={dec12} > - </button>{quantity12} <button className='plus' onClick={inc12} > + </button> </button>
                        </span>
                        </div>
                        <div>
                            <button id='buy'>Buy</button>
                        </div>
                </div>
           </div>


{/* ______________________________ROW 4______________________________________ */}
           
           <div id='iphone'>
                <div className='iphonebox'>
                     <div className='iphoneimage'>
                        <img src={iphone11promax} alt="" height={170} width={250} />
                     </div>
                     <div className='iphonecolor'>
                        <div className='matblack'></div> <div className='darkgreen'></div> <div className='rosegold'></div> <div className='white'></div>
                     </div>
                     <div class='iphonetitle'>
                       <h3>iPhone 11 Pro Max</h3>
                     </div>
                     <span className='iphonedesc'>The Ultimate Phone</span>
                     <div id='amount'>
                        From <b> &#8377; {price11promax} </b>
                     </div>
                     <div>
                        <span>
                            <button id='cart'>Add Item:  <button className='minus' onClick={dec11promax} > - </button>{quantity11promax} <button className='plus' onClick={inc11promax} > + </button> </button>
                        </span>
                        </div>
                        <div>
                            <button id='buy'>Buy</button>
                        </div>      

                </div>
                <div className='iphonebox'>
                <div className='iphoneimage'>
                        <img src={iphone11pro} alt="" height={200} width={280} />
                     </div>
                     <div className='iphonecolor'>
                     <div className='white'></div> <div className='rosegold'></div> <div className='darkgreen'></div> <div className='matblack'></div>
                     </div>
                     <div class='iphonetitle'>
                       <h3>iPhone 11 Pro</h3>
                     </div>
                     <span className='iphonedesc'>A total powerhouse</span>
                     <div id='amount'>
                        From <b> &#8377; {price11pro} </b>
                     </div>
                     <div>
                        <span>
                            <button id='cart'>Add Item:  <button className='minus' onClick={dec11pro} > - </button>{quantity11pro} <button className='plus' onClick={inc11pro} > + </button> </button>
                        </span>
                        </div>
                        <div>
                            <button id='buy'>Buy</button>
                        </div>
                </div>
                {/* <div className='iphonebox'>
                <div className='iphoneimage'>
                        <img src={iphone14plus} alt="" height={200} width={280} />
                     </div>
                     <div className='iphonecolor'>
                        <div className='gold'></div> <div className='silver'></div> <div className='black'></div> <div className='purple'></div>
                     </div>
                     <div class='iphonetitle'>
                       <h3>iPhone 14 Plus</h3>
                     </div>
                     <span className='iphonedesc'>As amazing as ever</span>
                     <div id='amount'>
                        From <b> &#8377; {price14plus} </b>
                     </div> */}
                     {/* <div>
                        <span>
                            <button id='cart'>Add Item:  <button className='minus' onClick={dec14plus} > - </button>{quantity14plus} <button className='plus' onClick={inc14plus} > + </button> </button>
                        </span>
                        </div>
                        <div>
                            <button id='buy'>Buy</button>
                        </div> */}
                {/* </div> */}
                <div className='iphonebox'>
                <div className='iphoneimage'>
                        <img src={iphone11} alt="" height={200} width={280} />
                     </div>
                     <div className='iphonecolor'>
                        <div className='red'></div> <div className='lightyellow'></div> <div className='white'></div> <div className='darkgrey'></div> <div className='black'></div> <div className='silver'></div>
                     </div>
                     <div class='iphonetitle'>
                       <h3>iPhone 11</h3>
                     </div>
                     <span className='iphonedesc'>Serious power. Serious value</span>
                     <div id='amount'>
                        From <b> &#8377; {price11} </b>
                     </div>
                     <div>
                        <span>
                            <button id='cart'>Add Item:  <button className='minus' onClick={dec11} > - </button>{quantity11} <button className='plus' onClick={inc11} > + </button> </button>
                        </span>
                        </div>
                        <div>
                            <button id='buy'>Buy</button>
                        </div>
                </div>
           </div>

    <div className='footercontainer'>
        <footer className='footerflex'>
            <div className='footerbox'>Copyright &copy; 2023 AhtiCorn. All Rights Reserved &reg;</div>
            <div className='footerbox'>Made by Md Ahtisham &hearts;</div>
            <div className='footerbox'>India</div>


        </footer>
    </div>

</div>
    )
}
