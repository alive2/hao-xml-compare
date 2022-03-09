const fs = require("fs");
const path = require("path");
const beautify = require("xml-beautifier");

const files = fs.readdirSync(process.cwd());

for (const file of files) {
  if (!file.endsWith(".img.xml")) continue;
  const filePath = path.join(process.cwd(), file);

  const xml = fs.readFileSync(filePath, { encoding: "utf-8" });
  const formattedXml = beautify(xml);

  fs.writeFileSync(filePath, formattedXml, {
    encoding: "utf-8",
    flag: "w+",
  });
}
