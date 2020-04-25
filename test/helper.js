class Helper 
{
    generateString(length)
    {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
        let result = "";

        while (result.length < length) 
        {
            let randomIndex = Math.floor(Math.random() * alphabet.length);
            let randomChar = alphabet[randomIndex];
            result += randomChar;
        }

        return result;
    }

    getRandomInt(max) 
    {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    testUserData =
    {
        'testEmail' : "githubtesttask@gmail.com",
        'userName' : "githubtesttask",
        'password' : "githubtesttaskbyoleksiinedilko"
    }

}

module.exports = new Helper()