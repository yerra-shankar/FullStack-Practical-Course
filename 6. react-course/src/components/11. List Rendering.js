/*
   List Rendering

Map(): Creates a new array from calling a function for every array element.
ex:-
 var array1=[1,4,9,16]
 const map1=array1.map(x=>x*2);
 console.log(map1)

 [2,8,18,32]
*/

//nrml rendering
import React from 'react'
/*
function NameList() {
    const names=['shankar','saketh','siva']
    return(
        <div>
            <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>
        </div>
    )
    
}
export default NameList
*/

/*
//using map to rendering
function NameList(){
    const names=['aswinii','saketh','santhosh']
    // return(
    //     <div>
    //         {
    //             names.map(names=><h2>{names}</h2>)
    //         }
    //     </div>
    // ) 

    //if u want easier code
    const NameList=names.map(names=><h2>{names}</h2>)
    return <div>{NameList}</div>
}
export default NameList 
*/



//let see full details of person (id,name,skill etc)
function NameList(){
    const persons=[
        {
            id:1,
            name:'shankar',
            age:22,
            skill:'python'
        },
        {
            id:2,
            name:'siva',
            age:24,
            skill:'java'
        },
        {
            id:3,
            name:'saketh',
            age:20,
            skill:'react'
        }
    ]
    const personList = persons.map(person=>(
        <h2>
            I am {person.name}. Iam {person.age} year old. I known {person.skill}.
        </h2>
    ))
    return <div>{personList}</div>
}
export default NameList
