const joke = document.querySelector("#joke")
const btn = document.querySelector("#generate-joke")

btn.addEventListener("click", getJoke);

async function getJoke() {
    btn.disabled = true;
    joke.innerText = "⏳ Loading a funny joke..."
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke")
        
        if (!response.ok) {
    throw new Error("Failed to fetch joke");
}

    const data = await response.json()
    joke.innerText = `${data.setup}
    
${data.punchline}`
    } catch (error) {
        joke.innerText = "Failed to load joke..."
    } finally{
    btn.disabled = false
}
} 
getJoke();
