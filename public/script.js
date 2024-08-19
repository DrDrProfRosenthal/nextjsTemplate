
console.log("hello I'm your computer")



var vocabList = [];
var currentIndex = 0;




    
fetch('https://support.staffbase.com/hc/en-us/article_attachments/360009197031/username.csv')
        .then(response => response.text())
        .then(data => { console.log(data)
            
            
        })
        .catch(error => console.error('Error loading CSV:', error));

 