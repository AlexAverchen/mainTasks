text = prompt('Введите текст:', '');

function redactor(text) {
    let textCapitalize = [];
    let textArr = text.split('.');

    for (let i = 0; i < textArr.length; i++) {
        textArr[i] = textArr[i].trim().charAt(0).toUpperCase() + textArr[i].trim().slice(1);
        textCapitalize.push(textArr[i]);
    }
 
    let finalText = textCapitalize
        .join('.')
        .replace(/ +/g, ' ')
        .replace(/(,|\.|\?|\!)(\S)/g, '$1 $2')
        .replace(/\s+([.,?!":])/g, '$1')
        .trim();

    let count = 0

    for (let word of finalText.replace((/[^а-яА-Яa-zA-Z]/g), ' ').split(' ')) {
        if (word != '') {
            count += 1;
        }
    }
    
    let uniqueWords = {};

    finalText.toLowerCase().replace((/[^а-яА-Яa-zA-Z]/g), ' ').split(' ').filter(s => s != '')
    .forEach(s => uniqueWords[s] = uniqueWords[s]+1 || 1);
    
    console.log(finalText);
    console.log(`В тексте ${count} слов`);
    console.log(uniqueWords);

}


redactor(text);
