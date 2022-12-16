
console.log("Content script loaded");


document.addEventListener("copy", (event) => {
    const selection = document.getSelection();


    const urlRegex = /(http|https):[\/]{2}([\w\.\(\)\[\]]+)(.*)/gmi

    const removePattern = /[\[\(]{1}(.)[\]\)]{1}/gmi


    let content = selection.toString();

    if (urlRegex.test(content)) {
        content = content.replace(removePattern, (globalGroup, betweenBracketGroup) => {
            return betweenBracketGroup;
        });

        console.log("[.], (.) in urls are removed.");
    }

    event.clipboardData.setData('text/plain', content);
    event.preventDefault();
}, true);