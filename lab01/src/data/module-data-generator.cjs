const fs = require("fs");
const path = require("path");

const namesFile = path.join(__dirname, "names.txt");
const outputFile = path.join(__dirname, "../module-data.js");

const count = Number(process.argv[2]) || 5;

fs.readFile(namesFile, "utf8", (err, data) => {
  if (err) {
    console.error("❌ Błąd podczas odczytu names.txt:", err);
    return;
  }

  const names = data
    .split(/\s+/)
    .map((s) => s.trim())
    .filter((n) => n.length > 0);

  const people = [];

  const randomDate = () => {
    const year = 1980 + Math.floor(Math.random() * 30);
    const month = String(1 + Math.floor(Math.random() * 12)).padStart(2, "0");
    const day = String(1 + Math.floor(Math.random() * 28)).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const randomPhone = () => {
    let phone = "2";
    for (let i = 0; i < 8; i++) phone += Math.floor(Math.random() * 10);
    return phone.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3");
  };

  const nameCount = {};

  for (let i = 0; i < count; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    nameCount[name] = (nameCount[name] || 0) + 1;
    const email = `${name.toLowerCase()}${nameCount[name]}@wsei.edu.pl`;

    people.push({
      id: i + 1,
      name,
      birthDate: randomDate(),
      email,
      phone: randomPhone(),
    });
  }

  const content = "export const people = " + JSON.stringify(people, null, 4) + ";\n";

  fs.writeFile(outputFile, content, (err) => {
    if (err) {
      console.error("❌ Błąd zapisu:", err);
      return;
    }
    console.log(`✅ Wygenerowano module-data.js z ${count} osobami.`);
  });
});
