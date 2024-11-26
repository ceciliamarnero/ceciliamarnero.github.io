const title = document.getElementById("title-404");
const subtitle = document.getElementById("explanation");
//const title = document.getElementById("title");
const theVoice = document.getElementById("the-voice");
const originalText = title.innerText;
const originalClass = [...title.classList]; // get current classes

function createTypewriter() {
  return new Typewriter(title, {
    loop: false,
    delay: 45,
  });
}
function createTypewriter2(what) {
  return new Typewriter(what, {
    loop: false,
    delay: 45,
  });
}

//let typewriter = createTypewriter();
let typewriter2 = createTypewriter2(title);
let typewriter3 = createTypewriter2(subtitle);

function showStaticTextAndRestart() {
  typewriter.stop();
  title.innerText = "Hello";
  title.className = ""; // Reset all classes
  //const curs = document.querySelector("span.Typewriter__cursor");
  //curs.classList.add("red");
  title.classList.add(...originalClass);
  theVoice.innerText = "...";

  setTimeout(() => {
    title.innerText = originalText;
    typewriter = createTypewriter();
    startTypewriter();
  }, 12000);
}
function showStaticTextAndRestart2() {
  typewriter2.stop();
  typewriter3.stop();
  title.innerText = "Hello";
  title.className = ""; // Reset all classes
  //const curs = document.querySelector("span.Typewriter__cursor");
  //curs.classList.add("red");
  title.classList.add(...originalClass);
  title.innerText = "...";
  subtitle.innerText = "...";
  theVoice.innerText = "...";

  setTimeout(() => {
    title.innerText = originalText;
    typewriter2 = createTypewriter2(title);
    typewriter3 = createTypewriter2(subtitle);
    startTypewriter404();
  }, 12000);
}

function startTypewriterWelcome() {
  typewriter
    .callFunction(() => {
      title.classList.add("h2");
    })
    .typeString("Welcome to my ")
    .pauseFor(200)
    .callFunction(() => {
      theVoice.innerText = "too long...";
    })
    .pauseFor(200)
    .deleteChars(7)
    .typeString(".")
    .pauseFor(800)
    .callFunction(() => {
      theVoice.innerText = "too formal...";
    })
    .pauseFor(800)
    .deleteAll()
    .typeString("Hi.")
    .callFunction(() => {
      theVoice.innerText = "make it pop...";
    })
    .pauseFor(800)
    .callFunction(() => {
      title.classList.remove("normal");
      title.classList.add("pop");
    })
    .pauseFor(1600)
    .callFunction(() => {
      theVoice.innerText = "oh nevermind...";
    })
    .pauseFor(800)
    .callFunction(() => {
      title.classList.remove("pop");
    })
    .pauseFor(800)
    .callFunction(() => {
      theVoice.innerText = "too informal...";
    })
    .pauseFor(800)
    .deleteChars(2)
    .typeString("ello.")
    .pauseFor(800)
    .callFunction(() => {
      theVoice.innerText = "lose the point...";
    })
    .deleteChars(1)
    .pauseFor(400)
    .typeString(" ;)")
    .pauseFor(800)
    .callFunction(() => {
      theVoice.innerText = "that's not accessible...";
    })
    .pauseFor(400)
    .deleteChars(3)
    .pauseFor(400)
    .callFunction(() => {
      theVoice.innerText = "PERFECTION";
    })
    .pauseFor(2000)
    .callFunction(() => {
      showStaticTextAndRestart();
    })

    .start();
}
function startTypewriter404() {
  typewriter2
    /* .callFunction(() => {
      title.classList.add("h2");
    }) */
    .typeString("OMG! This is fatal!")
    .pauseFor(100)
    .callFunction(() => {
      theVoice.innerText = "NO it's not!";
    })
    .pauseFor(200)
    .deleteAll();
  typewriter3
    .typeString("You got here because you were looking for a page that doesn't exist")
    .pauseFor(800)
    .callFunction(() => {
      theVoice.innerText = "now give a solution...";
    })
    .pauseFor(800)
    .deleteAll()
    .typeString("Hi.")
    .callFunction(() => {
      theVoice.innerText = "make it pop...";
    })
    .pauseFor(800)
    .callFunction(() => {
      title.classList.remove("normal");
      title.classList.add("pop");
    })
    .pauseFor(1600)
    .callFunction(() => {
      theVoice.innerText = "oh nevermind...";
    })
    .pauseFor(800)
    .callFunction(() => {
      title.classList.remove("pop");
    })
    .pauseFor(800)
    .callFunction(() => {
      theVoice.innerText = "too informal...";
    })
    .pauseFor(800)
    .deleteChars(2)
    .typeString("ello.")
    .pauseFor(800)
    .callFunction(() => {
      theVoice.innerText = "lose the point...";
    })
    .deleteChars(1)
    .pauseFor(400)
    .typeString(" ;)")
    .pauseFor(800)
    .callFunction(() => {
      theVoice.innerText = "that's not accessible...";
    })
    .pauseFor(400)
    .deleteChars(3)
    .pauseFor(400)
    .callFunction(() => {
      theVoice.innerText = "PERFECTION";
    })
    .pauseFor(2000)
    .callFunction(() => {
      showStaticTextAndRestart();
    })

    .start();
}

//startTypewriterWelcome();
startTypewriter404();
