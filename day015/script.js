let droppedFiles = false;
let fileName = '';
let card = document.querySelector('.card');
let button = document.querySelector('.upload-button');
let uploading = false;
let syncing = document.querySelector('.syncing');
let upload = document.querySelector('.upload');
let done = document.querySelector('.done');
let bar = document.querySelector('.bar');
let timeOutID;
let inputFile = document.querySelector('[type=file]');
let fileNameWrapper = document.querySelector('.filename');
let cardBody = document.querySelector('.card__body');

if (card) {
    card.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        card.classList.add('is-dragover')
    })

    card.addEventListener('dragenter', (e) => {
        e.preventDefault();
        e.stopPropagation();
        card.classList.add('is-dragover')
    })

    card.addEventListener('dragleave', (e) => {
        e.preventDefault();
        e.stopPropagation();
        card.classList.remove('is-dragover')
    })

    card.addEventListener('dragend', (e) => {
        e.preventDefault();
        e.stopPropagation();
        card.classList.remove('is-dragover')
    })

    card.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        card.classList.remove('is-dragover')
    })

    card.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("e >>", e);
        droppedFiles = e.dataTransfer.files;
        fileName = droppedFiles[0]['name'];
        fileNameWrapper.innerHTML = fileName;
        upload.style.display = 'none';
    })
}

if (inputFile) {
    inputFile.addEventListener('change', (e) => {
        fileName = e.target.files[0].name;
        fileNameWrapper.innerHTML = fileName;
        upload.style.display = 'none';
    })
}

const startUpload = () => {
    if (!uploading && fileName != '') {
        uploading = true;
        button.innerHTML = 'Uploading...';
        cardBody.style.opacity = 0;
        syncing.classList.add('active');
        done.classList.add('active');
        bar.classList.add('active');
        timeOutID = window.setTimeout(showDone, 3200);
    }
}

if (button) {
    button.addEventListener('click', async () => {
        await startUpload();
    })
}

const showDone = () => {
    button.innerHTML = 'Done';
}



