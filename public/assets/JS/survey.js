﻿var surveyJSON = { pages: [{ elements: [{ type: "radiogroup", choices: [{ value: "1", text: "first item" }, { value: "2", text: "second item" }, { value: "3", text: "third item" }, { value: "4", text: "fourth item" }], choicesOrder: "asc", isRequired: true, name: "question1" }], name: "Question 1" }, { elements: [{ type: "radiogroup", choices: [{ value: "1", text: "first item" }, { value: "2", text: "second item" }, { value: "3", text: "third item" }, { value: "4", text: "fourth item" }], choicesOrder: "desc", isRequired: true, name: "question2" }], name: "Question 2" }, { elements: [{ type: "radiogroup", choices: [{ value: "1", text: "first item" }, { value: "2", text: "second item" }, { value: "3", text: "third item" }, { value: "4", text: "fourth item" }], choicesOrder: "asc", isRequired: true, name: "question3" }], name: "Question 3" }, { elements: [{ type: "radiogroup", choices: [{ value: "1", text: "first item" }, { value: "2", text: "second item" }, { value: "3", text: "third item" }, { value: "4", text: "fourth item" }], choicesOrder: "asc", isRequired: true, name: "question4" }], name: "Question 4" }, { elements: [{ type: "radiogroup", choices: [{ value: "1", text: "first item" }, { value: "2", text: "second item" }, { value: "3", text: "third item" }, { value: "4", text: "fourth item" }], choicesOrder: "asc", isRequired: true, name: "question5" }], name: "Question 5" }, { elements: [{ type: "radiogroup", choices: [{ value: "1", text: "first item" }, { value: "2", text: "second item" }, { value: "3", text: "third item" }, { value: "4", text: "fourth item" }], choicesOrder: "asc", isRequired: true, name: "question6" }], name: "Question 6" }, { elements: [{ type: "radiogroup", choices: [{ value: "1", text: "first item" }, { value: "2", text: "second item" }, { value: "3", text: "third item" }, { value: "4", text: "fourth item" }], choicesOrder: "asc", isRequired: true, name: "question7" }], name: "Question 7" }, { elements: [{ type: "radiogroup", choices: [{ value: "1", text: "first item" }, { value: "2", text: "second item" }, { value: "3", text: "third item" }, { value: "4", text: "fourth item" }], choicesOrder: "asc", isRequired: true, name: "question8" }], name: "Question 8" }] }
var survey = new Survey.Model(surveyJSON);
Survey.Survey.cssType = "bootstrap";
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});
function sendDataToServer(survey) {
    var resultAsString = JSON.stringify(survey.data);
    alert(resultAsString); 
    //Build HTML or Model to go into here and view upon completition 
    $.post("/survey", resultAsString).done(function (response) {
            //model or HTML to present image and car data
    })
}