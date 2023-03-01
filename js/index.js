const loadURL = async () => {
  try {
    const URL = `https://forbes400.onrender.com/api/forbes400?limit=10`;
    // console.log(URL);
    const rest = await fetch(URL);
    const data = await rest.json();
    loadData(data);
  } catch (err) {
    console.log(err);
  }
};

const userContainer = document.getElementById('userContainer');
const loadData = (users) => {
  users.forEach((user) => {
    // console.log(user);
    const { person } = user;
    console.log(person.name);

    const divElement = document.createElement('div');
    divElement.classList.add("text-white", "bg-sky-900", "py-5", "px-8","w-96","rounded-lg");
    divElement.innerHTML=`
    <h1 class="text-2xl my-3 text-center">${person.name}</h1>
    <div class="flex">
      <div>
        <img class="w-32 h-40" src="${user.squareImage}" alt="" />
        <p>Source: ${user.source}</p>
      </div>
      <div class="ml-5">
        <div class="border-l-4 border-red-500">
          <div class="ml-5 py-2">
            <p>
              <span class="text-lg font-bold">Citizenship:</span>
              ${person.countryOfCitizenship}
            </p>
            <p>
              <span class="text-lg font-bold">State:</span> Washing
            </p>
            <p><span class="text-lg font-bold">City:</span> Medina</p>
            <p>
              <span class="text-lg font-bold">Total Shares:</span>
              992634
            </p>
            <p>
              <span class="text-lg font-bold">Share Price:</span>
              $99.7
            </p>
          </div>
        </div>
      </div>
    </div>
    `
    userContainer.appendChild(divElement)

  });
};

loadURL();
