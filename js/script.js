// changement du form si la position est goalkeeper
let positionSelect = document.querySelector('.option-position');
let normalPlayerSection = document.querySelector('.normal-player');
let goalkeeperPlayerSection = document.querySelector('.goalkeeper-player');

let arrPlayers = [];

positionSelect.addEventListener('change',function(){
    const selectedPosition = positionSelect.value;

   if (selectedPosition === 'goalkeeper') {
        goalkeeperPlayerSection.style.display = 'block';
        normalPlayerSection.style.display = 'none';
    } else {
        normalPlayerSection.style.display = 'block';
        goalkeeperPlayerSection.style.display = 'none';
    }
})

// données des joueurs
let addPlayer = document.querySelector('.addPlayer')
let nomPlayer = document.querySelector('.nom-player')
let photoPlayer = document.querySelector('.photo-player')
let nationalityPlayer = document.querySelector('.nationality-player')
let liguePlayer = document.querySelector('.ligue-player')
let ratingPlayer = document.querySelector('.rating-player')
let positionPlayer = document.querySelector('.option-position')

// ratings of goalkeepers
let divGoalkeeper = document.querySelector('.div-goalkeeper')
let hanGoalkeeper = document.querySelector('.han-goalkeeper')
let kicGoalkeeper = document.querySelector('.kic-goalkeeper')
let refGoalkeeper = document.querySelector('.ref-goalkeeper')
let spdGoalkeeper = document.querySelector('.spd-goalkeeper')
let posGoalkeeper = document.querySelector('.pos-goalkeeper')

// rating des normal players
let pacPlayer = document.querySelector('.pac-player')
let shoPlayer = document.querySelector('.sho-player')
let pasPlayer = document.querySelector('.pas-player')
let driPlayer = document.querySelector('.dri-player')
let defPlayer = document.querySelector('.def-player')
let phyPlayer = document.querySelector('.phy-player')


addPlayer.addEventListener('click',function(){

    let nomPlayerValue = nomPlayer.value;
    let photoPlayerValue = photoPlayer.value;
    let nationalityPlayerValue = nationalityPlayer.value;
    let liguePlayerValue = liguePlayer.value;
    let ratingPlayerValue = ratingPlayer.value;
    let positionPlayerValue = positionPlayer.value;

    if(positionPlayerValue == 'goalkeeper'){
        let divGoalkeeperValue = divGoalkeeper.value;
        let hanGoalkeeperValue = hanGoalkeeper.value;
        let kicGoalkeeperValue = kicGoalkeeper.value;
        let refGoalkeeperValue = refGoalkeeper.value;
        let spdGoalkeeperValue = spdGoalkeeper.value;
        let posGoalkeeperValue = posGoalkeeper.value;

        addGoalkeeperFunction(nomPlayerValue, photoPlayerValue,nationalityPlayerValue, liguePlayerValue,ratingPlayerValue,positionPlayerValue,divGoalkeeperValue,hanGoalkeeperValue,kicGoalkeeperValue,refGoalkeeperValue,spdGoalkeeperValue,posGoalkeeperValue);
    }
    else{
        let pacPlayerValue = pacPlayer.value;
        let shoPlayerValue = shoPlayer.value;
        let pasPlayerValue = pasPlayer.value;
        let driPlayerValue = driPlayer.value;
        let defPlayerValue = defPlayer.value;
        let phyPlayerValue = phyPlayer.value;

        addPlayerFunction(nomPlayerValue, photoPlayerValue,nationalityPlayerValue, liguePlayerValue,ratingPlayerValue,positionPlayerValue,pacPlayerValue,shoPlayerValue,pasPlayerValue,driPlayerValue,defPlayerValue,phyPlayerValue);

    }
    
})

function addGoalkeeperFunction(nomPlayerValue, photoPlayerValue,nationalityPlayerValue, liguePlayerValue,ratingPlayerValue,positionPlayerValue,divGoalkeeperValue,hanGoalkeeperValue,kicGoalkeeperValue,refGoalkeeperValue,spdGoalkeeperValue,posGoalkeeperValue){
    let player = {
        nomPlayerValue : nomPlayerValue,
        photoPlayerValue : photoPlayerValue,
        nationalityPlayerValue :nationalityPlayerValue,
        liguePlayerValue : liguePlayerValue,
        ratingPlayerValue :ratingPlayerValue,
        positionPlayerValue :positionPlayerValue,
        divGoalkeeperValue : divGoalkeeperValue,
        hanGoalkeeperValue :hanGoalkeeperValue,
        kicGoalkeeperValue : kicGoalkeeperValue,
        refGoalkeeperValue : refGoalkeeperValue,
        spdGoalkeeperValue :spdGoalkeeperValue,
        posGoalkeeperValue : posGoalkeeperValue
    }
    arrPlayers.push(player)
    displayPlayers();
    // console.log(player);
    
}

function addPlayerFunction(nomPlayerValue, photoPlayerValue,nationalityPlayerValue, liguePlayerValue,ratingPlayerValue,positionPlayerValue,pacPlayerValue,shoPlayerValue,pasPlayerValue,driPlayerValue,defPlayerValue,phyPlayerValue){
    let goalkeeper = {
        nomPlayerValue : nomPlayerValue,
        photoPlayerValue : photoPlayerValue,
        nationalityPlayerValue :nationalityPlayerValue,
        liguePlayerValue : liguePlayerValue,
        ratingPlayerValue :ratingPlayerValue,
        positionPlayerValue :positionPlayerValue,
        pacPlayerValue : pacPlayerValue,
        shoPlayerValue :shoPlayerValue,
        pasPlayerValue : pasPlayerValue,
        driPlayerValue : driPlayerValue,
        defPlayerValue :defPlayerValue,
        phyPlayerValue : phyPlayerValue
    }
    arrPlayers.push(goalkeeper)
    displayPlayers();
}


// display players

let divDekka2 = document.querySelector('.card-player2')
function displayPlayers(){

    divDekka2.innerHTML= ''
    let newCard = document.createElement('div')
    newCard.classList.add('card-content')
    arrPlayers.forEach(player=>{
        newCard.innerHTML=`
                <div class="rating-position">
                        <div class="player-rating">${player.ratingPlayerValue0}</div>
                        <div class="player-position">${player.positionPlayerValue}</div>
                    </div>
                <img src="https://cdn.sofifa.net/players/231/747/25_120.png" alt="">
                <div class="player-informations">
                    <div class="player-name">Mbappe</div>
                    <div class="player-score">
                        <div class="pace-div">
                            <div class="pac">PAC</div>
                            <div class="pac-rating">98</div>
                        </div>
                        <div class="pace-div">
                            <div class="pac">SHO</div>
                            <div class="pac-rating">98</div>
                        </div>
                        <div class="pace-div">
                            <div class="pac">PAS</div>
                            <div class="pac-rating">98</div>
                        </div>
                        <div class="pace-div">
                            <div class="pac">DRI</div>
                            <div class="pac-rating">98</div>
                        </div>
                        <div class="pace-div">
                            <div class="pac">DEF</div>
                            <div class="pac-rating">98</div>
                        </div>
                        <div class="pace-div">
                            <div class="pac">PHY</div>
                            <div class="pac-rating">98</div>
                        </div>
                    </div>
                    <div class="flags">
                        <img src="./assets/images/Flag-France.webp" alt="">
                        <img src="./assets/images/real-madrid.png" alt="">
                    </div>
        `
        divDekka2.appendChild(newCard)
    })

}

