import consumer from "./consumer"



consumer.subscriptions.create({ channel: "ChatChannel", room: "Best Room" }, {
  received(data) {
    this.appendLine(data)
  },

  appendLine(data) {
    const element1 = document.getElementById('nbconnectes');
        
    const element2 = document.getElementById('listusers');
    if (element2.includes(data['pseudo'])) {
            element2.innerHTML=element2.innerHTML +","+data['pseudo']
            element1.innerHTML=Number(element1.innerHTML)+1;
            more_social.children[1].innerHTML="Membres ("+element1.innerHTML+")";
    }
  }
})