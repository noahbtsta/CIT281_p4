const fastify = require('fastify')();
const fs = require('fs');
const {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestionAnswer,
} = require("./p4-module.js");

fastify.get("/cit/question", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: "", statusCode: 200, questions: getQuestions()});
});

fastify.get("/cit/answer", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: "", statusCode: 200, questions: getAnswers()});
});

fastify.get("/cit/questionanswer", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: "", statusCode: 200, question_answers: getQuestionsAnswers()});
});

fastify.get("/cit/question/:number", (request, reply) => {
    const {number} = request.params;
    const q = getQuestionAnswer(parseInt(number));
    if (number > 3) {
      statusCode = 404;
    } else if (number < 1) {
      statusCode = 404;
    } else {
      statusCode = 200;
    }
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: q.error, statusCode, question: q.question, number: q.number});
});

fastify.get("/cit/answer/:number", (request, reply) => {
    const {number} = request.params;
    const q = getQuestionAnswer(parseInt(number));
    if (number > 3) {
      statusCode = 404;
    } else if (number < 1) {
      statusCode = 404;
    } else {
      statusCode = 200;
    }
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: q.error, statusCode, answer: q.answer, number: q.number});
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const {number} = request.params;
    const q = getQuestionAnswer(parseInt(number));
    if (number > 3) {
      statusCode = 404;
    } else if (number < 1) {
      statusCode = 404;
    } else {
      statusCode = 200;
    }
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: "", statusCode, question: q.question, answer: q.answer, number: q.number});
});

fastify.get("/cit/*", (request, reply) => {
    reply
      .code(404)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: "route not found", statusCode: 404});
});

const listenIP = "127.0.0.1";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
