const dog = new Audio('./audio/oi.mp3');
        const away = new Audio('./audio/away.mp3');
        const tiringa = new Audio('./audio/tiringa.mp3');
    
        
        function playDog (nDeRepeticoes){
            stopAll();/*para*/
            dog.play();/*toca*/
            for (let i = 0; i < nDeRepeticoes; i = i+1) {
                console.log("reproduzindo..." ,i);
                
            }
            
        
        }
        function playAway (){
            stopAll();
            away.play();
        }
        function playTiringa (){
            stopAll();
            tiringa.play();
        }

        function stopAll (){
            dog.pause();
            dog.currentTime = 0;
            away.pause();
            away.currentTime = 0;
            tiringa.pause();
            tiringa.currentTime = 0;
        }