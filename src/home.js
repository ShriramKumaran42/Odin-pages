function loadHome() {
  const root = document.getElementById("content");
  root.innerHTML = "";
  const heading = document.createElement("h1");
  heading.innerHTML = "Welcome to Restaurant Eatsy";

  root.appendChild(heading);

  const para = document.createElement("p");
  para.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Aliquam quas facere saepe corporis, autem laudantium magni. 
      Quod dignissimos fugiat sit expedita minima quas. Itaque possimus 
      deleniti dignissimos, doloremque suscipit maxime.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Aliquam quas facere saepe corporis, autem laudantium magni. 
      Quod dignissimos fugiat sit expedita minima quas. Itaque possimus 
      deleniti dignissimos, doloremque suscipit maxime.`;

  root.appendChild(para);
}

export default loadHome;

