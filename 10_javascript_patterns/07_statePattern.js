const pageState = function () {
  let currentState = new homeState(this);

  this.init = function () {
    this.change(new homeState);
  }

  this.change = function (state) {
    currentState = state;
  }
}

// Home State
const homeState = function (page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector("#content").innerHTML = `
    <div><h1>My name is Jamal</h1>
      <h1 class="display-1">Display 1</h1>
      <h1 class="display-2">Display 2</h1>
      <h1 class="display-3">Display 3</h1>
      <h1 class="display-4">Display 4</h1>
      <h1 class="display-5">Display 5</h1>
      <h1 class="display-6">Display 6</h1>
    </div>
      
  `;
};

// About State
const aboutState = function (page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>This is the About Page</p>
  `;
};

// Contact State
const contactState = function (page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector("#content").innerHTML = `
      <div class="mb-3">
        <label for="formFile" class="form-label">Default file input example</label>
        <input class="form-control" type="file" id="formFile">
      </div>
      <div class="mb-3">
        <label for="formFileMultiple" class="form-label">Multiple files input example</label>
        <input class="form-control" type="file" id="formFileMultiple" multiple>
      </div>
      <div class="mb-3">
        <label for="formFileDisabled" class="form-label">Disabled file input example</label>
        <input class="form-control" type="file" id="formFileDisabled" disabled>
      </div>
      <div class="mb-3">
        <label for="formFileSm" class="form-label">Small file input example</label>
        <input class="form-control form-control-sm" id="formFileSm" type="file">
      </div>
      <div>
        <label for="formFileLg" class="form-label">Large file input example</label>
        <input class="form-control form-control-lg" id="formFileLg" type="file">
      </div>
  `;
};

// Instantiate PageState
const page = new pageState();

// Init the first state
page.init();

// UI variables
const home = document.getElementById('home'),
  about = document.getElementById('about'),
  contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
  page.change(new aboutState);

  e.preventDefault();
});

contact.addEventListener('click', (e) => {
  page.change(new contactState);

  e.preventDefault();
})
