function loadContact() {
    const heading = document.createElement("h1");
    heading.textContent = "Contact us";

    const root = document.getElementById("content");
    root.appendChild(heading);

    const para = document.createElement("p");
    para.textContent = `Message us through : eatsy@gmail.com`;

    root.appendChild(para);

    const para2 = document.createElement("p");
    para2.textContent = `Dial us : 9xxx9xxx04`;

    root.appendChild(para2);
}

export default loadContact;
