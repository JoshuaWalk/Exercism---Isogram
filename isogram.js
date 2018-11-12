const isIsogram = (isIsogram) => {
    const lowerCase = isIsogram.toLowerCase()
    const letterCheck = (/([a-z]).*?\1/).test(lowerCase)
 
    if(isIsogram === '') {
        return true
    }
    else if(letterCheck === false){
        return true
    }
    else {
        return false
    }
}

module.exports = {
    isIsogram
}