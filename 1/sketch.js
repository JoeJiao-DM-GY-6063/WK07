// TODO: load text
//       count words

let mString = [];

function preload() {
  mString = loadStrings("../assets/article.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  let mString = mString[0];
  print(mString, mString.length);

  let mWords = mString.toLowerCase().split(" ");
  print(mWords,mWords.length);

  let wordCounts = {};

  for (let idx = 0; idx < mWords.length; idx++) {
    let (mWords = mWords[idx]).replace(".", "").replace(".","")
    if (mWords in wordCounts) {
      wordCounts[mWords] = wordCounts[mWords] + 1;
    }else {
      wordCounts[mWords] = 1;
    }
    
  }
  print(wordCounts);
}

function draw() {}
