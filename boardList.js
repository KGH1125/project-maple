const API_KEY = "test_bab40a67b73dc85908ab2f2191cdb75ff11a4113d2aece73255b4918ab990dce2c2f52bfa4866e4905a647a1e60f6f7d";
const MAPLE_URL = "https://open.api.nexon.com/maplestory/v1/";
const test1Element = document.getElementById("test1");
const test2Element = document.getElementById("test2");
const test3Element = document.getElementById("test3");

document.getElementById("btn").addEventListener('click', () => {
  const characterName = document.getElementById("characterName").value;
  fetchCharacterInfo(characterName);
});

function fetchCharacterInfo(characterName) {
  const urlString = `${MAPLE_URL}id?character_name=${characterName}`;
  fetch(urlString, {
    headers: {
      "x-nxopen-api-key": API_KEY
    }
  })
  .then(response => response.json())
  .then(data => {
    const ocid = data.ocid; //coid 획득
    const cUrlString = `${MAPLE_URL}character/basic?ocid=${ocid}`;
    const stat = `${MAPLE_URL}character/stat?ocid=${ocid}`; //종합 능력치
    const item_equipment= `${MAPLE_URL}character/item_equipment?ocid=${ocid}`;//장착장비(캐시제외)
    const skill_0 = `${MAPLE_URL}character/skill?ocid=${ocid}&skill_grade=0`; //0차스킬 조회


    fetch(cUrlString, {
      headers: {
        "x-nxopen-api-key": API_KEY
      }
    })
    .then(response => response.json())
    .then(data => {
      displayCharacterInfo(data);
    })
    .catch(error => console.error(error))




  })
  .catch(error => console.error(error))
}

function displayCharacterInfo(data) {
  test1Element.innerText = "닉네임 : " + data.character_name;
  test2Element.innerText = "직업 : " + data.character_class;
  test3Element.innerText = "레벨 : " + data.character_level;
}


//정렬 Alt + Shift + F