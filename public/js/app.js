
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    messageOne.textContent = 'Loading ...'
    messageTwo.textContent = ''

    const location = search.value

    fetch(`/weather?address=${location}`).then(res => {
        res.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error
            }else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }

            

          
        })
    })

    
})