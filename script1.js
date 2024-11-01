const text="ಚಿರಕಾಲ ಬೆಳಗಲಿ ಕನ್ನಡದ ದೀಪ ಜನಕೆಲ್ಲ ಬೆಳಕಾಗಿ ಪುಣ್ಯಪ್ರದೀಪ ಭಾರತಕೆ ಬಲವಾಗಿ ಭವ್ಯದೀಪ ಕಳೆಯುತ್ತ ತಾಪ ಬೆಳೆಸುತ್ತು ಸೈಪ ಹೊತ್ತಿತ್ತೋ ಹೊತ್ತಿತ್ತು ಕನ್ನಡದ ದೀಪ.              "+
" "+"ಸರ್ವರಿಗೂ ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ ಶುಭಾಶಯಗಳು";
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("wish-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 65); // Adjust speed by changing the number (in milliseconds)
    }
}

type();
