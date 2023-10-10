function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if (score>=90 && score<=100){
        if (score<=92) return "A-";
        else if(score>=98) return "A+";
        else return "A";
    } 
    if (score>=80 && score<=89){
        if (score<=82) return "B-";
        else if(score>=88) return "B+";
        else return "B";
    }        
    if (score>=70 && score<=79){
        if (score<=72) return "C-";
        else if(score>=78) return "C+";
        else return "C";
    } 
    if (score>=60 && score<=69) {
        if (score<=62) return "D-";
        else if(score>=68) return "D+";
        else return "D";
    } 
    if (score>=50 && score<=59) {
        if (score<=52) return "E-";
        else if(score>=58) return "E+";
        else return "E";
    } 
    if (score>=0 && score<=49) return "F"
    if (score<0 || score>100) return "INVALID SCORE";
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
