setInterval(() => {
    var today = new Date();
    var day = today.getDay();
    var hour = today.getHours();
    var min = today.getMinutes();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("t").innerHTML=hour+":"+min;
    document.getElementById("time").innerHTML=hour+":"+min;
    document.getElementById("day").innerHTML=daylist[day];
    },1000);
  
  let msgList = [
      "Message is urgent. Please reply as soon as possible.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et augue mauris. Aliquam nec nibh tempor, venenatis.",
      "Nullam condimentum ante ut rutrum blandit. Fusce eget tempus nunc, quis lobortis elit. Duis velit velit, congue pretium.",
      "Proin ac elit non tellus hendrerit scelerisque. Nullam blandit molestie mattis. Praesent a felis scelerisque, lacinia .",
    ];
    
    let selectMsg = (msgId) => {
      let msg = document.getElementById("showMsg");
      msg.style.display = "block";
      msg.textContent = msgList[msgId - 1];
    };
  
    //Media
    let smsState, musicState, watchState;
    smsState = musicState = watchState = false;
    function setOff() {
      let icons = document.querySelector(".icons").childNodes;
      icons[1].style.opacity = 0.5;
      icons[3].style.opacity = 0.5;
      icons[5].style.opacity = 0.5;
      document.querySelector(".time").style.display = "none";
      document.querySelector(".sms").style.display = "none";
      document.querySelector(".media").style.display = "none";
  }
  
    function selectScreen(s) {
      setOff();
      let icons = document.querySelector(".icons").childNodes;
      switch(s){
        case 0:
          document.querySelector(".time").style.display="flex";
          break;
        case 1:
          document.querySelector(".sms").style.display="flex";
          icons[s].style.opacity=1;
          break;
        case 3:
          document.querySelector(".media").style.display="flex";
          icons[s].style.opacity=1;
          break;
      }
    }
    function selectSong(id) {
      document.querySelector("#song").src = `./song/s${id}.mp3`;
      document.querySelector("#art").src = `./image/i${id}.jpg`;
    }
