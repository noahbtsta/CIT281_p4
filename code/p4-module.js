//CIT281 P4
//Noah Bautista

const {data} = require('./p4-data.js');

function getQuestions(){
    return data.map(e => e.question);
}

function getAnswers(){
   return data.map(e => e.answer);
}
function getQuestionsAnswers() {
    const originalArr = data;
    const clonedArr = originalArr.slice(0); // slice with index is FASTER
   
    return clonedArr;
}
function getQuestion(number= ""){
  let questionObj = {
      question:"",
      number:"",
      error:"",
  };
  
  if(!Number.isInteger(number)){
      questionObj.error = "number must be an integer";
      console.log("Number must be an integer");
  }
  else if(number > 3){
    questionObj.error = "number must be less than 3";
    console.log("Number must be less than 3");
  }
  else if(number <=0){
    questionObj.error = "number must be greater than 0";
    console.log("Number must be greater than 0");
  }
  else{
      index = number -1;
      questionObj.number = number;
      questionObj.question = data[index].questions;
  }
  return questionObj;
};

function getAnswer(number = ""){
    let answerObj = {
        answer:"",
        number:"",
        error:"",
    };
    
    if(!Number.isInteger(number)){
        answerObj.error = "number must be an integer";
        console.log("Number must be an integer");
    }
    else if(number >= 1){
        answerObj.error = "number must be greater than or equal to 1";
        console.log("Number must be greater than or equal to 1");
    }
    else if(number < 3){
        answerObj.error = "number must be less than number of questions (3)";
        console.log("Number must be less than number of questions (3)");
    }
    else{
        index = number -1;
        answerObj.number = number;
        answernObj.answer = data[index].answer;
    }
    return answerObj;
};

function getQuestionAnswer(number="") {
    return [ ...data.data ];
 }

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = true;
  const testGetA = true;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }
