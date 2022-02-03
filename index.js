// Scope 


    // Lexical Scope 
        // Can: Acess variable ion outer scope 
        // Can't: access variables in nested scope 


    // Global Scope
        // Acessible in every scope
        // is the Outermost scope
    
    //Functional Scope
        //Acessible within a function
        //Specific to a single function
        //Can't be accessed by anything in outer scopes


    // Block 
        //Accessible within a block 
        //Specific block
        //Can't be accesed by anything in outer scopes



// const myCat = "rose";
// console.log('global: ', myCat); // global scope
// function isCute(){
//     let age = 9
//     console.log(age); // we have access to age in our functional scope 
//     console.log('functional: ', myCat); // functional scope
//         if(myCat == "rose"){
//             console.log(age)
//             console.log('block: ', myCat); // block scope
//         }
// }

// isCute();


//console.log(age); we dont have access to age in global scope here, when we check terminal get get age is no defined 


// const myCat = 'rose'; // global scope

// function checkCute() { functional scopes
//     let age = 9 //  age is only accessible in checkcute
    
//     if(myCat === 'rose') {  
//         let isCute = true;
//         console.log(isCute); // block scope 
//     }
// }
// checkCute()
//=> true
//console.log(isCute) // isCute is not defined 



// Var 


// const myCat = 'rose' // global
// function checkCute(){
//     let age = 9
    
//     if(myCat ==='rose') { // block
//         var isCute = true
//         // by using var we have acess to everything in our inner nested scope but not outsde of it 
//     }
//     console.log(isCute)
// }
// checkCute()

// console.log(isCute); we get ReferenceError here, isCute is not defined  // because of var we dont have access to isCute outside the function. Only access outside of the block lvl scope



// Global execution context    
                                    // globalVar


    //Execution context for firstFunc()
                                        //firstVar

        //Execution context for secondFunc()

            //secondVar
            //(firstVar)
            //(globalVar)




const fruit = "Apple";

function first() { 
    const vegetable = "Broccoli";

    console.log("fruit:", fruit);
    console.log("vegetable:", vegetable);
    console.log("legume:", legume);
}


function second() {
    const legume = "Peanut";

    console.log("fruit:", fruit);
    console.log('legume: ', legume);
    consle.log('vegetable: ', vegetable);
}

// first() and second() have access to fruit, but first() cannont access legume and second() cannot access vegetable because of scoping. (refer to the diagram)
first();
// => fruit: Apple
// => vegetable: Broccoli
// => Uncaught ReferenceError: legume is not defined
second();
//=> fruit: Apple
//=> vegetable: Broccoli
// =>  Uncaught ReferenceError: vegetable is not defined
