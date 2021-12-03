const postBtn = document.querySelector('#post-btn');
const postArea = document.querySelector('#post-area');
const nameInput = document.querySelector('#post-name');
postBtn.addEventListener('click',createPost);

async function createPost () {
    const postValue = postArea.innerHTML;
    const nameValue = nameInput.value;
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({name:nameValue,content:postValue}),
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        // If successfully logged out, redirect to the login page
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
}