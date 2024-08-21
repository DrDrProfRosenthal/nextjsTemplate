
console.log("hello I'm your computer")

document.getElementById("myBtn").focus();

var vocabList = [];
var currentIndex = 0;



// var urlExplain = "https://linguee-api.fly.dev/api/v2/external_sources?query=wary&src=en&dst=en&guess_direction=true&follow_corrections=on_empty_translations"
    
fetch('vocabs.csv')
        .then(response => response.text())
        .then(data => {
            vocabList = parseCSV(data);           
            if (vocabList.length > 0) {
                displayNextVocab();
            }
        })
        .catch(error => console.error('Error loading CSV:', error));

 function parseCSV(data) {
        const lines = data.split('\n');
                return lines.map( (line) => {                    
                try {
                    var parts = line.split(';');   
                    return { english: parts[0].trim(), german: parts[1].trim() }; 
                }catch{
                   return {english:"error999"}
                }
          
        });   
        }    


function displayNextVocab() {
        if(vocabList[currentIndex].english != "error999" && currentIndex < vocabList.length){//sind noch Vokabeln da, schreib die nächste hin  
            console.log(vocabList[currentIndex].english)
            document.getElementById("current-vocab").textContent  = vocabList[currentIndex].german;             
        } else { // sind keine Vokabeln mehr da, fang von vorne an
            currentIndex = 0;
            alert('Congratulations! You have completed the vocabulary list.');
            displayNextVocab();
        }
    }


    document.querySelector('#myBtn').addEventListener('click', () => {
        const input = document.querySelector('.centered-input');
       
        if (input.value.trim().toLowerCase() === vocabList[currentIndex].english.toLowerCase()) {
            input.value = '';
            currentIndex++;
            displayNextVocab();
        } else {
            input.value = '';
            alert('Incorrect! Try again.');
        }
    });

    

    

    document.querySelector('#hintBtn').addEventListener('click', () => {
        revealObj(document.querySelector('#englishVocab'));
        hideObj(document.querySelector('#hintBtn'));
        hideObj(document.querySelector('#englishVocabPlaceholder'));
    
    });


    document.querySelector('.hamburger-con').addEventListener('click',() => {
        toggleClass(document.querySelector('.hamburger-con'))        
    });



    function revealObj(e){ //but keep all attributes
      let d = '"'+e.getAttribute("class")+'"';
       e.removeAttribute("class","hidden");
       e.setAttribute("class", d);
    }

    function hideObj(e){
        e.setAttribute("class", "hidden");
     }


 

     function toggleClass(x) {
        x.classList.toggle("change");
        console.log("change")
        togglePopUp();
      
      }


 


      function togglePopUp(){
   
        console.log(window.getComputedStyle(document.querySelector(".popupCon")).opacity)
        
     if(window.getComputedStyle(document.querySelector(".popupCon")).opacity == 0 ){
            document.querySelector(".popupCon").style.opacity = "100%";
            document.querySelector(".popupCon").style.height = "100%";
            console.log("open")
     }else if(window.getComputedStyle(document.querySelector(".popupCon")).opacity == 1 ){
        document.querySelector(".popupCon").style.opacity = "0%";
        document.querySelector(".popupCon").style.height = "0%";
        console.log("close")
        }

        console.log("no boy")

    }


  
    document.querySelector('#addBtn').addEventListener('click', writeToFile);
    

    function writeInFile(){

    }

    
    




 



