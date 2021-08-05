const fs = require("fs");

fs.unlink("message.txt", (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log("FIle removed succesfully");
    }
});