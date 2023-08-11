const updateContent = (ele) => {
  raceName = ele.options[ele.selectedIndex].text;
};

const racesPromise = fetch("/source/5e-SRD-Races.json").then((response) => {
  return response.json();
});

const subRacesPromise = fetch("/source/5e-SRD-Subraces.json").then((response) => {
  return response.json();
});

Promise.all([racesPromise, subRacesPromise]).then(([races_json, sub_races_json]) => {
  const parent = document.getElementById("options");

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

    for (const subrace of sub_races_json) {
      if (subrace.race.index === race.index) {
        const option = document.createElement("option");
        const option_text = document.createTextNode(subrace.index);
        option.appendChild(option_text);
        node.appendChild(option);
      }
    }
  }
});
