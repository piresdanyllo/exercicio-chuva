let resumeCondensed = document.getElementById('resume-text--condensed')
let resumeExpand = document.getElementById('resume-text--expand')
let resumeContainer = document.getElementById('show-resume')
let resume = document.getElementById('resume-container')

let topic = document.getElementById('topic')
let createTopic = document.getElementById('create-topic')
let sendedTopic = document.getElementById('send-topic')
let btnCreate = document.getElementById('button-topic')
let btnSend = document.getElementById('button-send')
let btnNew = document.getElementById('button-new')

resumeContainer.addEventListener('click', function () {
    if (resumeExpand.classList.contains('hide')) {
        resumeExpand.classList.remove('hide')
        resumeCondensed.classList.add('hide')
    } else {
        resumeCondensed.classList.remove('hide')
        resumeExpand.classList.add('hide')
    }
})

btnCreate.addEventListener('click', function () {
    topic.style.display = 'none'
    createTopic.style.display = 'flex'
    sendedTopic.style.display = 'none'
})

btnSend.addEventListener('click', function () {
    createTopic.style.display = 'none'
    topic.style.display = 'none'
    sendedTopic.style.display = 'flex'
})

btnNew.addEventListener('click', function () {
    topic.style.display = 'none'
    createTopic.style.display = 'flex'
    sendedTopic.style.display = 'none'
})