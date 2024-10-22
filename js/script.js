//create const rootEl to select the main element div in html that contains all software's code
const rootEl = document.querySelector("#root");
const heroGenerator = (titleText, subtitleText, spanSubtitleText) => {
  const hero = document.createElement("div");
  const title = document.createElement("h1");
  const subtitle = document.createElement("h3");
  const span = document.createElement("span");
  title.className = "title";
  subtitle.className = "subtitle";
  title.textContent = titleText;
  subtitle.textContent = subtitleText;
  span.textContent = spanSubtitleText;
  subtitle.appendChild(span);
  hero.append(title, subtitle);
  return hero;
};

// create the function that generate form
const formGenerator = () => {
  // The type of inputText is "text" and this value is default
  const formEl = document.createElement("form");
  const inputText = document.createElement("input");
  const inputBtn = document.createElement("input");
  inputBtn.type = "submit";
  formEl.className = "form";
  inputText.className = "text-style";
  inputBtn.className = "submit-style";
  formEl.append(inputText, inputBtn);
  return formEl;
};

// create the function that generate the section containing list
const listGenerator = () => {
  const listEl = document.createElement("ul");
  listEl.className = "list-style";
  return listEl;
};

//create the function that generate items of list
const itemGenerator = () => {
  const itemEl = document.createElement("li");
  itemEl.className = "itemOfList-style";
  return itemEl;
};

const list = listGenerator();
list.append(itemGenerator());
rootEl.append(
  heroGenerator("note your tasks", "software developed by ", "MrElliot4"),
  inputGenerator(),
  list
);
