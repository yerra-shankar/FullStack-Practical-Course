/*
    Jump statements:
        jump statements are used to tarnsfer control from on point to another point

                        jump
                __________|_________
                |                   |
                break              continue

1. Break :
         the break statement is used to terminate the loop or statement in which it present.
    synatx: 
            break;

2.continue:
           this statement is used to skip over the execution part of the loop on a certain condition.
    synatx:
           continue;
*/

for(a=1;a<=50;a++)
{
    console.log("page no is"+a);
    if(a==40){
        console.log("break statement oocured")
        break;
    }
}


// continue
for(a=1;a<=50;a++)
{
    if(a==10){
        console.log("continue statement oocured")
    continue;
    }
    console.log("page no " + a)

}









for (var i = 0;i<=10;i++){
    console.log(i)

    if(i==6) {
     break;
    }
 }

 for(var i = 0;i<=2;i++){
    for(var j=i;j<=5;j++){
        
        if(j==4){
            continue;
        }
        console.log(j);
    }
}

