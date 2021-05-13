var  pageSymptoms = document.getElementsByClassName("form-check-input")
var pageNames = document.getElementsByClassName("form-check-label")

var youhavepara = document.getElementById("youhavepara")

//disease definitions
var chstcold = "Chest Cold"
var cmncold = "Common Cold"
var flu = "Flu"
var snsts = "Sinusitis"
var skninfcts = "Skin Infections"
var arbnalgrns = "Airborne Allergens"
var cnsmalgrns = "Consumed Allergens"
var corona = "Covid-19"

//diseases
/*
Fever
Cough
Sore throat
Runny nose
Stuffy nose
Headache
Rash
Hives
Swelling
Eye irritation
Sneezing
Watery/puffy eyes
Diarrhea
Nausea
Vomiting
Constipation
Body pain/pressure
Difficulty breathing
Lightheadedness
Loss of taste/smell
*/

var disease = [
    [0, [flu, corona]],  // Fever
    [1, [chstcold, cmncold, flu]],  // Cough
    [2, [cmncold, flu, corona]],  // Sore throat
    [3, [cmncold, flu, snsts, arbnalgrns, corona]],  // Runny nose
    [4, [cmncold, snsts, arbnalgrns]],  // Stuffy nose
    [5, [snsts, corona]],  // Headache
    [6, [skninfcts, cnsmalgrns]], // Rash
    [7, [cnsmalgrns]], // Hives
    [8, [skninfcts, cnsmalgrns]], // Swelling
    [9, [cmncold, arbnalgrns]], // Sneezing
    [10, [arbnalgrns]], // Watery/puffy eyes
    [11, [cnsmalgrns, corona]], // Diarrhea
    [12, [cnsmalgrns, corona]], // Nausea
    [13, [cnsmalgrns, corona]], // Vomiting
    [14, [cnsmalgrns, corona]], // Constipation
    [15, [flu, snsts, corona]], // Body pain/pressure
    [16, [cnsmalgrns, corona]], // Difficulty breathing
    [17, [cnsmalgrns]], // Lightheadedness
    [18, [corona]] // Loss of taste/smell
]

function checkSymptoms(){ //confirmed works

    var allSymptoms = []
    var hasSymptoms = []

    // console.log("pressed")
    // console.log(selectedSymptoms[1].checked)
    
    for (let index = 0; index < pageSymptoms.length; index++) {
        
        allSymptoms[index] = [pageNames[index].innerText, pageSymptoms[index].checked]

        if(pageSymptoms[index].checked == true){
            hasSymptoms.push([index, pageNames[index].innerText])
        }
        
    }

    // console.log(allSymptoms)
    // console.log(hasSymptoms)

    var hasPossibleDiseases = []

    

    for (let i = 0; i < hasSymptoms.length; i++) {
        //take the index of it and get the associated symptoms related to it
        var symptomNum = hasSymptoms[i][0]
        var associatedDiseases = disease[symptomNum][1]
        hasPossibleDiseases.push(associatedDiseases)
        
    }

    // console.log(hasPossibleDiseases)

    var chstcoldNum = 0
    var cmncoldNum = 0
    var fluNum = 0
    var snstsNum = 0
    var skninfctsNum  = 0
    var arbnalgrnsNum = 0
    var cnsmalgrnsNum = 0
    var coronaNum = 0

    for (let j = 0; j < hasPossibleDiseases.length; j++) {
        
        for (let k = 0; k < hasPossibleDiseases[j].length; k++) {
            
            if(hasPossibleDiseases[j][k] == chstcold){
                chstcoldNum += 1
            }else if(hasPossibleDiseases[j][k] == cmncold){
                cmncoldNum += 1
            }else if(hasPossibleDiseases[j][k] == flu){
                fluNum += 1
            }else if(hasPossibleDiseases[j][k] == snsts){
                snstsNum += 1
            }else if(hasPossibleDiseases[j][k] == skninfcts){
                skninfctsNum += 1
            }else if(hasPossibleDiseases[j][k] == arbnalgrns){
                arbnalgrnsNum += 1
            }else if(hasPossibleDiseases[j][k] == cnsmalgrns){
                cnsmalgrnsNum += 1
            }else if(hasPossibleDiseases[j][k] == corona){
                coronaNum += 1
            }
            
        }
        
    }

    //add it to an array and bubble sort it

    var confirmedDiseases = []

    // var chstcoldNum = 0
    // var cmncoldNum = 0
    // var fluNum = 0
    // var snstsNum = 0
    // var skninfctsNum  = 0
    // var arbnalgrnsNum = 0
    // var cnsmalgrnsNum = 0
    // var coronaNum = 0


    if(chstcoldNum > 0){
        confirmedDiseases.push([chstcold, chstcoldNum])
    }
    if(cmncoldNum > 0){
        confirmedDiseases.push([cmncold, cmncoldNum])
    }
    if(fluNum > 0){
        confirmedDiseases.push([flu, fluNum])
    }
    if(snstsNum > 0){
        confirmedDiseases.push([snsts, snstsNum])
    }
    if(skninfctsNum > 0){
        confirmedDiseases.push([skninfcts, skninfctsNum])
    }
    if(arbnalgrnsNum > 0){
        confirmedDiseases.push([arbnalgrns, arbnalgrnsNum])
    }
    if(cnsmalgrnsNum > 0){
        confirmedDiseases.push([cnsmalgrns, cnsmalgrnsNum])
    }
    if(coronaNum > 0){
        confirmedDiseases.push([corona, coronaNum])
    }

    // console.log(confirmedDiseases)

    //begin the bubblesort
    if(confirmedDiseases.length > 0){
        
        var maxIndex
        var temp
        var maxNum
        var sortedSoFar

        maxNum = confirmedDiseases[0][1]
        maxIndex = 0
      	
        sortedSoFar = 0


        while(sortedSoFar < confirmedDiseases.length){

            maxNum = 0
            maxIndex = 0
            
            for (var l = 0; l < confirmedDiseases.length - sortedSoFar; l++) {

            
               if(confirmedDiseases[l][1] > maxNum){
                  maxNum = confirmedDiseases[l][1]
                  maxIndex = l
               }
   
            }
   
            temp = confirmedDiseases[confirmedDiseases.length - sortedSoFar - 1]
            temp2 = confirmedDiseases[maxIndex]

            confirmedDiseases[maxIndex] = temp
            confirmedDiseases[confirmedDiseases.length - sortedSoFar - 1] = temp2
            
            sortedSoFar += 1

        }
    }

    // console.log(confirmedDiseases)

    var youHave = "You May Have:"

    confirmedDiseases = confirmedDiseases.reverse()

    for (let m = 0; m < confirmedDiseases.length; m++) {
        
        youHave += "\n" + (m+1) +  ". " + confirmedDiseases[m][0] 
        
    }
    
    // console.log(youHave)
    
    youhavepara.innerText = youHave


}