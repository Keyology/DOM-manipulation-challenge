




class personalSite {
  constructor(title, name, bio,){
    this._title = title;
    this._name = name;
    this._bio = bio;

  }

};
let person1 = new personalSite('Keoni Website',"Keoni","Hi my name is Keoni and I am a software developer");
const websiteTitle = document.getElementById('mysite');
const info = document.getElementById('info');
const heading = document.getElementById('heading');
const listText = document.getElementById('list-text');
websiteTitle.innerHTML = person1._title;
info.innerHTML = person1._bio;
heading.innerHTML = person1._name;
let Tools = "I have expirence working with";
listText.innerHTML = Tools;

let codingList = ["Javascritp", 'Python', 'React.js', 'node'];

for(let i = 0; i < codingList.length; i++){
  const listItems = document.getElementById('coding-tools');
  listItems.innerHTML += `<li>${codingList[i]}</li>`;
}
