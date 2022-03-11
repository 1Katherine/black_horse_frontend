import thenFs from "then-fs";

console.log("a");
async function getFIle() {
  console.log("b");
  const r1 = await thenFs.readFile("./files/1.txt", "utf-8");
  console.log(r1);
  const rs = await thenFs.readFile("./files/2.txt", "utf-8");
  console.log(rs);
  const r3 = await thenFs.readFile("./files/3.txt", "utf-8");
  console.log(r3);
}
console.log("c");
getFIle();
