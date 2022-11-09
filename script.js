let names = [];

async function loadNames(){
    let response = await fetch("https://api.github.com/users");
    let data = await response.json();
    console.log(data);

    for(let i = 0; i < data.length; i++) {
        
        
        profile_collector=document.createElement("div");
        profile_collector.id = `profile_collector${i}`
        profile_collector.className = "profile_collector"
        document.getElementById("collector").append(profile_collector)
        
        profile=document.createElement("div");
        profile.id = `profile_box${i}`
        profile.className = "profiles"
        profile_collector.append(profile)

        picture=document.createElement("img");
        picture.id = "image";
        picture.src = `https://avatars.githubusercontent.com/u/${data[i].id}?v=4`
        profile.append(picture);

        username=document.createElement("p")
        username.id = `name_${i}`
        username.className = "name";
        username.innerText = data[i].login;
        profile.append(username);

        


        show_button = document.createElement("button");
        show_button.id = `button${i}`
        show_button.className = "show_button"
        smth = "Show more"
        show_button.innerText = smth

        profile.append(show_button);

        rank = document.createElement("p");
        rank.id =  `rank${i}`
        rank.className = "button_click";
          rank.innerText = `Admin: ${data[i].type}`
        profile.append(rank);

        isAdmin = document.createElement("p");
        isAdmin.id = `admin${i}`
        isAdmin.className = "button_click";
        isAdmin.innerText = `Role: ${data[i].site_admin}`
        profile.append(isAdmin);

        document.getElementById(`rank${i}`).style.display = "none";
        document.getElementById(`admin${i}`).style.display = "none";

        let index = 0;

        function displayer(){
            if (index == 1) {
                document.getElementById(`button${i}`).innerText = "Show More";
                index = 0;
                document.getElementById(`admin${i}`).style.display = "none";
                document.getElementById(`rank${i}`).style.display = "none";
            } else if (index == 0){
                document.getElementById(`button${i}`).innerText = "Show less";
                index = 1;
                document.getElementById(`admin${i}`).style.display = "block";
                document.getElementById(`rank${i}`).style.display = "block";
            } 
        }
        names.push(data[i].login)

        document.getElementById(`button${i}`).addEventListener("click",displayer)
    }
}
function myFunction() {
   
    var input, filter, i, a, txtValue;
    input = document.getElementById('input_1');
    filter = input.value.toUpperCase();


  
    for (i = 0; i < names.length; i++) {
      a = document.getElementById(`name_${i}`);
      txtValue = a.innerText
      if (txtValue.toUpperCase().startsWith(filter)) {
        document.getElementById(`profile_collector${i}`).style.display = "block";
      } else {
        document.getElementById(`profile_collector${i}`).style.display = "none";
      }
    }
}
function makeInvisible(){
    let loader = document.getElementById("loader")
    loader.style.visibility = "hidden";
}

setTimeout(makeInvisible, 2000)
loadNames();