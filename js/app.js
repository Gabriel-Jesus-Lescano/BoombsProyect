      
        
        //GenerateCoor
        function generateCoor(){    
        var newPoint = {
            x:Math.random() * 500,
            y:Math.random() * 500
        }
        return newPoint;
        }

      
        //Clean Bomb
        function cleaner(myText){
        bombs-=1;
            if(bombs == 0){
                minesToInst =0;
                allBombs.length = 0;
                allPosBomb.length = 0;
                app.stage.addChild(myText);
            }
        }
      

        //DISTANCE B2O
        function distancia(p1,p2) {
            const x = p1.x - p2.x
            const y = p1.y - p2.y
            dist = Math.sqrt(x * x + y * y)
            return dist
        }

            


