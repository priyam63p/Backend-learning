const bcrypt = require("bcrypt");
const password = "abc@123";
async function Hashing() {
  const salt = await bcrypt.genSalt(10);

  const hashpass = await bcrypt.hash(password, 10);
  const ans = await bcrypt.compare("abc@123", hashpass);
  console.log(ans);
}

Hashing();
