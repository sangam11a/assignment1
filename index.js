function clickButton(){
    let ppp=document.getElementById("circum").value;
    console.log(typeof ppp);
    document.getElementById("para").style.font.size=20;
    a=validate(ppp)
    switch(a)
                {case 1:
                        document.getElementById("para").style.color="Orange";
                        document.getElementById("para").innerHTML="Empty field";
                        break;
                
                 case 2: 
                        document.getElementById("para").style.color="Green";
                        document.getElementById("para").innerHTML="The circumference of circle having radius "+Number(ppp)+"m is "+2*3.14*Number(ppp)+".";
                        break;
                 case 3:            
                            document.getElementById("para").style.color="Royalblue";
                            document.getElementById("para").innerHTML="Please enter only numbers";
                        
                        break;
                }
}


function validate(ppp)
{ if(ppp=='') return(1);
else if(typeof Number(ppp)=="number"&&!isNaN(Number(ppp))) return(2);
else return(3);

}

function test_function(){
    document.getElementById("prnt2").style.color="White";
    document.getElementById("prnt").style.color="White";
    let tota=document.getElementById("total").value;
    let ti=document.getElementById("tips_percent").value;
    let a=validate(tota);
    let b=validate(ti);
    if(a!=2||b!=2)
    {
    switch(a)
                { case 1:
                    document.getElementById("prnt").style.color="Orange";
                    document.getElementById("prnt").innerHTML="Empty field";
                    break;

                  case 3:            
                                document.getElementById("prnt").style.color="Royalblue";
                                document.getElementById("prnt").innerHTML="Please enter only numbers";
                            
                            break;
            }
            switch(b)
                { case 1:
                    document.getElementById("prnt2").style.color="Orange";
                    document.getElementById("prnt2").innerHTML="Empty field";
                    break;

                  case 3:            
                                document.getElementById("prnt2").style.color="Royalblue";
                                document.getElementById("prnt2").innerHTML="Please enter only numbers";
                                break;
            }
            
    }
    else{
        document.getElementById("prnt1").style.color="Green";
         tips=(Number(ti)/100)*Number(tota);
                document.getElementById("prnt1").innerHTML="Tips to be provided is " +tips;
    }   


}


function array(){
document.getElementById("arra").style.color="Red";
var a=new Array("Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa");
var hold=new Array();
var index;
for (index in a)
 { if(a[index]!="Kathmandu")
    {
     hold+=a[index]+"  "+a[index].length+"<br>";
  
 }
 } 
 document.getElementById("arra").innerHTML=hold;

}