// changement du form si la position est goalkeeper
let positionSelect = document.querySelector('.option-position');
let normalPlayerSection = document.querySelector('.normal-player');
let goalkeeperPlayerSection = document.querySelector('.goalkeeper-player');

let arrPlayers = JSON.parse(localStorage.getItem("MyStorage")) || [];
displayPlayers();

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
let EditPlayer = document.querySelector('.EditPlayer')
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

EditPlayer.addEventListener('click', function(){
    let playerForm = document.querySelector('.nom-player').value; 
    
    let playerToEdit = arrPlayers.find(player => player.nomPlayerValue === playerForm);
    let index = arrPlayers.indexOf(playerToEdit);
    console.log(positionPlayer.value);

        console.log(arrPlayers[index]);
        if( positionPlayer.value == 'GK'){
            arrPlayers[index] = {
                nomPlayerValue: playerForm,
                photoPlayerValue: photoPlayer.value,
                logoPlayerValue: logoPlayer.value,
                flagPlayerValue: flagPlayer.value,
                nationalityPlayerValue: nationalityPlayer.value,
                liguePlayerValue: liguePlayer.value,
                ratingPlayerValue: ratingPlayer.value,
                positionPlayerValue: positionPlayer.value,
                divGoalkeeperValue : divGoalkeeper.value,
                hanGoalkeeperValue :hanGoalkeeper.value,
                kicGoalkeeperValue : kicGoalkeeper.value,
                refGoalkeeperValue : refGoalkeeper.value,
                spdGoalkeeperValue :spdGoalkeeper.value,
                posGoalkeeperValue : posGoalkeeper.value
            }
            localStorage.setItem("MyStorage", JSON.stringify(arrPlayers));
            displayPlayers();

        }
        else{
            arrPlayers[index] = {
                nomPlayerValue: playerForm,
                photoPlayerValue: photoPlayer.value,
                logoPlayerValue: logoPlayer.value,
                flagPlayerValue: flagPlayer.value,
                nationalityPlayerValue: nationalityPlayer.value,
                liguePlayerValue: liguePlayer.value,
                ratingPlayerValue: ratingPlayer.value,
                positionPlayerValue: positionPlayer.value,
                pacPlayerValue: pacPlayer.value,
                shoPlayerValue: shoPlayer.value,
                pasPlayerValue: pasPlayer.value,
                driPlayerValue: driPlayer.value,
                defPlayerValue: defPlayer.value,
                phyPlayerValue: phyPlayer.value
            }
            localStorage.setItem("MyStorage", JSON.stringify(arrPlayers));
            displayPlayers();
        }

        addPlayer.style.display = 'block'
        EditPlayer.style.display = 'none'
        document.getElementById("player-formulaire").reset();
    

})


addPlayer.addEventListener('click',function(){

    let nomPlayerValue = nomPlayer.value;
    let photoPlayerValue = photoPlayer.value;
    let nationalityPlayerValue = nationalityPlayer.value;
    let liguePlayerValue = liguePlayer.value;
    let ratingPlayerValue = ratingPlayer.value;
    let positionPlayerValue = positionPlayer.value;
    let logoPlayerValue = logoPlayer.value
    let flagPlayerValue = flagPlayer.value

    var regexNom = /^[A-Za-zÀ-ÿ\s]{1,15}$/;
    var regexURL = /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/; 
    var regexLigue = /^[A-Za-zÀ-ÿ0-9\s\-]{2,10}$/; 
    var regexRating = /^[1-9]{1}[0-9]{0,2}$/;

    var isValid = true;

    if (!regexNom.test(nomPlayerValue)) {
        document.getElementById('error-message').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('error-message').style.display = 'none';
    }

    if (!regexURL.test(photoPlayerValue)) {
        document.querySelector('.error-photo-player').style.display = 'block';
        isValid = false;
    } else {
        document.querySelector('.error-photo-player').style.display = 'none';
    }

    if (!regexURL.test(logoPlayerValue)) {
        document.querySelector('.error-logo-player').style.display = 'block';
        isValid = false;
    } else {
        document.querySelector('.error-logo-player').style.display = 'none';
    }

    if (!regexURL.test(flagPlayerValue)) {
        document.querySelector('.error-flag-player').style.display = 'block';
        isValid = false;
    } else {
        document.querySelector('.error-flag-player').style.display = 'none';
    }

    if (!regexNom.test(nationalityPlayerValue)) {
        document.querySelector('.error-nationality-player').style.display = 'block';
        isValid = false;
    } else {
        document.querySelector('.error-nationality-player').style.display = 'none';
    }

    if (!regexLigue.test(liguePlayerValue)) {
        document.querySelector('.error-ligue-player').style.display = 'block';
        isValid = false;
    } else {
        document.querySelector('.error-ligue-player').style.display = 'none';
    }

    if (!regexRating.test(ratingPlayerValue)) {
        document.querySelector('.error-rating-player').style.display = 'block';
        isValid = false;
    } else {
        document.querySelector('.error-rating-player').style.display = 'none';
    }

    if (isValid) {
        
        if(positionPlayerValue == 'GK'){

            let divGoalkeeperValue = divGoalkeeper.value;
            let hanGoalkeeperValue = hanGoalkeeper.value;
            let kicGoalkeeperValue = kicGoalkeeper.value;
            let refGoalkeeperValue = refGoalkeeper.value;
            let spdGoalkeeperValue = spdGoalkeeper.value;
            let posGoalkeeperValue = posGoalkeeper.value;

            var regexRating = /^[1-9][0-9]?$|^99$/;
            var isValid = true;

            if (!regexRating.test(divGoalkeeperValue)) {
                document.querySelector('.error-div-player').style.display = 'block';
                isValid = false;
            } else {
                document.querySelector('.error-div-player').style.display = 'none';
            }

            if (!regexRating.test(hanGoalkeeperValue)) {
                document.querySelector('.error-han-player').style.display = 'block';
                isValid = false;
            } else {
                document.querySelector('.error-han-player').style.display = 'none';
            }

            if (!regexRating.test(kicGoalkeeperValue)) {
                document.querySelector('.error-kic-player').style.display = 'block';
                isValid = false;
            } else {
                document.querySelector('.error-kic-player').style.display = 'none';
            }

            if (!regexRating.test(refGoalkeeperValue)) {
                document.querySelector('.error-ref-player').style.display = 'block';
                isValid = false;
            } else {
                document.querySelector('.error-ref-player').style.display = 'none';
            }

            if (!regexRating.test(spdGoalkeeperValue)) {
                document.querySelector('.error-spd-player').style.display = 'block';
                isValid = false;
            } else {
                document.querySelector('.error-spd-player').style.display = 'none';
            }

            if (!regexRating.test(posGoalkeeperValue)) {
                document.querySelector('.error-pos-player').style.display = 'block';
                isValid = false;
            } else {
                document.querySelector('.error-pos-player').style.display = 'none';
            }
            if (isValid){
            addGoalkeeperFunction(nomPlayerValue, photoPlayerValue,logoPlayerValue,flagPlayerValue,nationalityPlayerValue, liguePlayerValue,ratingPlayerValue,positionPlayerValue,divGoalkeeperValue,hanGoalkeeperValue,kicGoalkeeperValue,refGoalkeeperValue,spdGoalkeeperValue,posGoalkeeperValue);
            alert('Le goalkeeper ' + nomPlayerValue + ' a été ajouté !');
            document.getElementById("player-formulaire").reset();
         }
        }
        else{
            
            let pacPlayerValue = pacPlayer.value;
            let shoPlayerValue = shoPlayer.value;
            let pasPlayerValue = pasPlayer.value;
            let driPlayerValue = driPlayer.value;
            let defPlayerValue = defPlayer.value;
            let phyPlayerValue = phyPlayer.value;
            var regexRating = /^[1-9][0-9]?$|^99$/;
            var isValid = true;

            if (!regexRating.test(pacPlayerValue)) {
                document.querySelector('.error-pac-player').style.display = 'block';
                isValid = false;
            } else {
                document.querySelector('.error-pac-player').style.display = 'none';
            }

            if (!regexRating.test(shoPlayerValue)) {
                document.querySelector('.error-sho-player').style.display = 'block';
                isValid = false;
            } else {
                document.querySelector('.error-sho-player').style.display = 'none';
            }

            if (!regexRating.test(pasPlayerValue)) {
                document.querySelector('.error-pas-player').style.display = 'block';
                isValid = false;
            } else {
                document.querySelector('.error-pas-player').style.display = 'none';
            }

            if (!regexRating.test(driPlayerValue)) {
                document.querySelector('.error-dri-player').style.display = 'block';
                isValid = false;
            } else {
                document.querySelector('.error-dri-player').style.display = 'none';
            }

            if (!regexRating.test(defPlayerValue)) {
                document.querySelector('.error-def-player').style.display = 'block';
                isValid = false;
            } else {
                document.querySelector('.error-def-player').style.display = 'none';
            }

            if (!regexRating.test(phyPlayerValue)) {
                document.querySelector('.error-phy-player').style.display = 'block';
                isValid = false;
            } else {
                document.querySelector('.error-phy-player').style.display = 'none';
            }

            if (isValid){
                addPlayerFunction(nomPlayerValue, photoPlayerValue,logoPlayerValue,flagPlayerValue,nationalityPlayerValue, liguePlayerValue,ratingPlayerValue,positionPlayerValue,pacPlayerValue,shoPlayerValue,pasPlayerValue,driPlayerValue,defPlayerValue,phyPlayerValue);
                alert('Le joueur ' + nomPlayerValue + ' a été ajouté !');
                document.getElementById("player-formulaire").reset();
            }

        }
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
    localStorage.setItem("MyStorage", JSON.stringify(arrPlayers))
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
    localStorage.setItem("MyStorage", JSON.stringify(arrPlayers))
    displayPlayers();
}




// localStorage.clear();

// affichage des players

function displayPlayers(){

    // initialisation des div du stade
    let leftWing = document.querySelector('.LW')
    leftWing.innerHTML = ''
    let goalKeeperDiv = document.querySelector('.GL');
    goalKeeperDiv.innerHTML = ''
    let rightWing = document.querySelector('.RW');
    rightWing.innerHTML = ''
    let striker = document.querySelector('.ST')
    striker.innerHTML = ''
    let rightBack = document.querySelector('.RB')
    rightBack.innerHTML=''
    let leftBack = document.querySelector('.LB')
    leftBack.innerHTML=''
    let centerBack1 = document.querySelector('.CB1')
    centerBack1.innerHTML = ''
    let centerBack2 = document.querySelector('.CB2')
    centerBack2.innerHTML = ''
    let centerMiddle1 = document.querySelector('.CM1')
    centerMiddle1.innerHTML = ''
    let centerMiddle2 = document.querySelector('.CM2')
    centerMiddle2.innerHTML = ''
    let centerMiddle3 = document.querySelector('.CM3')
    centerMiddle3.innerHTML = ''


    // inititalisation du tableau et div de changement
    let changements = []
    let changement = document.querySelectorAll('.changement')
    changements = Array.from(changement)
    changements.reverse()
    changements.forEach(change=>{
        change.innerHTML='';
    })
    

    arrPlayers.forEach( player=>{
        
        if (player.positionPlayerValue == 'LW' ){
            let newCard1 = document.createElement('div')
            newCard1.innerHTML = ''
            newCard1.classList.add('card-content')
            
            if( leftWing.innerHTML.trim() !== ''  ){
                
                changements.forEach(changement0 => {

                    if(changement0.innerHTML == ''){

                            newCard1.innerHTML=`
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
                            changement0.appendChild(newCard1)
                    }
                })
                
            }
            else{
                let newCardPlayerStade = document.createElement('div')
                newCardPlayerStade.classList.add('card-GL')
                newCardPlayerStade.innerHTML=`
                
                <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
            let newCard = document.createElement('div')
                newCard.innerHTML=''
                newCard.classList.add('card-content')
            if( goalKeeperDiv.innerHTML.trim() !== '' ){
                
                changements.forEach(changement0 => {
                    if(changement0.innerHTML == ''){
    
                            newCard.innerHTML=`
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
                let newCardPlayerStade = document.createElement('div')
                newCardPlayerStade.classList.add('card-GL')
                newCardPlayerStade.innerHTML=`
                <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
            let newCard2 = document.createElement('div')
                newCard2.innerHTML=''
                newCard2.classList.add('card-content')
            if( rightWing.innerHTML.trim() !== ''  ){
                
                
                changements.forEach(changement0 => {

                    if(changement0.innerHTML == ''){

                            newCard2.innerHTML=`
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
                            changement0.appendChild(newCard2)
                    }
                })
                
            }
            else{
                let newCardPlayerStade = document.createElement('div')
                newCardPlayerStade.classList.add('card-GL')
                newCardPlayerStade.innerHTML=`
                <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
        else if (player.positionPlayerValue == 'ST' ){
            let newCard2 = document.createElement('div')
                newCard2.innerHTML=''
                newCard2.classList.add('card-content')
            if( striker.innerHTML.trim() !== ''  ){
                
                
                changements.forEach(changement0 => {

                    if(changement0.innerHTML == ''){

                            newCard2.innerHTML=`
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
                            changement0.appendChild(newCard2)
                    }
                })
                
            }
            else{
                let newCardPlayerStade = document.createElement('div')
                newCardPlayerStade.classList.add('card-GL')
                newCardPlayerStade.innerHTML=`
                <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
                  striker.appendChild(newCardPlayerStade)
               
            }
        }
        else if (player.positionPlayerValue == 'RB' ){
            let newCard2 = document.createElement('div')
                newCard2.innerHTML=''
                newCard2.classList.add('card-content')
            if( rightBack.innerHTML.trim() !== ''  ){
                
                
                changements.forEach(changement0 => {

                    if(changement0.innerHTML == ''){

                            newCard2.innerHTML=`
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
                            changement0.appendChild(newCard2)
                    }
                })
                
            }
            else{
                let newCardPlayerStade = document.createElement('div')
                newCardPlayerStade.classList.add('card-GL')
                newCardPlayerStade.innerHTML=`
                <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
                  rightBack.appendChild(newCardPlayerStade)
               
            }
        }
        else if (player.positionPlayerValue == 'LB' ){
            let newCard2 = document.createElement('div')
                newCard2.innerHTML=''
                newCard2.classList.add('card-content')
            if( leftBack.innerHTML.trim() !== ''  ){
                
                
                changements.forEach(changement0 => {

                    if(changement0.innerHTML == ''){

                            newCard2.innerHTML=`
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
                            changement0.appendChild(newCard2)
                    }
                })
                
            }
            else{
                let newCardPlayerStade = document.createElement('div')
                newCardPlayerStade.classList.add('card-GL')
                newCardPlayerStade.innerHTML=`
                <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
                  leftBack.appendChild(newCardPlayerStade)
               
            }
        }
        else if (player.positionPlayerValue == 'CB' ){
            let newCard2 = document.createElement('div')
                newCard2.innerHTML=''
                newCard2.classList.add('card-content')
            if( centerBack1.innerHTML.trim() !== '' &&  centerBack2.innerHTML.trim() !== ''){
                
                
                changements.forEach(changement0 => {

                    if(changement0.innerHTML == ''){

                            newCard2.innerHTML=`
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
                            changement0.appendChild(newCard2)
                    }
                })
                
            }
            else{
                if(centerBack1.innerHTML.trim() !== ''){
                let newCardPlayerStade = document.createElement('div')
                newCardPlayerStade.classList.add('card-GL')
                newCardPlayerStade.innerHTML=`
                <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
                  centerBack2.appendChild(newCardPlayerStade)
                }
                else{
                    let newCardPlayerStade = document.createElement('div')
                newCardPlayerStade.classList.add('card-GL')
                newCardPlayerStade.innerHTML=`
                <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
                  centerBack1.appendChild(newCardPlayerStade)
                }

            }
        }
        else if (player.positionPlayerValue == 'CM' ){
            let newCard2 = document.createElement('div')
                newCard2.innerHTML=''
                newCard2.classList.add('card-content')
            if( centerMiddle1.innerHTML.trim() !== '' &&  centerMiddle2.innerHTML.trim() !== '' && centerMiddle3.innerHTML.trim() !== ''){
                
                
                changements.forEach(changement0 => {

                    if(changement0.innerHTML == ''){

                            newCard2.innerHTML=`
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
                                    <div class="rating-position">
                                    <div class="delete-icon" onclick="deleteCard('${player.nomPlayerValue}')">X</div>
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
                            changement0.appendChild(newCard2)
                    }
                })
                
            }
            else{
                if(centerMiddle1.innerHTML.trim() == ''){
                let newCardPlayerStade = document.createElement('div')
                newCardPlayerStade.classList.add('card-GL')
                newCardPlayerStade.innerHTML=`
                <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
                  centerMiddle1.appendChild(newCardPlayerStade)
                }
                else if(centerMiddle2.innerHTML.trim() == ''){
                    let newCardPlayerStade = document.createElement('div')
                newCardPlayerStade.classList.add('card-GL')
                newCardPlayerStade.innerHTML=`
                <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
                  centerMiddle2.appendChild(newCardPlayerStade)
                }
                else if(centerMiddle3.innerHTML.trim() == ''){
                    let newCardPlayerStade = document.createElement('div')
                newCardPlayerStade.classList.add('card-GL')
                newCardPlayerStade.innerHTML=`
                <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.nomPlayerValue}')"></i>
                <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.nomPlayerValue}')"></i>
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
                  centerMiddle3.appendChild(newCardPlayerStade)
                }

            }
        }
        
    }

)

}

function deleteCard(namePlayer) {

    arrPlayers = arrPlayers.filter(player => player.nomPlayerValue !== namePlayer)
    localStorage.setItem("MyStorage", JSON.stringify(arrPlayers))
    displayPlayers();


}
function editCard(namePlayer){
    addPlayer.style.display = 'none'
    EditPlayer.style.display = 'block'

    let playerToEdit = arrPlayers.find(player => player.nomPlayerValue === namePlayer);
    nomPlayer.value = playerToEdit.nomPlayerValue;
    photoPlayer.value = playerToEdit.photoPlayerValue;
    logoPlayer.value = playerToEdit.logoPlayerValue;
    flagPlayer.value = playerToEdit.flagPlayerValue;
    nationalityPlayer.value = playerToEdit.nationalityPlayerValue;
    liguePlayer.value = playerToEdit.liguePlayerValue;
    ratingPlayer.value = playerToEdit.ratingPlayerValue;
    positionPlayer.value = playerToEdit.positionPlayerValue;
    

    if (playerToEdit.positionPlayerValue === 'GK'){
        goalkeeperPlayerSection.style.display = 'block';
        normalPlayerSection.style.display = 'none';
        divGoalkeeper.value = playerToEdit.divGoalkeeperValue;
        hanGoalkeeper.value = playerToEdit.hanGoalkeeperValue;
        kicGoalkeeper.value = playerToEdit.kicGoalkeeperValue;
        refGoalkeeper.value = playerToEdit.refGoalkeeperValue;
        spdGoalkeeper.value = playerToEdit.spdGoalkeeperValue;
        posGoalkeeper.value = playerToEdit.posGoalkeeperValue;

    }
    else{
        pacPlayer.value = playerToEdit.pacPlayerValue;
        shoPlayer.value = playerToEdit.shoPlayerValue;
        pasPlayer.value = playerToEdit.pasPlayerValue;
        driPlayer.value = playerToEdit.driPlayerValue;
        defPlayer.value = playerToEdit.defPlayerValue;
        phyPlayer.value = playerToEdit.phyPlayerValue;
    }


}





