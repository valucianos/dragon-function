var dragonHealth = 0;
function dragonFight(damage, attack) {
  if (attack == "Fire") {
    dragonHealth = dragonHealth + damage - 1;
    document.body.querySelector(".dragon").innerHTML =
      "Damage dealt " + dragonHealth;
    if (dragonHealth == 10 || dragonHealth > 10) {
      document.body.querySelector(".dragon").innerHTML = "You have won.";
    }
  }
  if (attack == "Ice") {
    dragonHealth = dragonHealth + damage + 1;
    document.body.querySelector(".dragon").innerHTML =
      "Damage dealt " + dragonHealth;
   if (dragonHealth == 10 || dragonHealth > 10) {
      document.body.querySelector(".dragon").innerHTML = "You have won.";
  }}
  if (attack == "Poison") {
    dragonHealth = dragonHealth + damage;
    document.body.querySelector(".dragon").innerHTML =
      "Damage dealt " + dragonHealth;
    if (dragonHealth == 10 || dragonHealth > 10) {
      document.body.querySelector(".dragon").innerHTML = "You have won.";
  }
}}
document.body.querySelector(".button1").addEventListener("click", function () {
  dragonFight(3, "Fire");
});
document.body.querySelector(".button2").addEventListener("click", function () {
  dragonFight(3, "Ice");
});
document.body.querySelector(".button3").addEventListener("click", function () {
  dragonFight(3, "Poison");
});