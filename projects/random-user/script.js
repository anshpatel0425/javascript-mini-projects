const profilePicture = document.querySelector("#user-image");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const userLocation = document.querySelector("#location");
const btn = document.querySelector("#generate-user")


async function getRandomUser(){
   btn.disabled = true;
   btn.textContent = "Loading.."
 try {
    const response = await  fetch("https://randomuser.me/api/")
  
  const data = await response.json()
  
   const user = data.results[0];
    username.textContent = user.name.first
    profilePicture.src =user.picture.large
    email.textContent =user.email
    userLocation.textContent = `${user.location.state}, ${user.location.country}`

 } catch (error) {
    username.textContent = "Failed to load user";
    email.textContent = "";
    userLocation.textContent = "";
    console.error(error);
} finally {
   btn.disabled = false;
   btn.textContent = "Generate User"
 }

}
btn.addEventListener("click", getRandomUser)