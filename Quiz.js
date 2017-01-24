(function() {
    window.onload = init;
})();

function init() {
    show();
}

var questionNumber = 1;
//console.log(questionNumber);

function show() {
    var y = "q" + questionNumber.toString();
    var questionClass = document.getElementsByClassName("questions");
    for (var i = 1; i < questionClass.length+1; i++) {
        var idName = "q" + i.toString();
        //console.log(idName);
        var checkElement = document.getElementById(idName);
        if (idName === y) {
            checkElement.style.display = '';
        }
        else {
            checkElement.style.display = 'none';
        }
    }
}

function showNext() {
    var currentQ = "q" + questionNumber.toString();
    var currentElement = document.getElementById(currentQ);
    var currentRadio = currentElement.getElementsByTagName('input');
    //console.log(currentRadio);
    for (var i = 0; i < currentRadio.length; i++) {
        if (currentRadio[i].checked) {
            questionNumber += 1;
        }
    }
    //questionNumber += 1;
}

function showPrev() {
    questionNumber -= 1;
}

function question1() {
    var x = document.getElementById('q1');
    var y = x.getElementsByTagName('input');
    for (var i = 0; i < y.length; i++) {
        //console.log(y[i]);
        if(y[i].checked) {
            //console.log(y[i]);
            var result = y[i].value;
            //console.log(result);
            return result;
        }
    }
}

function section1() {
    var score = 0;
    var q2 = document.getElementById('q2').getElementsByTagName('input');
    for (var i = 0; i < q2.length; i++) {
        if(q2[i].checked) {
            var result = q2[i].value;
            score += Number(result);
        }
    }
    var q3 = document.getElementById('q3').getElementsByTagName('input');
    for (var i = 0; i < q3.length; i++) {
        if(q3[i].checked) {
            var result = q3[i].value;
            score += Number(result);
        }
    }
    var q4 = document.getElementById('q4').getElementsByTagName('input');
    for (var i = 0; i < q4.length; i++) {
        if(q4[i].checked) {
            var result = q4[i].value;
            score += Number(result);
        }
    }
    var q5 = document.getElementById('q5').getElementsByTagName('input');
    for (var i = 0; i < q5.length; i++) {
        if(q5[i].checked) {
            var result = q5[i].value;
            score += Number(result);
        }
    }
    var q6 = document.getElementById('q6').getElementsByTagName('input');
    for (var i = 0; i < q6.length; i++) {
        if(q6[i].checked) {
            var result = q6[i].value;
            score += Number(result);
        }
    }
    var q7 = document.getElementById('q7').getElementsByTagName('input');
    for (var i = 0; i < q7.length; i++) {
        if(q7[i].checked) {
            var result = q7[i].value;
            score += Number(result);
        }
    }
    var q8 = document.getElementById('q8').getElementsByTagName('input');
    for (var i = 0; i < q8.length; i++) {
        if(q8[i].checked) {
            var result = q8[i].value;
            score += Number(result);
        }
    }
    //console.log(score);
    return score;
}

function section2() {
    var score = 0;
    var q9 = document.getElementById('q9').getElementsByTagName('input');
    for (var i = 0; i < q9.length; i++) {
        if(q9[i].checked) {
            var result = q9[i].value;
            score += Number(result);
        }
    }
    var q10 = document.getElementById('q10').getElementsByTagName('input');
    for (var i = 0; i < q10.length; i++) {
        if(q10[i].checked) {
            var result = q10[i].value;
            score += Number(result);
        }
    }
    var q11 = document.getElementById('q11').getElementsByTagName('input');
    for (var i = 0; i < q11.length; i++) {
        if(q11[i].checked) {
            var result = q11[i].value;
            score += Number(result);
        }
    }
    var q12 = document.getElementById('q12').getElementsByTagName('input');
    for (var i = 0; i < q12.length; i++) {
        if(q12[i].checked) {
            var result = q12[i].value;
            score += Number(result);
        }
    }
    //console.log(score);
    return score;
}

function submit(){
    q1result();
    s1result();
    s2result();
    finalPercentage();
    document.getElementById("main").style.display = 'block';
    document.getElementById("q12").style.display = 'none';
    document.getElementById("bar").style.display = 'none';
}

function move() {
    var progress = questionNumber/12;
    var progressNumber = Math.round(progress*100);
    //console.log(progressPercentage);
    var progressBar = document.getElementById("responseBar");
    var progressPercentage = progressNumber+'%';
    //console.log(progressPercentage);
    progressBar.style.width = progressPercentage;
}

function q1result() {
    var result = question1();
    var card = document.getElementById("q1results")
    card.style.display = 'block';
    if (result === 1) {
        var y = card.getElementsByTagName('p')[0];
        y.style.display = 'block';
    }
    else {
        var y = card.getElementsByTagName('p')[1];
        y.style.display = 'block';
    }
}

function s1result(){
    var total = section1();
    //console.log(total);
    var card = document.getElementById("s1results");
    card.style.display = 'block';
    if (total < 12) {
        var y = card.getElementsByTagName('p')[0];
        y.style.display = 'block';
    }
    else {
        var y = card.getElementsByTagName('p')[1];
        y.style.display = 'block';
    }
}

function s2result(){
    var total = section2();
    //console.log(total);
    var card = document.getElementById("s2results");
    card.style.display = 'block';
    if (total < 9) {
        var y = card.getElementsByTagName('p')[0];
        y.style.display = 'block';
    }
    else {
        var y = card.getElementsByTagName('p')[1];
        y.style.display = 'block';
    }
}

function finalPercentage() {
    var x = section1();
    var y = section2();
    var total = x + y;
    var finalDec = total/34;
    console.log(finalDec);
    var percentage = Math.round(finalDec * 100);
    //var format = percentage+'%';
    if (percentage < 26) {
        var format = '<span class="red">'+percentage+'%</span>';
    }
    else if (percentage < 51) {
        var format = '<span class="orange">'+percentage+'%</span>';
    }
    else if (percentage < 76) {
        var format = '<span class="yellow">'+percentage+'%</span>';
    }
    else {
        var format = '<span class="green">'+percentage+'%</span>';
    }
    if (total < 17) {
        var risk = "low";
        var control = "fulfilled";
    }
    else if (total < 23) {
        var risk = "moderate";
        var control = "somewhat fulfilled";
    }
    else if (total < 29) {
        var risk = "significant";
        var control = "not fulfilled";
    }
    else {
        var risk = "material";
        var control = "not fulfilled";
    }
    //return format
    var string = document.getElementById('percentage');
    string.innerHTML += '<span>'+format+'. This means your organisation holds a '+risk+' level of risk in '+
    'relevance to these practices. The primary control objective of protection against environmental factors is '+control+'.</span>';
}
