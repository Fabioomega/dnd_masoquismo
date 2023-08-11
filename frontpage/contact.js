var raceName = "";

const updateContent = (ele) => {
  raceName = ele.options[ele.selectedIndex].text;
};

const races = fetch("../source/5e-SRD-Races.json").then((response) => {
  return response.json();
});

const sub_races = fetch("../source/5e-SRD-Subraces.json").then((response) => {
  return response.json();
});

races.then((races_json) => {
  let parent = document.getElementById("options");

  for (const race of races_json) {
    let node = document.createElement("select");
    node.onfocus = "updateContent(this);";
    node.onchange = "updateContent(this);";
    node.id = race.index;

    let main_option = document.createElement("option");
    let option_text = document.createTextNode(race.index);
    main_option.appendChild(option_text);
    node.appendChild(main_option);

    parent.appendChild(node);

    let padding = document.createElement("br");
    let padding2 = document.createElement("br");
    parent.appendChild(padding);
    parent.appendChild(padding2);
  }
});

sub_races.then((races_json) => {
  for (const subrace of races_json) {
    let parent = document.getElementById(subrace.race.index);

    let option = document.createElement("option");
    let option_text = document.createTextNode(subrace.index);
    option.appendChild(option_text);
    parent.appendChild(option);
  }
});
