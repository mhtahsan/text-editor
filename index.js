const boldBtn = document.getElementById('bold-btn')
const underlineBtn = document.getElementById('underline-btn')
const italicBtn = document.getElementById('italic-btn')
const colorBtn = document.getElementById('color-btn')
const newBtn = document.getElementById('new-btn')
const txtBtn = document.getElementById('txt-btn')
const pdfBtn = document.getElementById('pdf-btn')
const content = document.getElementById('content')
const filename = document.getElementById('filename-input')


boldBtn.addEventListener('click', () => {
    document.execCommand('bold')
})
italicBtn.addEventListener('click', () => {
    document.execCommand('italic')
})
underlineBtn.addEventListener('click', () => {
    document.execCommand('underline')
})
colorBtn.addEventListener('input', () => {
    document.execCommand("forecolor", false, colorBtn.value)
})
newBtn.addEventListener('click', () => {
    content.innerHTML = ""
})
txtBtn.addEventListener('click', () => {
    const a = document.createElement('a')
    const blob = new Blob([content.innerText])
    const dataUrl = URL.createObjectURL(blob)
    a.href = dataUrl
    a.download = filename.value + ".txt"
    a.click()
})
pdfBtn.addEventListener('click', () => {
    html2pdf().from(content).save(filename.value)
})