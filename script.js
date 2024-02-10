const getData = async () => {
  let members;
  let contain = document.querySelector(".container");
  let data = await fetch("https://api.ecelliitr.org/edc/team");
  members = await data.json()
  members.forEach(type => {
      type.members.forEach(member => {
          console.log(member);
          let box = document.createElement("div");
          box.classList.add("box");
          box.innerHTML = ` <div class="imgBx">
<img src="${member.image}" alt="">
</div>

<div class="content">

  <h2>${member.name}<br><span class="position">${member.position}</span><br><span><i class="fa-solid fa-phone"></i>${member.mobile}</span>
<br>
  <ul>
  <li style="--i: 1">
  <a href="${member.email}"><i class="fa-solid fa-envelope"></i></a>
  </li>
  <li style="--i: 2">
  <a href="${member.fblink}"><i class="fa-brands fa-facebook"></i></a>
  </li>
  <li style="--i: 3">
  <a href="${member.linkedin}"><i class="fa-brands fa-linkedin-in"></i></a>
  </li>
  </ul>
  </h2>
  </div> 
                  `
contain.appendChild(box);
      });
  });
}
getData()