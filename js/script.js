//create const RootEl to select the main element div in html that contains all software's app
const RootEl = document.querySelector("#root");
const heroGenerator = (titleText, subtitleText, spanSubtitleText) => {
  const Hero = document.createElement("div");
  const title = document.createElement("h1");
  const subtitle = document.createElement("h3");
  const span = document.createElement("span");
  title.className = "title";
  subtitle.className = "subtitle";
  title.textContent = titleText;
  subtitle.textContent = subtitleText;
  span.textContent = spanSubtitleText;
  subtitle.appendChild(span);
  Hero.append(title, subtitle);
  return Hero;
};

const inputGenerator = () => {
  // The type of InputText is "text" and this value is default
  const InputEl = document.createElement("div");
  const InputText = document.createElement("input");
  const InputBtn = document.createElement("input");
  InputBtn.type = "submit";
  InputText.className = "text-style";
  InputBtn.className = "submit-style";
  InputEl.append(InputText, InputBtn);
  return InputEl;
};

const listGenerator = () => {
  const ListEl = document.createElement("ul");
  ListEl.className = "list-style";
  return ListEl;
};

const list = listGenerator();

RootEl.append(
  heroGenerator("note your tasks", "software developed by ", "MrElliot4"),
  inputGenerator(),
  list
);
