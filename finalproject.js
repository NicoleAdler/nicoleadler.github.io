
const WIDE = 1920;
const HIGH = 1080;

let aspectTop, aspectLeft;
let aspectScale = 1;

let USA = 120000000;
let USAapts = 18838000;

let NYC = 3430000;
let NYCapts = 1556000;
let Chicago = 1193000;
let Chicagoapts = 306150; // THIS ONE IS WRONG!!!!
let SF = 384000;
let SFapts = 140000; 
let DC = 303000;
let DCapts = 113000;
let Boston = 279000;
let Bostonapts = 89000; 

let buttons;
let buttonValue;

let totalGallons = 0.0000000000000000000001;
let totalGallonsProduct = 0.0000000000000001;
let productWeightPounds = 0;
let totalPounds = 0;
let productsPrice = 0.0000000000000000000001;
let totalPrice = 0.0;
let shipping = 0.0;
let totalShipping = 0.0000000000000001;
let productCarbon = 0;
let totalCarbon = 0;
let waterPercent = 0.0;
let costPercent = 0.0;


// THIS IS FOR TEXT BELOW
//let num = new SoftNum ();


//let sum = 0;
//let input, button, greeting;


// THIS IS FOR THE IMAGE PLACEMENT
let locked = [];
let xOffset = [];
let yOffset = [];

  // ALL X'S and Y'S
let linex1;
let linex2;
let lineheight;
let dragTextCenter_x;
let dragText_y;
let percentWater_x;
let percentCost_x;
let aboveNumberCenter_y;
let aboveTextCenter_y ;
let cityButtons_x;
let cityAptsButtons_x;
let gallonsWater_x;
let dollarsShipping_x;
let gramsCarbon_x;
let pounds_x;
let belowNumberCenter_y;
let belowTextCenter_y;

let table;
let greycliffBold;
let greycliffLight;
let greycliffMediumOblique;

let productCount = 13;
let productImages = [];
let productImagesHover   = [];
let productImagesX = [];
let productImagesY = [];
let overImage = [];

// WATER NOISE
let yoff = 0.0; // 2nd dimension of perlin noise



let button1a;
let button1b;
let button2a;
let button2b;
let button3a;
let button3b;
let button4a;
let button4b;
let button5a;
let button5b;
let button6a;
let button6b;

let dropdownx;
let dropdowny;
 
var ValueSelected;
var slider;
let sel;
let citySelected;
let citySelectedValue;
let event; 

function preload() {
  
  greycliffBold = loadFont('assetsfinal/OTF/GreycliffBold.otf');
  greycliffLight = loadFont('assetsfinal/OTF/GreycliffLight.otf');
  greycliffMediumOblique = loadFont('assetsfinal/OTF/GreycliffMediumOblique.otf');
  
  table = loadTable('assetsfinal/products.csv', 'csv', 'header');
 
 for (let i = 0; i < productCount; i++) {
    productImages[i] = loadImage("assetsfinal/"+ i + ".png");
    productImagesHover[i] = loadImage("assetsfinal/1x/"+ i + ".png");

  }

  print(productImages);
 
  
}


function setup() {
  createCanvas(WIDE, HIGH);
  textFont(greycliffLight);
  //windowResized();
  //background('pink');
   
 // THIS IS FOR THE SLIDER
 // THIS IS FOR THE DROPDOWN
 let dropdownx = (WIDE/4)*3;
 let dropdowny = (HIGH/2)-200;

  // ALL X'S and Y'S
  linex1 = (WIDE/14)*1;
  linex2 = (WIDE/14)*10;
  lineheight = (HIGH/2)+ 75;
  dragTextCenter_x = (WIDE/14)*5;
  dragText_y = HIGH/16;
  //percentWater_x = (WIDE/14)*11;
  //percentCost_x = (WIDE/14)*13;
  aboveNumberCenter_y = (HIGH/8)*2;
  aboveTextCenter_y = (HIGH/8)*3;
  percentWater_x = (WIDE/14)*11;
  cityButtons_x= (WIDE/14)*13-90;
  cityAptsButtons_x = (WIDE/14)*13+15;
  gallonsWater_x = (WIDE/8)*1;
  dollarsShipping_x = (WIDE/8)*3;
  gramsCarbon_x = (WIDE/8)*5;
  pounds_x = (WIDE/8)*7;
  belowNumberCenter_y = (HIGH/8)*6;
  belowTextCenter_y = (HIGH/8)*7;

  //fill('black');
  //textSize(40);
  //text('drag products to represent the amount of each your household consumes in a year & reveal the hidden water and costs:', width/2, dragText_y);
  //text('imagine others buy similarly - this is the impact at scale:', width/2+50, (height/16)*9);
    
    button1a = createButton('USA', USA);
    //tton1a.style('font-weight', 'bold')
    button1a.style('font-family', 'greycliffBold')
    button1a.style('background-color', 'transparent')
    button1a.style('font-size', '17px')
    button1a.style('cursor', 'pointer')
    button1a.style('border-radius', '3px')
    button1a.style('border', 'none')
    button1a.style('width', '90px');
    button1a.style('height', '50px')
    button1a.style('text-shadow', '0 px 0px')
    button1a.position(cityButtons_x, (HIGH/24)*6 + 40);
    button1a.mousePressed(processButtonClick);
    buttonValue = button1a.elt.value;

    button1b = createButton('apts: 16%', USAapts);
    button1b.style('background-color', 'transparent')
    button1b.style('font-weight', 'normal')
    button1b.style('font-size', '17px')
    button1b.style('font-family', 'greycliffLight')
    button1b.style('cursor', 'pointer')
    button1b.style('border-radius', '3px')
    button1b.style('border', 'none')
    button1b.style('width', '90px');
    button1b.style('height', '50px')
    button1b.style('text-shadow', '0 px 0px')
    button1b.position(cityAptsButtons_x, (HIGH/24)*6+ 40);
    button1b.mousePressed(processButtonClick);
    
    button2a = createButton('NYC', NYC);
    button2a.style('background-color', 'transparent')
    button2a.style('font-weight', 'normal')
    button2a.style('font-size', '17px')
    button2a.style('font-family', 'greycliffLight')
    button2a.style('cursor', 'pointer')
    button2a.style('border-radius', '3px')
    button2a.style('border', 'none')
    button2a.style('width', '90px');
    button2a.style('height', '50px')
    button2a.style('text-shadow', '0 px 0px')
    button2a.position(cityButtons_x, (HIGH/24)*7+ 40);
    button2a.mousePressed(processButtonClick);
      
    button2b = createButton('apts: 45%', NYCapts);
    button2b.style('background-color', 'transparent')
    button2b.style('font-weight', 'normal')
    button2b.style('font-size', '17px')
    button2b.style('font-family', 'greycliffLight')
    button2b.style('cursor', 'pointer')
    button2b.style('border-radius', '3px')
    button2b.style('border', 'none')
    button2b.style('width', '90px');
    button2b.style('height', '50px')
    button2b.style('text-shadow', '0 px 0px')
    button2b.position(cityAptsButtons_x, (HIGH/24)*7+ 40);
    button2b.mousePressed(processButtonClick);
    
    button3a = createButton('CHI', Chicago);
    button3a.style('background-color', 'transparent')
    button3a.style('font-weight', 'normal')
    button3a.style('font-size', '17px')
    button3a.style('font-family', 'greycliffLight')
    button3a.style('cursor', 'pointer')
    button3a.style('border-radius', '3px')
    button3a.style('border', 'none')
    button3a.style('width', '90px');
    button3a.style('height', '50px')
    button3a.style('text-shadow', '0 px 0px')
    button3a.position(cityButtons_x, (HIGH/24)*8+ 40);
    button3a.mousePressed(processButtonClick);
      
    button3b = createButton('apts: 26%', Chicagoapts);
    button3b.style('background-color', 'transparent')
    button3b.style('font-weight', 'normal')
    button3b.style('font-size', '17px')
    button3b.style('font-family', 'greycliffLight')
    button3b.style('cursor', 'pointer')
    button3b.style('border-radius', '3px')
    button3b.style('border', 'none')
    button3b.style('width', '90px');
    button3b.style('height', '50px')
    button3b.style('text-shadow', '0 px 0px')
    button3b.position(cityAptsButtons_x, (HIGH/24)*8+ 40);
    button3b.mousePressed(processButtonClick);
    
    button4a = createButton('SF', SF);
    button4a.style('background-color', 'transparent')
    button4a.style('font-weight', 'normal')
    button4a.style('font-size', '17px')
    button4a.style('font-family', 'greycliffLight')
    button4a.style('cursor', 'pointer')
    button4a.style('border-radius', '3px')
    button4a.style('border', 'none')
    button4a.style('width', '90px');
    button4a.style('height', '50px')
    button4a.style('text-shadow', '0 px 0px')
    button4a.position(cityButtons_x, (HIGH/24)*9+ 40);
    button4a.mousePressed(processButtonClick);
      
    button4b = createButton('apts: 37%', SFapts);
    button4b.style('background-color', 'transparent')
    button4b.style('font-weight', 'normal')
    button4b.style('font-size', '17px')
    button4b.style('font-family', 'greycliffLight')
    button4b.style('cursor', 'pointer')
    button4b.style('border-radius', '3px')
    button4b.style('border', 'none')
    button4b.style('width', '90px');
    button4b.style('height', '50px')
    button4b.style('text-shadow', '0 px 0px')
    button4b.position(cityAptsButtons_x, (HIGH/24)*9+ 40);
    button4b.mousePressed(processButtonClick);
    
    button5a = createButton('DC', DC);
    button5a.style('background-color', 'transparent')
    button5a.style('font-weight', 'normal')
    button5a.style('font-size', '17px')
    button5a.style('font-family', 'greycliffLight')
    button5a.style('cursor', 'pointer')
    button5a.style('border-radius', '3px')
    button5a.style('border', 'none')
    button5a.style('width', '90px');
    button5a.style('height', '50px')
    button5a.style('text-shadow', '0 px 0px')
    button5a.position(cityButtons_x, (HIGH/24)*10+ 40);
    button5a.mousePressed(processButtonClick);
      
    button5b = createButton('apts: 37%', DCapts);
    button5b.style('background-color', 'transparent')
    button5b.style('font-weight', 'normal')
    button5b.style('font-size', '17px')
    button5b.style('font-family', 'greycliffLight')
    button5b.style('cursor', 'pointer')
    button5b.style('border-radius', '3px')
    button5b.style('border', 'none')
    button5b.style('width', '90px');
    button5b.style('height', '50px')
    button5b.style('text-shadow', '0 px 0px')
    button5b.position(cityAptsButtons_x,(HIGH/24)*10+ 40);
    button5b.mousePressed(processButtonClick);
    
    button6a = createButton('BOS', Boston);
    button6a.style('background-color', 'transparent')
    button6a.style('font-weight', 'normal')
    button6a.style('font-size', '17px')
    button6a.style('font-family', 'greycliffLight')
    button6a.style('cursor', 'pointer')
    button6a.style('border-radius', '3px')
    button6a.style('border', 'none')
    button6a.style('width', '90px');
    button6a.style('height', '50px')
    button6a.style('text-shadow', '0 px 0px')
    button6a.position(cityButtons_x, (HIGH/24)*11+ 40);
    button6a.mousePressed(processButtonClick);
      
    button6b = createButton('apts: 32%', Bostonapts);
    button6b.position(cityAptsButtons_x, (HIGH/24)*11+ 40);
    button6b.mousePressed(processButtonClick);
    button6b.style('background-color', 'transparent')
    button6b.style('font-weight', 'normal')
    button6b.style('font-size', '17px')
    button6b.style('font-family', 'greycliffLight')
    button6b.style('cursor', 'pointer')
    button6b.style('border-radius', '3px')
    button6b.style('border', 'none')
    button6b.style('width', '90px');
    button6b.style('height', '50px')
    button6b.style('text-shadow', '0 px 0px')
       


    buttons = [button1a, button1b, button2a, button2b, button3a, button3b, button4a, button4b, button5a, button5b, button6a, button6b];
   
     for(var i=0; i<buttons.length; i++)
        {
          buttons[i].style('font-size', '18px');
          //buttons[i].style('border-color', 'B1C8FF');
         // buttons[i].style('border-style', 'solid');
          //buttons[i].style('border-width', '1px');

        }
    
   // console.log(buttons);
    
 
  textAlign(CENTER, CENTER);
  //text(nfc(totalPounds*buttonValue,0), pounds_x, belowNumberCenter_y);
  
  
  //background(200);
 // sel = createSelect();
 // sel.position(dropdownx-20, dropdowny);
 //// sel.background('pink');
 // sel.option('none selected');
 // sel.option('NYC apartments');
 // sel.option('Chicago apartments');
 // sel.option('SF apartments');
 // sel.option('DC apartments');
 // sel.option('Boston apartments');
 // sel.changed(mySelectEvent);
 // sel.style('width', '250px');
 // sel.style('background-color', 'black');
 // sel.style('font-size', '25px');
 // sel.style('color', 'white');
 
  
  
  //slider = createSlider(1, 1000, 1);
  //slider.position(dropdownx-100, dropdowny+200);
  //slider.style('width', '400px');
  //slider.style('background-color', 'gray');
  //slider.style('font-size', '18px');
  //slider.style('color', '#ff0000');
  
  
  
  
  textSize(60);
  
  
  
  
  var i_count = 0;
  for (let i = linex1; i <= linex2; i+= (linex2-linex1)/12) {
    
    imageMode(CENTER);
    // sets the initial x position 
    productImagesX[i_count] = i;
    productImagesY[i_count] = lineheight-50;
    image(productImages[i_count],productImagesX[i_count], productImagesY[i_count]); // IMAGE SIZE HERE IF WANT SCALE
    //image(productImages[i_count],30, 30);
    ellipse(i,lineheight,10,10);
    //none have nouse over to start
    overImage[i_count] = false;
    xOffset[i_count] = 0.0;
    yOffset[i_count] = 0.0;
    
        
    i_count += 1;

  }

   
}

function draw() {
  //applyAspect();
  
  background('white');
  //print(input.value());
  waterNoise();
 // windowResized();
  
 
  fill('black');
  textSize(30);
  noStroke();
  textFont(greycliffBold);
  textAlign(CENTER, TOP);
  text('We are harming the environment (and our wallets) by shipping products which are mostly water to homes which already have water.', WIDE/2, 20);
  textFont(greycliffMediumOblique);
  textSize(20);
  //text('drag products to represent the amount of each your household consumes in a year & reveal the hidden water and costs:', (linex1+linex2)/2,110);
  text('Drag up products to represent the amount of each your household consumes in a year.\nAssuming others buy similarly, select a scale to reveal the hidden water and costs of our collective consumption:', WIDE/2,90);
  //text('imagine others buy similarly - this is the impact at scale:', WIDE/2, (HIGH/16)*9);
  textSize(10);
   textAlign(CENTER, CENTER);
   textFont(greycliffLight);
  
    totalGallons = 0.0;
    totalGallonsProduct = 0.0;
    productWeightPounds = 0.0;
    totalPounds = 0.0;
    productsPrice = 0.0;
    totalPrice = 0.0;
    shipping = 0.0;
    totalShipping = 0.0;
    productCarbon = 0.0;
    totalCarbon = 0.0; 
    waterPercent = 0.0;
    costPercent = 0.0;
  
  //WHERE DOES THIS BELONG  IN THE LOOP? ITS NOT HERE BUT I CAN'T DETERMINE
  

  stroke(170,175,191,50);
  strokeWeight(6);
  line(linex1, lineheight, linex2, lineheight);
 
  strokeWeight(.5);
 

  
  
  var i_count = 0;
  for (let i = linex1; i <= linex2; i+= (linex2-linex1)/12) {
    fill('black');
    noStroke();
    ellipse(i,lineheight,2,2);
    
    
    
    
    
    if (
          mouseX > productImagesX[i_count] - productImages[i_count].width &&
          mouseX < productImagesX[i_count] + productImages[i_count].width &&
          mouseY > productImagesY[i_count] - productImages[i_count].height &&
          mouseY < productImagesY[i_count] + productImages[i_count].height
      
          
        ) {
          overImage[i_count] = true;
          
          ////TINT DOESNT WORK
          //tint(0, 153, 204); 
          //productImages[i_count];
          //(table.getColumn('ProductWeight_Lbs')[i_count])
          print("over image");
          if (!locked) {
          
          productImages[i_count];
          }
        } else {
          stroke(156, 39, 176);
          overImage[i_count] = false;
        }
        
        if (overImage[i_count]) {
           image(productImagesHover[i_count], productImagesX[i_count], productImagesY[i_count]);
           text(33);
           //text(table.getColumn('ProductCategoryMore')[i_count], productImagesX[i_count], productImagesY[i_count]-20);
           text(table.getColumn('ProductCategoryMore')[i_count], productImagesX[i_count], lineheight + 19);
  
        }
        else {
          image(productImages[i_count],productImagesX[i_count], productImagesY[i_count]);
        }
        
        

        
    
    //map value  Number: the incoming value to be converted
    //start1  Number: lower bound of the value's current range
    //stop1  Number: upper bound of the value's current range
    //start2  Number: lower bound of the value's target range
    //stop2  Number: upper bound of the value's target range
    
    amount = round(map(productImagesY[i_count], (productImages[i_count].height), lineheight - (productImages[i_count].height), 10, 0, true));
    //amounts = amounts + amount;
    // size_FlOz = float(amount*(table.getColumn('Size_FlOz')[i_count]));
    //productsWaterGallons = 0.0078125*productsWaterFlOz;
    //productsSizeGallons = 0.0078125*size_FlOz;
    //totalGallons = totalGallons + productsWaterGallons;
   // print('THIS IS THE AMOUNT' + int(amounts));
    textSize(14);
    fill('grey');
    noStroke();
    ellipse(i,lineheight,3,3);
    noStroke();
    textSize(17);
    //text above products
    textAlign(CENTER);
    fill('black');
    text(int(amount), productImagesX[i_count], productImagesY[i_count] - (((productImages[i_count].height)/2)+27));
    stroke('grey');
    strokeWeight(.5);
    line(productImagesX[i_count], lineheight, productImagesX[i_count], productImagesY[i_count] + ((productImages[i_count].height)/2))
   // stroke(.5);
   
   fill('black');
  
    //this returns the flOz of water in the # they've selected
    // i think i have to round 'amount' here so that i don't get the exact height but the 1 2 3
    //WATER!
    productsWaterFlOz = float(amount*(table.getColumn('WaterFlOz')[i_count]));
    size_FlOz = float(amount*(table.getColumn('Size_FlOz')[i_count]));
    productsWaterGallons = 0.0078125*productsWaterFlOz;
    productsSizeGallons = 0.0078125*size_FlOz;
    totalGallons = totalGallons + productsWaterGallons;
    totalGallonsProduct = totalGallonsProduct + productsSizeGallons;
    
    //POUNDS!
    //
    productWeightPounds = float(amount*(table.getColumn('ProductWeight_Lbs')[i_count]));
    totalPounds = totalPounds + productWeightPounds;
    
    //CARBON
    productCarbon = float(amount*(table.getColumn('Carbon')[i_count]));
    totalCarbon = totalCarbon + productCarbon;
    
    //COST
    productsPrice = float(amount*(table.getColumn('AvgPrice$')[i_count]));
    totalPrice = totalPrice + productsPrice;
    //shipping = float(amount[i] *6);
    shipping = float(amount*(table.getColumn('Cost')[i_count]));
    totalShipping = totalShipping + shipping;
    
    //text(nfc(productsWaterGallons, 2), productImagesX[i_count], productImagesY[i_count] - (((productImages[i_count].height)/2)+30));
   
     
    
    i_count += 1;

  }
  
 
  
  

//

      
   
    
    //mySliderEvent();
    //mySelectEvent();
   
    //WRITE THE TOTAL GALLONS OF WATER WITH SOFTNUM (THIS DOESN"T YET MULTIPLY BY SLIDER OR DROPDOWN)
    textSize(55);
    
    
    //num.update();
    //num.setTarget(nfc(totalGallons, 1));
    //BRING THIS SOFTNUM BACK
    //text(nfc(num.value, 1), width/5, height-300);
   
   //percent water, percent cost
    textSize(60);
    noStroke();
    if (totalGallonsProduct == 0){
      waterPercent= 0
    }
    else {
       waterPercent = (totalGallons/totalGallonsProduct)*100;
    }  
      
    if (totalPrice == 0){
      costPercent = 0
    }
    else {
       costPercent = (totalShipping/totalPrice)*100;
    }  
    
    
  //  text(nfc(waterPercent, 0) + '%', percentWater_x, aboveNumberCenter_y);
   // text('x $6', percentCost_x, aboveNumberCenter_y);
   // print('LOOK HERE:' + int(amount));
   // text(nfc(costPercent, 0) + '%', percentCost_x, aboveNumberCenter_y);
   
    //percent water, percent cost TEXT
    textSize(20);
    textAlign(CENTER, TOP); 
   
    //text('of product(s)\n is water', percentWater_x, aboveTextCenter_y);
    //text('of the total $x\n product cost is\n embedded in shipping', percentCost_x, aboveTextCenter_y);
    //text('$' + totalPrice, percentCost_x+55, aboveTextCenter_y);
   
    
    
    
    //NEED TO MULTIPLY IT
    textSize(60);
    text(nfc(totalGallons*buttonValue,0) + ' gal', gallonsWater_x, belowNumberCenter_y);
    text('$' + nfc(totalShipping*buttonValue,0), dollarsShipping_x , belowNumberCenter_y);
    text(nfc((totalCarbon/1000)*buttonValue,0) + ' kg', gramsCarbon_x, belowNumberCenter_y);
    text(nfc(totalPounds*buttonValue,0) + ' lbs', pounds_x, belowNumberCenter_y);
      
    textSize(30);
    fill('black');
    text('of water transported', gallonsWater_x, belowTextCenter_y - 55);
    textSize(14);
    fill(149, 174, 198);
    text('uses my own lyophelization experiment data\ngeneralizes to product categories', gallonsWater_x, belowTextCenter_y);
    
    textSize(30);
    fill('black');
    text('spent just on delivery', dollarsShipping_x , belowTextCenter_y - 55);
    textSize(14);
    fill(149, 174, 198);
    text('assumes $6 embedded urban logistics cost,\nindividual parcels', dollarsShipping_x , belowTextCenter_y);
    
    textSize(30);
    fill('black');
    text('of CO2 emitted in that delivery', gramsCarbon_x, belowTextCenter_y - 55);
    textSize(14);
    fill(149, 174, 198);
    text('emissions = ' + nfc((totalCarbon*buttonValue)/404, 0) + ' vehicle-miles, ' + nfc((totalCarbon*buttonValue)/21772.4, 0) + ' trees-worth to sequester\nassumes 181gCO2/parcel avg;', gramsCarbon_x, belowTextCenter_y);
   
    textSize(30);
    fill('black');
    text('lugged', pounds_x, belowTextCenter_y - 55);
    textSize(14);
    fill(149, 174, 198);
    text('scrapes product weights from e-commerce listings', pounds_x, belowTextCenter_y);
    
  
    //THIS DOESN"T WORK
    //text(mySelectEvent(event), width/5, height-300);
    textSize(10);
    
     // WHY CAN"T I USE DROPDOWNY?
    text(citySelected, WIDE-100, 75);
    //GAH THIS DOESN'T WORK!!
    //text(citySelectedValue, width/5, height-300);
    textSize(20);
    textAlign(CENTER, CENTER);
    
    

   //if (sliderValueSelected == null && citySelected != 'none selected'){
   //  textSize(30);
   //  text('For ' + citySelected + ':', 200, 200);
   
   
   
  
  
} // THE END OF DRAW FUNCTION
  

function mySliderEvent(){
  sliderValueSelected = slider.value();
  //textSize(30);
  //text('For ' + sliderValueSelected + ' apartment(s):', 200, 200);
  }
  
function mySelectEvent() {
  citySelected = sel.value();
    if (sliderValueSelected == null && citySelected != 'none selected'){
    textSize(30);
    text('For ' + citySelected + ':', 200, 200);
    if(citySelected == 'NYC apartments'){
      //return float(NYCapartments);
      
     // citySelected = float(NYCapartments);
      citySelectedValue = float(NYCapartments);
    }
   }
  
 }


function waterNoise (){
   //background('white');
  
    //into the blueeee
    fill(204, 229, 255, 90);
    noStroke();
    // We are going to draw a polygon out of the wave points
    beginShape();
  
    let xoff = 0; // Option #1: 2D Noise
    // let xoff = yoff; // Option #2: 1D Noise
  
    // Iterate over horizontal pixels
    for (let x = 0; x <= WIDE; x += 10) {
        // Calculate a y value according to noise, map to
    
        // Option #1: 2D Noise
       // map(value, start1, stop1, start2, stop2, [withinBounds])
       //change start2 and stop2 to + and minus 50 of the percentage
       //to get the percentage... 
       //(table.getColumn('WaterFlOz')[i_count])  'Size_FlOz'
        let y = map(noise(xoff, yoff), 0, 1, (1-(totalGallons/totalGallonsProduct))*HIGH +40,(1-(totalGallons/totalGallonsProduct))*HIGH -40);
    
        // Option #2: 1D Noise
       // let y = map(noise(xoff), 0, 1, 200,300);
    
        // Set the vertex
        vertex(x, y);
        textSize(22);
        //fill(204, 229, 255);
       // fill(149, 174, 198);
        fill(149, 174, 198);
        //text(round((totalGallons/totalGallonsProduct)*100) + '%', 5,(1-(totalGallons/totalGallonsProduct))*height -10);
        noStroke();
        textSize(60);
        text(nfc(waterPercent,0) + '%', percentWater_x,(1-(totalGallons/totalGallonsProduct))*height -20);
        textSize(30);
        text('of product(s)\nis water', percentWater_x,(1-(totalGallons/totalGallonsProduct))*height +60);
        // Increment x dimension for noise
        
        fill(204, 229, 255, 90);
        xoff += 0.04;
      }
    // increment y dimension for noise
    yoff += 0.01;
    vertex(WIDE, HIGH);
    vertex(0, HIGH);
    endShape(CLOSE);
  }

function mousePressedonImage() {
var i_count = 0;
  for (let i = linex1; i <= linex2; i+= (linex2-linex1)/12) {
    
    if (overImage[i_count]) {
      locked[i_count] = true;
      fill(255, 255, 255);
    } else {
      locked[i_count] = true;
    }
   
    xOffset[i_count] = mouseX - productImagesX[i_count];
    yOffset[i_count] = mouseY - productImagesY[i_count];
    text((table.getColumn('ProductCategoryMore')[i_count]), productImagesX[i_count], productImagesY[i_count] - (((productImages[i_count].height)/2)-10));
    i_count += 1;
  }
}



function mousePressed() {
  
  //let x = mouseX
  //let y = mouseY
  ////after i do this, in order to make it turn off when slide is slid, change this to else, and if slider is pressed, null else all the stuff below
  //if (x > NYC_ellipse_x && x < NYC_ellipse_x + NYCCircle && y > NYC_ellipse_y && y < NYC_ellipse_y + NYCCircle) {
  //  NYCcircle_stroke = 'black';
  //  // chicagocircle_stroke = null
  //  // 
    
  // }
    
  mousePressedonImage();
 
  
  
  }
  
  // 


function mouseDragged() {
   var i_count = 0;
  for (let i = linex1; i <= linex2; i+= (linex2-linex1)/12) {
       
    if (overImage[i_count] && mouseY <lineheight - (productImages[i_count].height)/2) {
     // and if mouseX and mouseY 
    // TINT DOESN"T WORK ANYWHERE
     //tint(0, 153, 204); 
     //productImages[i];
      productImagesY[i_count] = mouseY - yOffset[i_count];
      fill('pink');
      }
     i_count += 1;
    }
}

function mouseReleased() {
     var i_count = 0;
      for (let i = linex1; i <= linex2; i+= (linex2-linex1)/12) {
        locked[i_count] = false;
        i_count += 1;
      }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function applyAspect() {
  let aspectX = width / WIDE;
  let aspectY = height / HIGH;
  aspectScale = min(aspectX, aspectY);
  let h = floor(aspectScale * HIGH);
  aspectTop = (height - h) / 2;
  let w = floor(aspectScale * WIDE);
  aspectLeft = (width - w) / 2;
  translate(aspectLeft, aspectTop);
  scale(aspectScale, aspectScale);
}

function amouseX() {
  return floor((mouseX - aspectLeft) / aspectScale);
}

function amouseY() {
  return floor((mouseY - aspectTop) / aspectScale);
}

 function processButtonClick()
    {
      buttonValue = this.elt.value
      console.log(buttonValue)
      
      //Switch off all the other buttons
      for(var i=0; i<buttons.length; i++)
      {
        console.log(buttons[i]);
        //buttons[i].style('background-color', 'transparent')
        //buttons[i].style('font-size', '17px')
        buttons[i].style('font-family', 'greycliffLight')
        //buttons[i].style('cursor', 'pointer')
        //buttons[i].style('background-color', 'transparent')
        //buttons[i].style('border', 'none')
        //buttons[i].style('width', '90px');
        //buttons[i].style('height', '50px')
        //buttons[i].style('text-shadow', '0 px 0px')
        //buttons[i].style('text-decoration', 'none')
        
      }
      //Switch on this button
      //this.style('background-color', '8AB9E8')

      this.style('font-family', 'greycliffBold')

      //this.style('text-decoration', 'underline overline')

     // this.style('transition', 'transform 500ms $ease-in-out-back, background-position 800ms $ease-in-out-back, box-shadow 500ms linear')
     // this.style('background-image', 'linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%)')
     
        
    }
    
