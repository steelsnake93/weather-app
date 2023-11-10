import './style.css';

export default function header(onSearchCallback) {
    const headerElement = document.createElement('div');
    headerElement.className = 'header';

    const containerBox = document.createElement('div');
    containerBox.className = 'container-box';

    const formBox = document.createElement('div');
    formBox.className = 'form-box';

    const searchForm = document.createElement('form');
    searchForm.id = 'search-form';

    const searchInput = document.createElement('input');
    searchInput.type = 'search';
    searchInput.id = 'search-input';
    searchInput.placeholder = 'Search...';

    const searchButton = document.createElement('button');
    searchButton.className = 'btn-grad';
    searchButton.type = 'submit';
    searchButton.textContent = 'Get';
    searchForm.appendChild(searchInput);
    searchForm.appendChild(searchButton);
    formBox.appendChild(searchForm);
    containerBox.appendChild(formBox);
    headerElement.appendChild(containerBox);

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = searchInput.value.trim();
        if (query && onSearchCallback) {
            onSearchCallback(query);
        }
    });
    return headerElement;
}
