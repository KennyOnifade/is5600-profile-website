// Select the profile elements.
const profileName = document.querySelector('#profile-name');
const profileTitle = document.querySelector('#profile-title');
const nameInput = document.querySelector('#name-input');
const titleInput = document.querySelector('#title-input');
const formMessage = document.querySelector('#form-message');

// Fill the inputs with the current profile information.
nameInput.value = profileName.textContent.trim();
titleInput.value = profileTitle.textContent.trim();

// Update the profile using the form inputs.
const updateProfile = (name, title) => {
  if (!name || !title) {
    formMessage.textContent = 'Please enter both a name and a title.';
    return;
  }

  profileName.textContent = name;
  profileTitle.textContent = title;
  formMessage.textContent = 'Profile updated successfully.';
};

document.querySelector('#profile-form').addEventListener('submit', (event) => {
  event.preventDefault();

  updateProfile(
    nameInput.value.trim(),
    titleInput.value.trim()
  );
});

// Store predefined interests in an array.
const interests = [
  'Cloud computing',
  'Data analytics',
  'Mathematics education',
  'Web development',
  'Healthcare technology',
  'Writing technical articles'
];

document.querySelector('#interest-button').addEventListener('click', () => {
  const currentInterest = document.querySelector('#interest');

  // Array.filter creates a list excluding the current interest.
  const otherInterests = interests.filter(
    (interest) => interest !== currentInterest.textContent
  );

  const randomIndex = Math.floor(Math.random() * otherInterests.length);
  currentInterest.textContent = otherInterests[randomIndex];
});

// A closure keeps the count available between button clicks.
const createViewCounter = () => {
  let count = 0;

  return () => {
    count += 1;
    return count;
  };
};

const incrementViews = createViewCounter();

document.querySelector('#view-button').addEventListener('click', () => {
  document.querySelector('#view-count').textContent = incrementViews();
});