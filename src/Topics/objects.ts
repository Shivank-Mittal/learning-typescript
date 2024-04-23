



// advance objects

// flags Present in an key 

export function nonWritableObject() {
    let user =  {
        name: "Shivank",
        role: "Senior Developer"
    }

    let nameHaveFlags  = Object.getOwnPropertyDescriptor(user, "name")
    console.log(`Flags name property have are: ${ JSON.stringify(nameHaveFlags) }`)

    console.log( 'converting the writable property to false using  Object.defineProperty:' )
    Object.defineProperty(user, "name", {writable: false})

    console.log(`New flags name property have are: ${ JSON.stringify(nameHaveFlags) }`)
    console.log('trying to rename the name property should through the error' );
    
    user.name = 'You cant change me';
}