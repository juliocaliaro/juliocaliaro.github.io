        const dog = new Audio('./audio/oi.mp3');
        const away = new Audio('./audio/away.mp3');
        const tiringa = new Audio('./audio/tiringa.mp3');
        const sefodeo = new Audio('./audio/sefodeo.mp3');
        const calaboca = new Audio('./audio/calaboca.mp3');
        const creditos = new Audio('./audio/creditos.mp3');


        function playDog () {
            stopAll();/*para*/
            dog.play();/*toca*/
        }

        function playAway () {
            stopAll();
            away.play();
        }

        function playTiringa () {
            stopAll();
            tiringa.play();
        }

        function playsefodeo () {
            stopAll();
            sefodeo.play();
        }

        function playcalaboca () {
            stopAll();
            calaboca.play();
        }

        function playcreditos () {
            stopAll();
            creditos.play();
        }


        function stopAll (){
            dog.pause();
            dog.currentTime = 0;
            away.pause();
            away.currentTime = 0;
            tiringa.pause();
            tiringa.currentTime = 0;
            sefodeo.pause();
            sefodeo.currentTime = 0;
            calaboca.pause();
            calaboca.currentTime = 0;
            creditos.pause();
            creditos.currentTime = 0;

        }