//create const RootEl to select the main element div in html that contains all software's app
const RootEl = document.querySelector("#root");
const HeroGenerator = (titleText, subtitleText, spanSubtitleText) => {
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

RootEl.append(
  HeroGenerator("note your tasks", "software developed by ", "MrElliot4")
);
