var quiz = {
  user: "Dave",
  questions: [
    {
      text: "Who is making the Web standards?",
      responses: [
        { text: "Google" },
        { text: "The World Wide Web cousortium", correct: true },
        { text: "Microsoft" },
        { text: "Mozilla" }] },
        
        {
          text: "Which operator is used to assign a value to a variable?",
          responses: [
          { text: "=", correct: true },
          { text: "+" },
          { text: "*" },
          { text: "-" }] },

          
  {
    text: "Which HTML tag is used to define an internal style sheet?",
    responses: [
    { text: "<script>" },
    { text: "<style>", correct: true },
    { text: "<css>" },
    { text: "<body>" }] },
    

  {
    text: "Which is the correct CSS syntax?",
    responses: [
    { text: "body {color: black;}", correct: true },
    { text: "{body: color= black;}" },
    { text: "body: color= black" },
    { text: "{body; color: black;}" }] },


    
    {
      text: "How do you insert a comment in a CSS file?",
      responses: [
        { text: " 'this is a comment" },
        { text: "/* this is a comment */", correct: true },
        { text: "// this is a commnet //" },
        { text: "// this is a comment" }] },
        
        {
          text: "Which property is used to change the background color?",
          responses: [
          { text: "color" },
          { text: "background-color", correct: true },
          { text: "bg-color" },
          { text: "background color" }] },

  {
    text: "Which CSS property controls the text size?",
    responses: [
    { text: "font-size", correct: true },
    { text: "text-style" },
    { text: "text-size" },
    { text: "font-style" }] },


  {
    text: "Inside which HTML element do we put the JavaScript?",
    responses: [
    { text: "<scripting>" },
    { text: "<js>" },
    { text: "<script>", correct: true },
    { text: "<javascript>" }] },


  {
    text:"How do you write 'Hello World' in an alert box?",
    responses: [
    { text: "msgBox('Hellow World')" },
    { text: "msg('Hello World')" },
    { text: "alert('Hello World')", correct: true },
    { text: "alertBox('Hello World')" }] },


  {
    text: "Choose the correct HTML element for the largest heading: ",
    responses: [
    { text: "<heading>" },
    {text: "<h6>" },   
    { text: "<h1>", correct: true },
    { text: "<head>" }] },


    {
      text: "Choose the correct HTML element to define important text",
      responses: [
      { text: "<important>" },
      { text: "<i>" },
      { text: "<strong>", correct: true },
      { text: "<b>" }] },

  {
    text: "Choose the correct HTML element to define emphasized text",
    responses: [
    { text: "<i>" },
    { text: "<em>", correct: true },
    { text: "<strong>" },
    { text: "<br>" }] },


  {
    text:"Which character is used to indicate an end tag?",
    responses: [
    {text: "^" },
    { text: ">" },
    { text: "/", correct: true },
    { text: "<" }] },

    {
      text: "The default link color for hyperlinks:",
      responses: [
      { text: "blue", correct: true },
      { text: "green" },
      { text: "red" },
      { text: "purple" }] },
    
  {
    text: "Which tag is used to underline text?",
    responses: [
    { text: "<a>" },
    { text: "<u>", correct: true },
    { text: "<i>" },
    { text: "<i>" }] },


  {
    text: "What does XML stand for?",
    responses: [
    { text: "eXtensible Markup Language", correct: true },
    { text: "Example Markup Language" },
    { text: "xtral Modern Link" },
    { text: "x-markup Language" }] },


  {
    text: "There is a way of describing XML data, how?",
    responses: [
    { text: "XML uses a description node to describe data" },
    { text: "XML uses XSL to describe data" },
    { text: "XML uses a DTD to describe the data", correct: true },
    { text: "XML uses data to describe xsl" }] },


  {
    text: "What does DTD stand for?",
    responses: [
    { text: "Dynamic Type Definition" },
    { text: "Do The Dance" },
    { text: "Document Type Definition ", correct: true },
    { text: "Direct Type Definition" }] },


  {
    text: "Which statement is true?",
    responses: [
    { text: "All the statements are true" },
    { text: "All XML elements must be properly closed", correct: true },
    { text: "All XML elements must be lower case" },
    { text: "All XML documents must have a DTD" }] },


  {
    text: "Which statement is NOT true?",
    responses: [
    { text: "XML documents must have a root tag" },
    { text: "XML elements must be properly nested" },
    { text: "White-space is not preserved in XML", correct: true },
    { text: "XML tags are case sensitive" }] },


  {
    text: "Which is not a correct name for an XML element?",
    responses: [
    { text: "<1dollar> ", correct: true },
    { text: "<Note>" },
    { text: "<h1>"},
    { text: "All 3 names are incorrect"}]},


  {
    text: "Which is not a correct name for an XML element?",
    responses: [
    { text: "<first name> ", correct: true },
    { text: "<age>" },
    { text: "<NAME>" },
    { text: "All 3 names are incorrect" }] },


  {
    text: "What is a correct way of referring to a stylesheet called 'mystyle.xsl'?",
    responses: [
    { text: "<link type='text/xsl' href='mystyle.xsl' />" },
    { text: "<stylesheet type='text/xsl' href='mystyle.xsl' />" },
    { text: "<?xml-stylesheet type='text/xsl' href='mystyle.xsl' ?> ", correct: true},
    { text: "All of the above"}] },




  {
    text: `What is the correct JavaScript syntax to change the content of the HTML element below?
    <p id="demo">This is a demonstration.</p>`,
    responses: [
    { text: `document.getElementByName("p").innerHTML = "Hello World!";` },
    { text: `#demo.innerHTML = "Hello World!";` },
    { text: `document.getElementById("demo").innerHTML = "Hello World!";`, correct: true },
    { text: `document.getElement("p").innerHTML = "Hello World!";`}] },


  {
    text: "How do you create a function in JavaScript?",
    responses: [
    { text: "myFunction()" , correct:true },
    { text: "call myFunction()" },
    { text: "call function myFunction()"},
    { text: "All of the above"}] },


  {
    text: "How to write an IF statement in JavaScript?",
    responses: [
    { text: "if i = 5 " },
    { text: "if i = 5 then" },
    { text: "if (i == 5)", correct: true },
    { text: "if i == 5 then" }] },




  {
    text: "How does a WHILE loop start?",
    responses: [
    { text: "while (i <= 10; i++)" },
    { text: "while i = 1 to 10" },
    { text: "while (i <= 10)", correct: true },
    { text: "None of the above" }] },


  {
    text: `How to write an IF statement for executing some code if "i" is NOT equal to 5?`,
    responses: [
    { text: "if i <> 5" },
    { text: "if i =! 5 then" },
    { text: "if (i <> 5)"},
    { text: "if (i != 5) ", correct: true}] },


  {
    text: "How does a FOR loop start?",
    responses: [
    { text: "for (i = 0; i <= 5)" },
    { text: "for i = 1 to 5" },
    { text: "for (i = 0; i <= 5; i++) ", correct: true },
    { text: "for (i <= 5; i++)" }] },


  {
    text: "What is the correct way to write a JavaScript array?",
    responses: [
    { text: `var colors = (1:"red", 2:"green", 3:"blue")` },
    { text: `var colors = "red", "green", "blue"` },
    { text: `var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")`},
    { text: `var colors = ["red", "green", "blue"] `, correct: true }] },
  {
    text: "Is JavaScript case-sensitive?",
    responses: [
    { text: `Yes`, correct: true  },
    { text: `No`}] },
  {
    text: "What will the following code return: Boolean(10 > 9)",
    responses: [
    { text: `NaN` },
    { text: `true`, correct: true },
    { text: `false`},
    { text: `None of the above` }] },
  {
    text: "Which event occurs when the user clicks on an HTML element?",
    responses: [
    { text: `onmouseover` },
    { text: `onchange` },
    { text: `onclick`, correct: true},
    { text: `onmouseclick` }] },
  {
    text: "What is the default value of the position property?",
    responses: [
    { text: `relative` },
    { text: `fixed` },
    { text: `absolute`},
    { text: `static `, correct: true }] },
  {
    text: "How do you group selectors?",
    responses: [
    { text: `Separate each selector with a plus sign` },
    { text: `Separate each selector with a comma `, correct: true },
    { text: `Separate each selector with a space`},
    { text: `All of the above`}] },
  {
    text: "How do you select elements with class name 'test'?",
    responses: [
    { text: `*test` },
    { text: `#test` },
    { text: `test`},
    { text: `.test  `, correct: true }] },
  {
    text: `How do you display a border like this: 
    The top border = 10 pixels
    The bottom border = 5 pixels
    The left border = 20 pixels
    The right border = 1pixel?`,
    responses: [
    { text: `border-width:10px 1px 5px 20px;`, correct: true },
    { text: `border-width:5px 20px 10px 1px;` },
    { text: `border-width:10px 5px 20px 1px`},
    { text: `border-width:10px 5px 20px 1px` }] },
  {
    text: "How do you select an element with id 'demo'?",
    responses: [
    { text: `demo` },
    { text: `*demo` },
    { text: `#demo`, correct: true},
    { text: `.demo`}] },
  {
    text: "How do you make each word in a text start with a capital letter?",
    responses: [
    { text: `text-style:capitalize` },
    { text: `transform:capitalize` },
    { text: `text-transform:capitalize `, correct: true},
    { text: `You can't do that with CSS `}] },
  {
    text: "How do you display hyperlinks without an underline?",
    responses: [
    { text: `a {decoration:no-underline;}` },
    { text: `a {text-decoration:no-underline;}` },
    { text: `a {underline:none;}`},
    { text: `a {text-decoration:none;}  `, correct: true }] },
  {
    text: "Which HTML element is used to specify a header for a document or section?",
    responses: [
    { text: `<header>`, correct: true},
    { text: `<top>` },
    { text: `<section>`},
    { text: `<head>` }] },
  {
    text: "In HTML, what does the <aside> element define?",
    responses: [
    { text: `The ASCII character-set; to send information between computers on the Internet` },
    { text: `Content aside from the page content `, correct: true },
    { text: `A navigation list to be shown at the left side of the page`},
    { text: `All of the above` }] },
  {
    text: "Which HTML element is used to display a scalar measurement within a range?",
    responses: [
    { text: `<meter>`, correct: true },
    { text: `<range>` },
    { text: `<measure>`},
    { text: `<gauge>`}] },
  {
    text: "Which input type defines a slider control?",
    responses: [
    { text: `slider` },
    { text: `search` },
    { text: `controls`},
    { text: `range`, correct: true }] },
  {
    text: "In HTML, which attribute is used to specify that an input field must be filled out?",
    responses: [
    { text: `formvalidate` },
    { text: `required`, correct: true },
    { text: `validate`},
    { text: `placeholder`}] },
  {
    text: "The HTML <canvas> element is used to:",
    responses: [
    { text: `manipulate data in MySQL` },
    { text: `create draggable elements` },
    { text: `display database records`},
    { text: `draw graphics`, correct: true }] },
  {
    text: `The HTML global attribute, "contenteditable" is used to:`,
    responses: [
    { text: `Specifies a context menu for an element. The menu appears when a user right-clicks on the element` },
    { text: `Update content from the server` },
    { text: `Return the position of the first found occurrence of content inside a string`},
    { text: `Specify whether the content of an element should be editable or not `, correct: true }] },
  {
    text: "Which doctype is correct for HTML5?",
    responses: [
    { text: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd">` },
    { text: `<!DOCTYPE html> `, correct: true },
    { text: `<!DOCTYPE HTML5>`},
    { text: `None of the above` }] },
  {
    text: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    responses: [
    { text: `longdesc` },
    { text: `title` },
    { text: `src`},
    { text: `alt   `, correct: true }] },
  {
    text: "HTML comments start with <!-- and end with -->",
    responses: [
    { text: `True`, correct: true },
    { text: `False` },
    { text: `Sometimes`},
    { text: `None of the above `}] },
  ] },




userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questions: quiz.questions,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    quizStarted: true,
    isActive: false },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    } },


  methods: {
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length)
      this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
        typeof this.quiz.questions[i].responses[
        this.userResponses[i]] !==
        "undefined" &&
        this.quiz.questions[i].responses[this.userResponses[i]].correct)
        {
          score = score + 1;
        }
      }
      return score;
    } } });

