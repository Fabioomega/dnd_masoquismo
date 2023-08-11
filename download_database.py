import requests

prefix = "https://raw.githubusercontent.com/5eg-bits/5e-database/main/src/"

suffix = [
    "5e-SRD-Ability-Scores.json",
    "5e-SRD-Alignments.json",
    "5e-SRD-Backgrounds.json",
    "5e-SRD-Classes.json",
    "5e-SRD-Conditions.json",
    "5e-SRD-Damage-Types.json",
    "5e-SRD-Equipment-Categories.json",
    "5e-SRD-Equipment.json",
    "5e-SRD-Feats.json",
    "5e-SRD-Features.json",
    "5e-SRD-Languages.json",
    "5e-SRD-Levels.json",
    "5e-SRD-Magic-Items.json",
    "5e-SRD-Magic-Schools.json",
    "5e-SRD-Proficiencies.json",
    "5e-SRD-Races.json",
    "5e-SRD-Skills.json",
    "5e-SRD-Spells.json",
    "5e-SRD-Subclasses.json",
    "5e-SRD-Subraces.json",
    "5e-SRD-Traits.json",
    "5e-SRD-Weapon-Properties.json",
]


for sfx in suffix:
    page_content = requests.get(prefix + sfx)
    page_text = page_content.text

    with open(f"./source/{sfx}", "w") as file:
        file.write(page_text)
