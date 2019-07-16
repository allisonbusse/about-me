function isYes(text) {
    text = text.toLowerCase();
    if(text === 'yes') {
        return true;
    }
    else if(text === 'y') {
        return true;
    }
    else {
        return false;
    }
}


export default isYes;