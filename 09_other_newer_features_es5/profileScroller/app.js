const data = [
  {
    name: 'Olakunle Jamal',
    age: 24,
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/34.jpg'
  },
  {
    name: 'Festus Wisdom',
    age: 23,
    gender: 'Female',
    lookingfor: 'Male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/89.jpg'
  },
  {
    name: 'Oluwole Safiu',
    age: 23,
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/53.jpg'
  }
];

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    </ul>  
    `
    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">
    `
  } else {
    // No more profiles available
    window.location.reload();
  }
}

// Profile Iterator
const profiles = profileIterator(data);

// Call first profile
nextProfile();

function profileIterator(profiles) {
  let nextIndex = 0;
  
  return {
    next: function () {
      return nextIndex < profiles.length ?
        { value : profiles[nextIndex++], done: false } : { done: true };
    }
  }
}