document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        const postList = document.getElementById('post-list');
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        postDiv.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;

        postList.appendChild(postDiv);

        // Clear the form
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    }
});