function isYes(text) {
    text = text.toLowerCase();
    if(text === 'yes') {
        return true;
    }
    else if(text === 'y') {
        return true;
    }
    else if(text === 'no') {
        return false;
    }
    else if(text === 'n') {
        return false;
    }
    else return alert('Please enter only yes or no!');
}


export default isYes;