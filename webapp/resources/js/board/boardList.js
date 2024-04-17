
const API_KEY = "test_bab40a67b73dc85908ab2f2191cdb75ff11a4113d2aece73255b4918ab990dce2c2f52bfa4866e4905a647a1e60f6f7d";
const short_url = "https://open.api.nexon.com/maplestory/v1/";
const test1 = document.getElementById("test1");
const test2 = document.getElementById("test2");
const test3 = document.getElementById("test3");

document.getElementById("btn").addEventListener('click', (e) => {

  const characterName = document.getElementById("characterName").value;
  const urlString = short_url + "id?character_name=" + characterName;

  fetch(urlString, {
    headers: {
      "x-nxopen-api-key": API_KEY
    }
  })
  .then(response => response.json())
  .then(data => {
    const ocid = data.ocid;
    const cUrlString = short_url + "character/basic?ocid=" + ocid;
    fetch(cUrlString, {
      headers: {
        "x-nxopen-api-key": API_KEY
      }
    })
    .then(response => response.json())
    .then(data => {
      test1.innerText = "닉네임 : " + data.character_name;
      test2.innerText = "직업 : " + data.character_class;
      test3.innerText = "레벨 : " + data.character_level;
    })
    .catch(error => console.error(error))
  })
  .catch(error => console.error(error))
});


//정렬 Alt + Shift + F