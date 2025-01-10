import loadContact from "./contact";

function loadMenu() {
    const heading= document.createElement("h1");
    heading.innerHTML = "Eatsy's MENU";

    const root = document.getElementById("content");
    root.appendChild(heading);

    const menu = {
        Starters: [
            {dish: "Soup of the day", price: "160rs"},
            {dish: "Appetizers of the day", price: "200rs"},
            {dish: "Spring rolls", price: "200rs"},
        ],
        MainCourse: [
            {dish: "Chicken Steak", price: "160rs"},
            {dish: "British Carbonara", price: "200rs"},
        ],
        Desserts: [
            {dish: "Ice-Cream Sundae", price: "160rs"},
            {dish: "Brownie", price: "200rs"},
        ]
    };

    Object.keys(menu).forEach(category => {
        const subText = document.createElement("h3");
        subText.textContent = category;
        subText.style.cursor = "pointer";

        const list = document.createElement("ul");
        list.style.display = "none";

        menu[category].forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.dish} - ${item.price}`;
            list.appendChild(listItem);
        });

        subText.addEventListener("click", () => {
            list.style.display = list.style.display === "none" ? "block" : "none";
        });

        root.appendChild(subText);
        root.appendChild(list);
    });
}

export default loadMenu;