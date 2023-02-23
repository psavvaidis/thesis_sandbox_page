$(document).ready(() => {
    // Outputting the JSON on the screen
    $('#output').html(parseWindow())
})

const parseWindow = () => {
    // Using a weakset to check if any object has been seen more than once in the window and skip it to avoid cyclic reference
    let keysSet = new WeakSet()

    // the message to be printed in the screen
    let message = "<pre>"
        + JSON.stringify(window,

            //this is called a reducer, it tells the JSON.stringify what to print. In our case, we skip values seen more than once
            (key, value) => {
                //WeakSet stores only objects. We jsut print anything else
                if (typeof value !== 'object' || value == null) {
                    return value
                }

                // Checking if we've seen the object before. If yes, we skip it
                if (keysSet.has(value)) {
                    return undefined
                }

                // If it's the first time we meet the object, we store it in the WeakSet and return it to be printed
                keysSet.add(value)
                return value
            }
            , 4) //JSON printing indentation
        + "</pre>";

    return message;
}
