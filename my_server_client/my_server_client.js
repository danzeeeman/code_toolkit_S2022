let playerCreated = false;
let sendScore = false;
function setup() {
  createCanvas(512, 512);
  
}

function draw() {
  if(keyIsPressed){
    if(key === ' ' && playerCreated === false){
      createUsername("dantheman1233623452");
    }
    if(key === 's' && sendScore === false){
      updateScore("dantheman1233623452", 12345);
    }
    if(key === '1'){
      deletePlayer("dantheman1233623452");
    }
    if(key === '2'){
      getTopScore(5);
    }
  }
}

function createUsername(username){
  playerCreated = true;
  httpPost("http://super-cool-high-score.herokuapp.com/players?username="+username, 'json', false, function(response) {
    print(response);
    if(response.status === false){
      print("no dice already taken")
    }
    else{
     print("success")
    }
  });
}

function updateScore(username, score){
  sendScore = true;
  let url = "http://super-cool-high-score.herokuapp.com/players?username="+username+"&score="+score
  httpDo(url, {method: 'PUT'}, function(res) {
      print(res);
      sendScore = false;
    });
}

function deletePlayer(username){
  sendScore = true;
  let url = "http://super-cool-high-score.herokuapp.com/players?username="+username
  httpDo(url, {method: 'DELETE'}, function(res) {
      print(res);
      sendScore = false;
    });
}

function getTopScore(limit){
  sendScore = true;
  let url = "http://super-cool-high-score.herokuapp.com/players?lim="+limit
  httpDo(url, {method: 'GET'}, function(res) {
      print(res);
    });
}

  
