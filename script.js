const editor = document.getElementById("editor");

const textColor =
document.getElementById("textColor");

const bgColor =
document.getElementById("bgColor");

const fontSize =
document.getElementById("fontSize");

const lineInfo =
document.getElementById("lineInfo");

const charInfo =
document.getElementById("charInfo");

function format(command){

    document.execCommand(
        command,
        false,
        null
    );

    saveContent();
}

textColor.addEventListener("input",()=>{

    document.execCommand(
        "foreColor",
        false,
        textColor.value
    );

    saveContent();
});

fontSize.addEventListener("change",()=>{

    editor.style.fontSize =
    fontSize.value + "px";

    saveContent();
});

bgColor.addEventListener("input",()=>{

    editor.style.backgroundColor =
    bgColor.value;

    saveContent();
});

function saveContent(){

    localStorage.setItem(
        "gxn_content",
        editor.innerHTML
    );

    localStorage.setItem(
        "gxn_bg",
        editor.style.backgroundColor
    );

    localStorage.setItem(
        "gxn_size",
        editor.style.fontSize
    );
}

function loadContent(){

    const content =
    localStorage.getItem(
        "gxn_content"
    );

    if(content){

        editor.innerHTML =
        content;
    }

    const bg =
    localStorage.getItem(
        "gxn_bg"
    );

    if(bg){

        editor.style.backgroundColor =
        bg;
    }

    const size =
    localStorage.getItem(
        "gxn_size"
    );

    if(size){

        editor.style.fontSize =
        size;
    }
}

editor.addEventListener(
    "input",
    ()=>{

        saveContent();

        const text =
        editor.innerText;

        const lines =
        text.split("\n").length;

        lineInfo.textContent =
        "Line " + lines;

        charInfo.textContent =
        text.length + " chars";
    }
);

document
.getElementById("saveBtn")
.addEventListener(
"click",
()=>{

html2canvas(
document.getElementById(
"captureTarget"
),
{
scale:2
}
)
.then(canvas=>{

const link =
document.createElement(
"a"
);

link.download =
"giselle-x-nine.png";

link.href =
canvas.toDataURL();

link.click();

});

});

loadContent();