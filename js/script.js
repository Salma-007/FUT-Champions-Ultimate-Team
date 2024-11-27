// changement du form si la position est goalkeeper
let positionSelect = document.querySelector('.option-position');
let normalPlayerSection = document.querySelector('.normal-player');
let goalkeeperPlayerSection = document.querySelector('.goalkeeper-player');

let arrPlayers = [];

positionSelect.addEventListener('change',function(){
    const selectedPosition = positionSelect.value;

   if (selectedPosition === 'GK') {
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
let logoPlayer = document.querySelector('.logo-player')
let flagPlayer = document.querySelector('.flag-player')
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

// array des div de changement
let changements = []
let changement = document.querySelectorAll('.changement')
changements = Array.from(changement)
changements.reverse()

// array des div de CM
let middleCenter = document.querySelectorAll('.CM')

// array des div de CB

let backCenter = document.querySelectorAll('.CB')

displayPlayers()

addPlayer.addEventListener('click',function(){

    let nomPlayerValue = nomPlayer.value;
    let photoPlayerValue = photoPlayer.value;
    let nationalityPlayerValue = nationalityPlayer.value;
    let liguePlayerValue = liguePlayer.value;
    let ratingPlayerValue = ratingPlayer.value;
    let positionPlayerValue = positionPlayer.value;
    let logoPlayerValue = logoPlayer.value
    let flagPlayerValue = flagPlayer.value

    if(positionPlayerValue == 'GK'){
        let divGoalkeeperValue = divGoalkeeper.value;
        let hanGoalkeeperValue = hanGoalkeeper.value;
        let kicGoalkeeperValue = kicGoalkeeper.value;
        let refGoalkeeperValue = refGoalkeeper.value;
        let spdGoalkeeperValue = spdGoalkeeper.value;
        let posGoalkeeperValue = posGoalkeeper.value;

        addGoalkeeperFunction(nomPlayerValue, photoPlayerValue,logoPlayerValue,flagPlayerValue,nationalityPlayerValue, liguePlayerValue,ratingPlayerValue,positionPlayerValue,divGoalkeeperValue,hanGoalkeeperValue,kicGoalkeeperValue,refGoalkeeperValue,spdGoalkeeperValue,posGoalkeeperValue);
        // document.getElementById("player-formulaire").reset();
    }
    else{
        let pacPlayerValue = pacPlayer.value;
        let shoPlayerValue = shoPlayer.value;
        let pasPlayerValue = pasPlayer.value;
        let driPlayerValue = driPlayer.value;
        let defPlayerValue = defPlayer.value;
        let phyPlayerValue = phyPlayer.value;

        addPlayerFunction(nomPlayerValue, photoPlayerValue,logoPlayerValue,flagPlayerValue,nationalityPlayerValue, liguePlayerValue,ratingPlayerValue,positionPlayerValue,pacPlayerValue,shoPlayerValue,pasPlayerValue,driPlayerValue,defPlayerValue,phyPlayerValue);
        // document.getElementById("player-formulaire").reset();
    }
    
})

function addGoalkeeperFunction(nomPlayerValue, photoPlayerValue,logoPlayerValue,flagPlayerValue,nationalityPlayerValue, liguePlayerValue,ratingPlayerValue,positionPlayerValue,divGoalkeeperValue,hanGoalkeeperValue,kicGoalkeeperValue,refGoalkeeperValue,spdGoalkeeperValue,posGoalkeeperValue){
    let player = {
        nomPlayerValue : nomPlayerValue,
        photoPlayerValue : photoPlayerValue,
        logoPlayerValue : logoPlayerValue,
        flagPlayerValue :flagPlayerValue,
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
    console.log(player);
    arrPlayers.push(player)
    displayPlayers();
    
}

function addPlayerFunction(nomPlayerValue, photoPlayerValue,logoPlayerValue,flagPlayerValue,nationalityPlayerValue, liguePlayerValue,ratingPlayerValue,positionPlayerValue,pacPlayerValue,shoPlayerValue,pasPlayerValue,driPlayerValue,defPlayerValue,phyPlayerValue){
    let player = {
        nomPlayerValue : nomPlayerValue,
        photoPlayerValue : photoPlayerValue,
        logoPlayerValue: logoPlayerValue,
        flagPlayerValue : flagPlayerValue,
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
    arrPlayers.push(player)
    console.log(arrPlayers);
    
    displayPlayers();
}

let leftWing = document.querySelector('.LW')
let goalKeeperDiv = document.querySelector('.GL')
let rightWing = document.querySelector('.RW')


// affichage des players
let setrouve = false;
function displayPlayers(){
    changements.forEach(x=>{
        x.innerHTML=''
    })
    let newCard = document.createElement('div')
    newCard.classList.add('card-content')
    let newCardPlayerStade = document.createElement('div')
    newCardPlayerStade.classList.add('card-GL')

    arrPlayers.forEach(player=>{
        
        if (player.positionPlayerValue == 'LW' ){
            
            if( leftWing.innerHTML.trim() !== ''  ){
               
                changements.forEach(changement0 => {

                    if(changement0.innerHTML == ''){

                            newCard.innerHTML=`
                                    <div class="rating-position">
                                            <div class="player-rating">${player.ratingPlayerValue}</div>
                                            <div class="player-position">${player.positionPlayerValue}</div>
                                        </div>
                                    <img src="${player.photoPlayerValue}" alt="">
                                    <div class="player-informations">
                                        <div class="player-name">${player.nomPlayerValue}</div>
                                        <div class="player-score">
                                            <div class="pace-div">
                                                <div class="pac">DIV</div>
                                                <div class="pac-rating">${player.pacPlayerValue}</div>
                                            </div>
                                            <div class="pace-div">
                                                <div class="pac">HAN</div>
                                                <div class="pac-rating">${player.shoPlayerValue}</div>
                                            </div>
                                            <div class="pace-div">
                                                <div class="pac">KIC</div>
                                                <div class="pac-rating">${player.pasPlayerValue}</div>
                                            </div>
                                            <div class="pace-div">
                                                <div class="pac">REF</div>
                                                <div class="pac-rating">${player.driPlayerValue}</div>
                                            </div>
                                            <div class="pace-div">
                                                <div class="pac">SPD</div>
                                                <div class="pac-rating">${player.defPlayerValue}</div>
                                            </div>
                                            <div class="pace-div">
                                                <div class="pac">POS</div>
                                                <div class="pac-rating">${player.phyPlayerValue}</div>
                                            </div>
                                        </div>
                                        <div class="flags">
                                            <img src="${player.flagPlayerValue}" alt="">
                                            <img src="${player.logoPlayerValue}" alt="">
                                        </div>
                            `
                            changement0.appendChild(newCard)
                    }
                })
                
            }
            else{
                newCardPlayerStade.innerHTML=`
                    <div class="rating-position-gl">
                            <div class="player-rating-gl">${player.ratingPlayerValue}</div>
                            <div class="player-position-gl">${player.positionPlayerValue}</div>
                        </div>
                        <img src="${player.photoPlayerValue}" alt="">
                        <div class="player-informations-GL">
                        <div class="player-name-GL">${player.nomPlayerValue}</div>
                        <div class="player-score-GL">
                            <div class="flex-player">
                            <div class="pace-div">
                                <div class="pac">PAC</div>
                                <div class="pac-rating">${player.pacPlayerValue}</div>
                            </div>
                            <div class="pace-div">
                                <div class="pac">SHO</div>
                                <div class="pac-rating">${player.shoPlayerValue}</div>
                            </div>
                            <div class="pace-div">
                                <div class="pac">PAS</div>
                                <div class="pac-rating">${player.pasPlayerValue}</div>
                            </div>
                            <div class="pace-div">
                                <div class="pac">DRI</div>
                                <div class="pac-rating">${player.driPlayerValue}</div>
                            </div>
                            <div class="pace-div">
                                <div class="pac">DEF</div>
                                <div class="pac-rating">${player.defPlayerValue}</div>
                            </div>
                            <div class="pace-div">
                                <div class="pac">PHY</div>
                                <div class="pac-rating">${player.phyPlayerValue}</div>
                            </div></div>
                            <div class="flags-player">
                                <img src="${player.flagPlayerValue}" alt="">
                                <img src=" ${player.logoPlayerValue} " alt="">
                            </div>
                        </div>
                        
                        
                    </div>
                  `
                leftWing.appendChild(newCardPlayerStade)
               
            }
        }
        else if(player.positionPlayerValue == 'GK'){

            if( goalKeeperDiv.innerHTML.trim() !== '' ){
                
                changements.forEach(changement0 => {
                    if(changement0.innerHTML == ''){
    
                            newCard.innerHTML=`
                                    <div class="rating-position">
                                            <div class="player-rating">${player.ratingPlayerValue}</div>
                                            <div class="player-position">${player.positionPlayerValue}</div>
                                        </div>
                                    <img src="${player.photoPlayerValue}" alt="">
                                    <div class="player-informations">
                                        <div class="player-name">${player.nomPlayerValue}</div>
                                        <div class="player-score">
                                            <div class="pace-div">
                                                <div class="pac">DIV</div>
                                                <div class="pac-rating">${player.divGoalkeeperValue}</div>
                                            </div>
                                            <div class="pace-div">
                                                <div class="pac">HAN</div>
                                                <div class="pac-rating">${player.hanGoalkeeperValue}</div>
                                            </div>
                                            <div class="pace-div">
                                                <div class="pac">KIC</div>
                                                <div class="pac-rating">${player.kicGoalkeeperValue}</div>
                                            </div>
                                            <div class="pace-div">
                                                <div class="pac">REF</div>
                                                <div class="pac-rating">${player.refGoalkeeperValue}</div>
                                            </div>
                                            <div class="pace-div">
                                                <div class="pac">SPD</div>
                                                <div class="pac-rating">${player.spdGoalkeeperValue}</div>
                                            </div>
                                            <div class="pace-div">
                                                <div class="pac">POS</div>
                                                <div class="pac-rating">${player.posGoalkeeperValue}</div>
                                            </div>
                                        </div>
                                        <div class="flags">
                                            <img src="${player.flagPlayerValue}" alt="">
                                            <img src="${player.logoPlayerValue}" alt="">
                                        </div>
                            `
                            changement0.appendChild(newCard)
                    }
                    
                })
                
                
            }
            else
            {
                newCardPlayerStade.innerHTML=`
                            <div class="rating-position-gl">
                                    <div class="player-rating-gl">${player.ratingPlayerValue}</div>
                                    <div class="player-position-gl">${player.positionPlayerValue}</div>
                                </div>
                            <img src="${player.photoPlayerValue}" alt="">
                            <div class="player-informations-GL">
                                <div class="player-name-GL">${player.nomPlayerValue}</div>
                                <div class="player-score-GL">
                                <div class="flex-player">
                                    <div class="pace-div">
                                        <div class="pac">DIV</div>
                                        <div class="pac-rating">${player.divGoalkeeperValue}</div>
                                    </div>
                                    <div class="pace-div">
                                        <div class="pac">HAN</div>
                                        <div class="pac-rating">${player.hanGoalkeeperValue}</div>
                                    </div>
                                    <div class="pace-div">
                                        <div class="pac">KIC</div>
                                        <div class="pac-rating">${player.kicGoalkeeperValue}</div>
                                    </div>
                                    <div class="pace-div">
                                        <div class="pac">REF</div>
                                        <div class="pac-rating">${player.refGoalkeeperValue}</div>
                                    </div>
                                    <div class="pace-div">
                                        <div class="pac">SPD</div>
                                        <div class="pac-rating">${player.spdGoalkeeperValue}</div>
                                    </div>
                                    <div class="pace-div">
                                        <div class="pac">POS</div>
                                        <div class="pac-rating">${player.posGoalkeeperValue}</div>
                                    </div></div>
                                </div>
                                <div class="flags-player">
                                    <img src="${player.flagPlayerValue}" alt="">
                                    <img src="${player.logoPlayerValue}" alt="">
                                </div>
                    `
                    goalKeeperDiv.appendChild(newCardPlayerStade)

            }


        }
        else if (player.positionPlayerValue == 'RW' ){
            
            if( rightWing.innerHTML.trim() !== ''  ){

                changements.forEach(changement0 => {

                    if(changement0.innerHTML == ''){

                            newCard.innerHTML=`
                                    <div class="rating-position">
                                            <div class="player-rating">${player.ratingPlayerValue}</div>
                                            <div class="player-position">${player.positionPlayerValue}</div>
                                        </div>
                                    <img src="${player.photoPlayerValue}" alt="">
                                    <div class="player-informations">
                                        <div class="player-name">${player.nomPlayerValue}</div>
                                        <div class="player-score">
                                            <div class="pace-div">
                                                <div class="pac">DIV</div>
                                                <div class="pac-rating">${player.pacPlayerValue}</div>
                                            </div>
                                            <div class="pace-div">
                                                <div class="pac">HAN</div>
                                                <div class="pac-rating">${player.shoPlayerValue}</div>
                                            </div>
                                            <div class="pace-div">
                                                <div class="pac">KIC</div>
                                                <div class="pac-rating">${player.pasPlayerValue}</div>
                                            </div>
                                            <div class="pace-div">
                                                <div class="pac">REF</div>
                                                <div class="pac-rating">${player.driPlayerValue}</div>
                                            </div>
                                            <div class="pace-div">
                                                <div class="pac">SPD</div>
                                                <div class="pac-rating">${player.defPlayerValue}</div>
                                            </div>
                                            <div class="pace-div">
                                                <div class="pac">POS</div>
                                                <div class="pac-rating">${player.phyPlayerValue}</div>
                                            </div>
                                        </div>
                                        <div class="flags">
                                            <img src="${player.flagPlayerValue}" alt="">
                                            <img src="${player.logoPlayerValue}" alt="">
                                        </div>
                            `
                            changement0.appendChild(newCard)
                    }
                })
                
            }
            else{
                newCardPlayerStade.innerHTML=`
                    <div class="rating-position-gl">
                            <div class="player-rating-gl">${player.ratingPlayerValue}</div>
                            <div class="player-position-gl">${player.positionPlayerValue}</div>
                        </div>
                        <img src="${player.photoPlayerValue}" alt="">
                        <div class="player-informations-GL">
                        <div class="player-name-GL">${player.nomPlayerValue}</div>
                        <div class="player-score-GL">
                            <div class="flex-player">
                            <div class="pace-div">
                                <div class="pac">PAC</div>
                                <div class="pac-rating">${player.pacPlayerValue}</div>
                            </div>
                            <div class="pace-div">
                                <div class="pac">SHO</div>
                                <div class="pac-rating">${player.shoPlayerValue}</div>
                            </div>
                            <div class="pace-div">
                                <div class="pac">PAS</div>
                                <div class="pac-rating">${player.pasPlayerValue}</div>
                            </div>
                            <div class="pace-div">
                                <div class="pac">DRI</div>
                                <div class="pac-rating">${player.driPlayerValue}</div>
                            </div>
                            <div class="pace-div">
                                <div class="pac">DEF</div>
                                <div class="pac-rating">${player.defPlayerValue}</div>
                            </div>
                            <div class="pace-div">
                                <div class="pac">PHY</div>
                                <div class="pac-rating">${player.phyPlayerValue}</div>
                            </div></div>
                            <div class="flags-player">
                                <img src="${player.flagPlayerValue}" alt="">
                                <img src=" ${player.logoPlayerValue} " alt="">
                            </div>
                        </div>
                        
                        
                    </div>
                  `
                  rightWing.appendChild(newCardPlayerStade)
               
            }
        }
        
    }

)

}

