document.getElementById('changeButton').addEventListener('click', changeTextCase);
document.getElementById('copyButton').addEventListener('click', copyToClipboard);

function changeTextCase() {
    const caseType = document.getElementById('caseSelector').value;
    let text = document.getElementById('inputText').value;
    switch(caseType) {
        case 'upperCase':
            text = text.toUpperCase();
            break;
        case 'lowerCase':
            text = text.toLowerCase();
            break;
        case 'titleCase':
            text = text.toLowerCase().replace(/\b(\w)/g, char => char.toUpperCase());
            break;
        case 'camelCase':
            text = text.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase()).replace(/\s+/g, '');
            break;
        case 'snakeCase':
            text = text.toLowerCase().replace(/\s+/g, '_');
            break;
        case 'hyphenCase':
            text = text.toLowerCase().replace(/\s+/g, '-');
            break;
        case 'dotCase':
            text = text.toLowerCase().replace(/\s+/g, '.');
            break;
        case 'alternatingCase':
            text = text.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
            break;
        case 'switchCase':
            text = text.split('').map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join('');
            break;
        case 'randomCase':
            text = text.split('').map(char => Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()).join('');
            break;
        case 'sentenceCase':
            text = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, char => char.toUpperCase());
            break;
        default:
            break;
    }
    document.getElementById('inputText').value = text;
}

function copyToClipboard() {
    const text = document.getElementById('inputText').value;
    navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy text. Please try again.');
    });
}
