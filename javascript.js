        var d=document.getElementsByTagName("input")
        firsttrain=5
        secondtrain=5
        thiredtrain=5
        firsttrain2=5
        function nj(){
            for(i=0;i<=4;i++){
                if (d[i].checked){
                    d[1].checked=false
                    d[2].checked=false
                    var firstthanks=document.getElementById("ft").innerHTML="delhi to jaipur train 1100"
                    document.getElementById("st").innerHTML="ananand to jaipur train 1200"
                    document.getElementById("tt").innerHTML="safderjung to jaipur train 1300"
                    document.getElementByName("firstthanks").onclick(shyam())
                    function shyam(){
                    	if(firsttrain>=0){
                        firsttrain-=1
                        if(firsttrain>=0){
                            alert("tiket is conformed thanks for registeration")
                        }
                        else if(firsttrain=0){
                        	alert("ticket is not available")
                        }
                        
                    }
                    	
                    }
        
                    // if(firsttrain>=0){
                    //     firsttrain-=1
                    //     if(firsttrain>=0){
                    //         alert("tiket is conformed thanks for registeration")
                    //     }
                    //     else{
                    //         alert("tiket is unavailable")
                    //     }
                    // }

                    
                }
            }
         
        }
        // this is the second step to reservation
        function aj(){
            for(i=0;i<=4;i++){
                if (d[i].checked){
                    d[0].checked=false
                    d[2].checked=false
                    // for(k=0;k<=4;k++){
                    //     cls[k]=""
                    // }
                    document.getElementById("ft").innerHTML="Kolkata to jaipur 2100"
                    document.getElementById("st").innerHTML="kk terminal to jaipur 2200"
                    document.getElementById("tt").innerHTML="sa terminal to jaipur 2300"
                    // document.getElementById("ft").addEventListener("click",shyam1);
                    // function shyam1(){
                    // 	if(firsttrain2>=0){
                    //     firsttrain2-=1
                    //     if(firsttrain2>=0){
                    //         alert("tiket is conformed thanks for registeration")
                    //     }
                    //     else if(firsttrain2=0){
                    //     	alert("ticket is not available")
                    //     }
                    //     else{
                    //         alert("tiket is unavailable")
                    //     }
                    // }
                    	
                    // }



                    
                }
            }

            
        }
        // this is the thired step to reservation
        function sj(){
            for(i=0;i<=4;i++){
                if (d[i].checked){
                    d[0].checked=false
                    d[1].checked=false
                    document.getElementById("ft").innerHTML="Mumbai terminal to jaipur 3100"
                    document.getElementById("st").innerHTML="Malavi terminal to jaipur 3200"
                    document.getElementById("tt").innerHTML="Miraroad terminal to jaipur 3300"
                    
                }
            }

            
        }