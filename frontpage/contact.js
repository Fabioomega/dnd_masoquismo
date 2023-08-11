var raceName = "";

const updateContent = (ele) => {
  raceName = ele.options[ele.selectedIndex].text;
};

const races = fetch("../source/5e-SRD-Races.json").then((response) => {
  return response.json();
});
//assd

const sub_races = fetch("../source/5e-SRD-Subraces.json").then((response) => {
  return response.json();
});

races.then((races_json) => {
  let parent = document.getElementById("options");

  for (const race of races_json) {
    const node = document.createElement("select");
    node.id = race.index;

    node.setAttribute("onfocus", "updateContent(this);");
    node.setAttribute("onchange", "updateContent(this);");

    const main_option = document.createElement("option");
    const option_text = document.createTextNode(race.index);
    main_option.appendChild(option_text);
    node.appendChild(main_option);

    parent.appendChild(node);

    const padding = document.createElement("br");
    const padding2 = document.createElement("br");
    parent.appendChild(padding);
    parent.appendChild(padding2);
  }
});

sub_races.then((races_json) => {
  for (const subrace of races_json) {
    const parent = document.getElementById(subrace.race.index);

    const option = document.createElement("option");
    const option_text = document.createTextNode(subrace.index);
    option.appendChild(option_text);
    parent.appendChild(option);
  }
});
