
    var Quotes = [
        {'author': '― Oscar Wilde', 
        'quote': '“Be yourself; everyone else is already taken.”'
       },
       {'author': '― Mae West', 
        'quote': '“You only live once, but if you do it right, once is enough.”'
       },
       {'author': '― Mahatma Gandhi', 
        'quote': '“Be the change that you wish to see in the world.”'
       },
       {'author': '― Mark Twain', 
        'quote': '“If you tell the truth, you don,t have to remember anything.”'
        
       },
       {'author': '― Mahatma Gandhi', 
        'quote': '“Live as if you were to die tomorrow. Learn as if you were to live forever.”'
       },
       {'author': '― Frank Zappa', 
        'quote': '“So many books, so little time.”'
       }
      
    ]



    function randomQuotes(){
        
        var random = Math.floor(Math.random()*Quotes.length );
        document.querySelector('#quote').textContent = `\"${Quotes[random].quote}\"`;
        document.querySelector('#author').textContent = `--${Quotes[random].author}`;
        
    }

// var num = Math.floor( Math.random() *  Quotes .length)
// console.log( Quotes  [num]);
// var random = Number.parseInt(Math.random()*Quotes.length + 1);




