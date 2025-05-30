// changement du form si la position est goalkeeper
let positionSelect = document.querySelector('.option-position');
let normalPlayerSection = document.querySelector('.normal-player');
let goalkeeperPlayerSection = document.querySelector('.goalkeeper-player');

let arrPlayers = JSON.parse(localStorage.getItem("MyStorage")) || [];
displayPlayers();

// display les données de goalkeeper s'il est choisit
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

// fonction d'edit des joueurs
EditPlayer.addEventListener('click', function() {
    let playerForm = EditPlayer.getAttribute('data-player-id');
    let playerToEdit = arrPlayers.find(player => player.id == parseInt(playerForm));

    if (playerToEdit) {
        let isValid = true;

        // Validation des champs communs (nom, photo, logo, etc.)
        var regexNom = /^[A-Za-zÀ-ÿ\s]{3,25}$/;
        var regexURL = /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/;
        var regexLigue = /^[A-Za-zÀ-ÿ0-9\s\-]{2,20}$/;
        var regexRating = /^[1-9][0-9]?$/;

        // Utilisation de la fonction validateField pour valider les champs
        isValid &= validateField(nomPlayer.value, regexNom, document.getElementById('error-message'));
        isValid &= validateField(photoPlayer.value, regexURL, document.querySelector('.error-photo-player'));
        isValid &= validateField(logoPlayer.value, regexURL, document.querySelector('.error-logo-player'));
        isValid &= validateField(flagPlayer.value, regexURL, document.querySelector('.error-flag-player'));
        isValid &= validateField(nationalityPlayer.value, regexNom, document.querySelector('.error-nationality-player'));
        isValid &= validateField(liguePlayer.value, regexLigue, document.querySelector('.error-ligue-player'));
        isValid &= validateField(ratingPlayer.value, regexRating, document.querySelector('.error-rating-player'));

        // Validation des champs spécifiques au gardien de but
        if (positionPlayer.value === 'GK') {
            isValid &= validateField(divGoalkeeper.value, regexRating, document.querySelector('.error-div-player'));
            isValid &= validateField(hanGoalkeeper.value, regexRating, document.querySelector('.error-han-player'));
            isValid &= validateField(kicGoalkeeper.value, regexRating, document.querySelector('.error-kic-player'));
            isValid &= validateField(refGoalkeeper.value, regexRating, document.querySelector('.error-ref-player'));
            isValid &= validateField(spdGoalkeeper.value, regexRating, document.querySelector('.error-spd-player'));
            isValid &= validateField(posGoalkeeper.value, regexRating, document.querySelector('.error-pos-player'));
        } else { 
            isValid &= validateField(pacPlayer.value, regexRating, document.querySelector('.error-pac-player'));
            isValid &= validateField(shoPlayer.value, regexRating, document.querySelector('.error-sho-player'));
            isValid &= validateField(pasPlayer.value, regexRating, document.querySelector('.error-pas-player'));
            isValid &= validateField(driPlayer.value, regexRating, document.querySelector('.error-dri-player'));
            isValid &= validateField(defPlayer.value, regexRating, document.querySelector('.error-def-player'));
            isValid &= validateField(phyPlayer.value, regexRating, document.querySelector('.error-phy-player'));
        }

        // Si toutes les validations sont réussies, on met à jour les informations du joueur
        if (isValid) {
            if (positionPlayer.value === 'GK') {
                playerToEdit.nomPlayerValue = nomPlayer.value;
                playerToEdit.photoPlayerValue = photoPlayer.value;
                playerToEdit.logoPlayerValue = logoPlayer.value;
                playerToEdit.flagPlayerValue = flagPlayer.value;
                playerToEdit.nationalityPlayerValue = nationalityPlayer.value;
                playerToEdit.liguePlayerValue = liguePlayer.value;
                playerToEdit.ratingPlayerValue = ratingPlayer.value;
                playerToEdit.positionPlayerValue = positionPlayer.value;
                playerToEdit.divGoalkeeperValue = divGoalkeeper.value;
                playerToEdit.hanGoalkeeperValue = hanGoalkeeper.value;
                playerToEdit.kicGoalkeeperValue = kicGoalkeeper.value;
                playerToEdit.refGoalkeeperValue = refGoalkeeper.value;
                playerToEdit.spdGoalkeeperValue = spdGoalkeeper.value;
                playerToEdit.posGoalkeeperValue = posGoalkeeper.value;
            } else {
                playerToEdit.nomPlayerValue = nomPlayer.value;
                playerToEdit.photoPlayerValue = photoPlayer.value;
                playerToEdit.logoPlayerValue = logoPlayer.value;
                playerToEdit.flagPlayerValue = flagPlayer.value;
                playerToEdit.nationalityPlayerValue = nationalityPlayer.value;
                playerToEdit.liguePlayerValue = liguePlayer.value;
                playerToEdit.ratingPlayerValue = ratingPlayer.value;
                playerToEdit.positionPlayerValue = positionPlayer.value;
                playerToEdit.pacPlayerValue = pacPlayer.value;
                playerToEdit.shoPlayerValue = shoPlayer.value;
                playerToEdit.pasPlayerValue = pasPlayer.value;
                playerToEdit.driPlayerValue = driPlayer.value;
                playerToEdit.defPlayerValue = defPlayer.value;
                playerToEdit.phyPlayerValue = phyPlayer.value;
            }

            // Sauvegarde dans le localStorage
            localStorage.setItem("MyStorage", JSON.stringify(arrPlayers));

            // Actualiser l'affichage des joueurs
            displayPlayers();
            alert('Player updated!');

            // Réinitialisation du formulaire et des boutons
            addPlayer.style.display = 'block';
            EditPlayer.style.display = 'none';
            document.getElementById("player-formulaire").reset();
        }
    } else {
        console.log('Player not found!');
    }
});


// focntion de validation des champs
function validateField(value, regex, errorElement) {
    if (!regex.test(value)) {
        errorElement.style.display = 'block';
        return false;
    } else {
        errorElement.style.display = 'none';
        return true;
    }
}


// fonction d'ajout des joueurs
addPlayer.addEventListener('click', function() {
    let changements = Array.from(document.querySelectorAll('.changement')).reverse();

    if (changements[0].innerHTML !== '') {
        alert('Changement complet !');
        document.getElementById("player-formulaire").reset();
    } 
    else {
        let nomPlayerValue = nomPlayer.value;
        let photoPlayerValue = photoPlayer.value;
        let nationalityPlayerValue = nationalityPlayer.value;
        let liguePlayerValue = liguePlayer.value;
        let ratingPlayerValue = ratingPlayer.value;
        let positionPlayerValue = positionPlayer.value;
        let logoPlayerValue = logoPlayer.value;
        let flagPlayerValue = flagPlayer.value;

        var regexNom = /^[A-Za-zÀ-ÿ\s]{3,25}$/;
        var regexURL = /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/; 
        var regexLigue = /^[A-Za-zÀ-ÿ0-9\s\-]{2,20}$/; 
        var regexRating = /^[1-9][0-9]?$/;

        var isValid = true;

        // Validation des champs
        isValid &= validateField(nomPlayerValue, regexNom, document.getElementById('error-message'));
        isValid &= validateField(photoPlayerValue, regexURL, document.querySelector('.error-photo-player'));
        isValid &= validateField(logoPlayerValue, regexURL, document.querySelector('.error-logo-player'));
        isValid &= validateField(flagPlayerValue, regexURL, document.querySelector('.error-flag-player'));
        isValid &= validateField(nationalityPlayerValue, regexNom, document.querySelector('.error-nationality-player'));
        isValid &= validateField(liguePlayerValue, regexLigue, document.querySelector('.error-ligue-player'));
        isValid &= validateField(ratingPlayerValue, regexRating, document.querySelector('.error-rating-player'));

        if (isValid) {
            if (positionPlayerValue == 'GK') {
                let divGoalkeeperValue = divGoalkeeper.value;
                let hanGoalkeeperValue = hanGoalkeeper.value;
                let kicGoalkeeperValue = kicGoalkeeper.value;
                let refGoalkeeperValue = refGoalkeeper.value;
                let spdGoalkeeperValue = spdGoalkeeper.value;
                let posGoalkeeperValue = posGoalkeeper.value;

                var regexRating = /^[1-9][0-9]?$|^99$/;
                var isValidGK = true;

                // Validation des champs pour les goalkeepers
                isValidGK &= validateField(divGoalkeeperValue, regexRating, document.querySelector('.error-div-player'));
                isValidGK &= validateField(hanGoalkeeperValue, regexRating, document.querySelector('.error-han-player'));
                isValidGK &= validateField(kicGoalkeeperValue, regexRating, document.querySelector('.error-kic-player'));
                isValidGK &= validateField(refGoalkeeperValue, regexRating, document.querySelector('.error-ref-player'));
                isValidGK &= validateField(spdGoalkeeperValue, regexRating, document.querySelector('.error-spd-player'));
                isValidGK &= validateField(posGoalkeeperValue, regexRating, document.querySelector('.error-pos-player'));

                if (isValidGK) {
                    addGoalkeeperFunction(nomPlayerValue, photoPlayerValue, logoPlayerValue, flagPlayerValue, nationalityPlayerValue, liguePlayerValue, ratingPlayerValue, positionPlayerValue, divGoalkeeperValue, hanGoalkeeperValue, kicGoalkeeperValue, refGoalkeeperValue, spdGoalkeeperValue, posGoalkeeperValue);
                    alert('Le goalkeeper ' + nomPlayerValue + ' a été ajouté !');
                    document.getElementById("player-formulaire").reset();
                }

            } 
            else {
                let pacPlayerValue = pacPlayer.value;
                let shoPlayerValue = shoPlayer.value;
                let pasPlayerValue = pasPlayer.value;
                let driPlayerValue = driPlayer.value;
                let defPlayerValue = defPlayer.value;
                let phyPlayerValue = phyPlayer.value;

                var regexRating = /^[1-9][0-9]?$|^99$/;
                var isValidPlayer = true;

                isValidPlayer &= validateField(pacPlayerValue, regexRating, document.querySelector('.error-pac-player'));
                isValidPlayer &= validateField(shoPlayerValue, regexRating, document.querySelector('.error-sho-player'));
                isValidPlayer &= validateField(pasPlayerValue, regexRating, document.querySelector('.error-pas-player'));
                isValidPlayer &= validateField(driPlayerValue, regexRating, document.querySelector('.error-dri-player'));
                isValidPlayer &= validateField(defPlayerValue, regexRating, document.querySelector('.error-def-player'));
                isValidPlayer &= validateField(phyPlayerValue, regexRating, document.querySelector('.error-phy-player'));

                if (isValidPlayer) {
                    addPlayerFunction(nomPlayerValue, photoPlayerValue, logoPlayerValue, flagPlayerValue, nationalityPlayerValue, liguePlayerValue, ratingPlayerValue, positionPlayerValue, pacPlayerValue, shoPlayerValue, pasPlayerValue, driPlayerValue, defPlayerValue, phyPlayerValue);
                    alert('Le joueur ' + nomPlayerValue + ' a été ajouté !');
                    document.getElementById("player-formulaire").reset();
                }
            }
        }
    }
});


function addGoalkeeperFunction(nomPlayerValue, photoPlayerValue,logoPlayerValue,flagPlayerValue,nationalityPlayerValue, liguePlayerValue,ratingPlayerValue,positionPlayerValue,divGoalkeeperValue,hanGoalkeeperValue,kicGoalkeeperValue,refGoalkeeperValue,spdGoalkeeperValue,posGoalkeeperValue){
    let player = {
        id: Date.now().toString(),
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
    arrPlayers.push(player)
    localStorage.setItem("MyStorage", JSON.stringify(arrPlayers))
    displayPlayers();
    
}

function addPlayerFunction(nomPlayerValue, photoPlayerValue,logoPlayerValue,flagPlayerValue,nationalityPlayerValue, liguePlayerValue,ratingPlayerValue,positionPlayerValue,pacPlayerValue,shoPlayerValue,pasPlayerValue,driPlayerValue,defPlayerValue,phyPlayerValue){
    let player = {
        id: Date.now().toString(),
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
    // console.log(arrPlayers);
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

                    if(changement0.innerHTML === ''){
                    changement0.classList.add('LW-pop')

                            newCard1.innerHTML=`
                            
                            <div class="id-none">${player.id}</div>
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>

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
                <i class="fa-solid fa-rotate" onclick="openPopup('${player.id}','${player.positionPlayerValue}')"></i>
                <div class="id-none">${player.id}</div>
                <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                            changement0.classList.add('GK-pop')
                            
                        
                            newCard.innerHTML=`
                            
                            <div class="id-none">${player.id}</div>
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                <i class="fa-solid fa-rotate" onclick="openPopup('${player.id}','${player.positionPlayerValue}')"></i>
                            <div class="id-none">${player.id}</div>
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                        changement0.classList.add('RW-pop')
                            newCard2.innerHTML=`
                            <div class="id-none">${player.id}</div>
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                <i class="fa-solid fa-rotate" onclick="openPopup('${player.id}','${player.positionPlayerValue}')"></i>
                <div class="id-none">${player.id}</div>
                <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                        changement0.classList.add('ST-pop')

                            newCard2.innerHTML=`
                            <div class="id-none">${player.id}</div>
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                <i class="fa-solid fa-rotate" onclick="openPopup('${player.id}','${player.positionPlayerValue}')"></i>
                <div class="id-none">${player.id}</div>
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                        changement0.classList.add('RB-pop')

                            newCard2.innerHTML=`
                            <div class="id-none">${player.id}</div>
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                <i class="fa-solid fa-rotate" onclick="openPopup('${player.id}','${player.positionPlayerValue}')"></i>

                <div class="id-none">${player.id}</div>
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                        changement0.classList.add('LB-pop')

                            newCard2.innerHTML=`
                            <div class="id-none " id ="${player.id}">${player.id}</div>
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                <i class="fa-solid fa-rotate" onclick="openPopup('${player.id}','${player.positionPlayerValue}')"></i>
                    <div class="id-none" >${player.id}</div>
                        <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                        <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                        changement0.classList.add('CB-pop')

                            newCard2.innerHTML=`
                            <div class="id-none" >${player.id}</div>
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                <i class="fa-solid fa-rotate" onclick="openPopup('${player.id}','${player.positionPlayerValue}')"></i>
                <div class="id-none">${player.id}</div>
                <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                <i class="fa-solid fa-rotate" onclick="openPopup('${player.id}','${player.positionPlayerValue}')"></i>
                <div class="id-none">${player.id}</div>
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                        changement0.classList.add('CM-pop')

                            newCard2.innerHTML=`
                            <div class="id-none">${player.id}</div>
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                if(centerMiddle1.innerHTML.trim() == ''){
                let newCardPlayerStade = document.createElement('div')
                newCardPlayerStade.classList.add('card-GL')
                newCardPlayerStade.innerHTML=`
                <i class="fa-solid fa-rotate" onclick="openPopup('${player.id}','${player.positionPlayerValue}')"></i>
                        <div class="id-none">${player.id}</div>
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                <i class="fa-solid fa-rotate" onclick="openPopup('${player.id}','${player.positionPlayerValue}')"></i>
                    <div class="id-none">${player.id}</div>
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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
                    <i class="fa-solid fa-rotate" onclick="openPopup('${player.id}','${player.positionPlayerValue}')"></i>
                    <div class="id-none">${player.id}</div>
                            <i class="fa-regular fa-trash delete-icon" onclick="deleteCard('${player.id}')"></i>
                            <i class="fa-solid fa-pen-to-square delete-icon-modif" onclick="editCard('${player.id}')"></i>
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

// suppression des joueurs
function deleteCard(idPlayer) {
    const isConfirmed = window.confirm("Are you sure you want to delete this player?");

    // If the user confirms 
    if (isConfirmed) {
        arrPlayers = arrPlayers.filter(player => player.id !== idPlayer);

        localStorage.setItem("MyStorage", JSON.stringify(arrPlayers));
        displayPlayers();
    } 
    else 
    {
        return;
    }
}


// affichage des informations de joueur a éditer dans le form
function editCard(idPlayer){
    
    addPlayer.style.display = 'none'
    EditPlayer.style.display = 'block'
    EditPlayer.setAttribute('data-player-id', idPlayer);
    // console.log(idPlayer);
    
    let playerToEdit = arrPlayers.find(player => player.id === idPlayer);
    
    
    nomPlayer.value = playerToEdit.nomPlayerValue,
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

// Fonction d'affichage des joueurs en changement du meme position
function openPopup(playerId, playerPosition) {
    document.getElementById("popup-changement").style.display = "block";
    let cardChanges = document.querySelector('.popup-cards')
    let changement = document.querySelectorAll('.changement')
    let changements = Array.from(changement)
    changements.reverse()
    changements.forEach(change=>{
        
        if(change.innerHTML !== ''){
            // recuperation de l'id de joueur en changement
            let idchangeRating = change.querySelector('.player-position').textContent

               console.log(change);
            if(playerPosition == 'LW'){

                if (idchangeRating == 'LW') {
                
                    let idchangePlayer = change.querySelector('.id-none').textContent
                    
                    
                    let newCard1 = document.createElement('div')
                    newCard1.innerHTML = change.innerHTML
                    newCard1.classList.add('card-popup')

                    let playerPositionDiv = newCard1.querySelector('.rating-position');
                    playerPositionDiv.style.left = '0';

                    let playerDivcontent = newCard1.querySelector('.card-content');
                    playerDivcontent.style.marginTop = '65px';
                    // Create a button element
                    let button = document.createElement('button');
                    
                    button.classList.add('card-button')  
                    button.innerHTML='change'
                    button.onclick = function() {
                        swapPlayers(idchangePlayer, playerId);  
                    };
                    
                    newCard1.appendChild(button);
                    cardChanges.appendChild(newCard1);
                    
                }
                
            }
            else if(playerPosition == 'GK'){
                if (idchangeRating == 'GK' ) {
                
                    let idchangePlayer = change.querySelector('.id-none').textContent
                    
                    
                    let newCard1 = document.createElement('div')
                    newCard1.innerHTML = change.innerHTML
                    newCard1.classList.add('card-popup')

                    let playerPositionDiv = newCard1.querySelector('.rating-position');
                    playerPositionDiv.style.left = '0';

                    let playerDivcontent = newCard1.querySelector('.card-content');
                    playerDivcontent.style.marginTop = '65px';
                    // Create a button element
                    let button = document.createElement('button');
                    
                    button.classList.add('card-button')  
                    button.innerHTML='change'
                    button.onclick = function() {
                        swapPlayers(idchangePlayer, playerId);  
                    };
                    
                    newCard1.appendChild(button);
                    cardChanges.appendChild(newCard1);
                }
            }
            else if(playerPosition == 'RB'){
                if (idchangeRating == 'RB' ) {
                
                    let idchangePlayer = change.querySelector('.id-none').textContent
                    
                    
                    let newCard1 = document.createElement('div')
                    newCard1.innerHTML = change.innerHTML
                    newCard1.classList.add('card-popup')

                    let playerPositionDiv = newCard1.querySelector('.rating-position');
                    playerPositionDiv.style.left = '0';

                    let playerDivcontent = newCard1.querySelector('.card-content');
                    playerDivcontent.style.marginTop = '65px';
                    // Create a button element
                    let button = document.createElement('button');
                    
                    button.classList.add('card-button')  
                    button.innerHTML='change'
                    button.onclick = function() {
                        swapPlayers(idchangePlayer, playerId);  
                    };
                    
                    newCard1.appendChild(button);
                    cardChanges.appendChild(newCard1);
                }
            }
            else if(playerPosition == 'LB'){
                if (idchangeRating == 'LB') {
                
                    let idchangePlayer = change.querySelector('.id-none').textContent
                    
                    
                    let newCard1 = document.createElement('div')
                    newCard1.innerHTML = change.innerHTML
                    newCard1.classList.add('card-popup')

                    let playerPositionDiv = newCard1.querySelector('.rating-position');
                    playerPositionDiv.style.left = '0';

                    let playerDivcontent = newCard1.querySelector('.card-content');
                    playerDivcontent.style.marginTop = '65px';
                    // Create a button element
                    let button = document.createElement('button');
                    
                    button.classList.add('card-button')  
                    button.innerHTML='change'
                    button.onclick = function() {
                        swapPlayers(idchangePlayer, playerId);  
                    };
                    
                    newCard1.appendChild(button);
                    cardChanges.appendChild(newCard1);
                }
            }
            else if(playerPosition == 'RW'){
                if (idchangeRating == 'RW' ) {
                
                    let idchangePlayer = change.querySelector('.id-none').textContent
                    
                    
                    let newCard1 = document.createElement('div')
                    newCard1.innerHTML = change.innerHTML
                    newCard1.classList.add('card-popup')

                    let playerPositionDiv = newCard1.querySelector('.rating-position');
                    playerPositionDiv.style.left = '0';

                    let playerDivcontent = newCard1.querySelector('.card-content');
                    playerDivcontent.style.marginTop = '65px';
                    // Create a button element
                    let button = document.createElement('button');
                    
                    button.classList.add('card-button')  
                    button.innerHTML='change'
                    button.onclick = function() {
                        swapPlayers(idchangePlayer, playerId);  
                    };
                    
                    newCard1.appendChild(button);
                    cardChanges.appendChild(newCard1);
                }
            }
            else if(playerPosition == 'ST'){
                if (idchangeRating == 'ST' ) {
                
                    let idchangePlayer = change.querySelector('.id-none').textContent
                    
                    
                    let newCard1 = document.createElement('div')
                    newCard1.innerHTML = change.innerHTML
                    newCard1.classList.add('card-popup')

                    let playerPositionDiv = newCard1.querySelector('.rating-position');
                    playerPositionDiv.style.left = '0';

                    let playerDivcontent = newCard1.querySelector('.card-content');
                    playerDivcontent.style.marginTop = '65px';
                    // Create a button element
                    let button = document.createElement('button');
                    
                    button.classList.add('card-button')  
                    button.innerHTML='change'
                    button.onclick = function() {
                        swapPlayers(idchangePlayer, playerId);  
                    };
                    
                    newCard1.appendChild(button);
                    cardChanges.appendChild(newCard1);
                }
            }
            else if(playerPosition == 'CB'){
                if (idchangeRating == 'CB' ) {
                
                    let idchangePlayer = change.querySelector('.id-none').textContent
                    
                    
                    let newCard1 = document.createElement('div')
                    newCard1.innerHTML = change.innerHTML
                    newCard1.classList.add('card-popup')

                    let playerPositionDiv = newCard1.querySelector('.rating-position');
                    playerPositionDiv.style.left = '0';

                    let playerDivcontent = newCard1.querySelector('.card-content');
                    playerDivcontent.style.marginTop = '65px';
                    // Create a button element
                    let button = document.createElement('button');
                    
                    button.classList.add('card-button')  
                    button.innerHTML='change'
                    button.onclick = function() {
                        swapPlayers(idchangePlayer, playerId);  
                    };
                    
                    newCard1.appendChild(button);
                    cardChanges.appendChild(newCard1);
                }
            }
            else if(playerPosition == 'CM'){
                if (idchangeRating == 'CM') {
                
                    let idchangePlayer = change.querySelector('.id-none').textContent
                    
                    
                    let newCard1 = document.createElement('div')
                    newCard1.innerHTML = change.innerHTML
                    newCard1.classList.add('card-popup')

                    let playerPositionDiv = newCard1.querySelector('.rating-position');
                    playerPositionDiv.style.left = '0';

                    let playerDivcontent = newCard1.querySelector('.card-content');
                    playerDivcontent.style.marginTop = '65px';
                    // Create a button element
                    let button = document.createElement('button');
                    
                    button.classList.add('card-button')  
                    button.innerHTML='change'
                    button.onclick = function() {
                        swapPlayers(idchangePlayer, playerId);  
                    };
                    
                    newCard1.appendChild(button);
                    cardChanges.appendChild(newCard1);
                }
            }

            
        }


        
    })

}

// fonction de swap des joueurs
function swapPlayers(idchangePlayer,playerId) {

    let playerToEdit = arrPlayers.find(player => player.id == playerId);
    let playerToChange = arrPlayers.find(player => player.id == idchangePlayer);
    let tempPlayer = { ...playerToEdit}

    // change commmun inputs
    playerToEdit.id = playerToChange.id
    playerToEdit.nomPlayerValue = playerToChange.nomPlayerValue;
    playerToEdit.photoPlayerValue = playerToChange.photoPlayerValue;
    playerToEdit.ratingPlayerValue = playerToChange.ratingPlayerValue;
    playerToEdit.flagPlayerValue = playerToChange.flagPlayerValue;
    playerToEdit.logoPlayerValue = playerToChange.logoPlayerValue;
    playerToEdit.nationalityPlayerValue = playerToChange.nationalityPlayerValue;
    playerToEdit.liguePlayerValue = playerToChange.liguePlayerValue
    
    playerToChange.id = tempPlayer.id;
    playerToChange.nomPlayerValue = tempPlayer.nomPlayerValue;
    playerToChange.photoPlayerValue = tempPlayer.photoPlayerValue;
    playerToChange.ratingPlayerValue = tempPlayer.ratingPlayerValue;
    playerToChange.flagPlayerValue = tempPlayer.flagPlayerValue;
    playerToChange.logoPlayerValue = tempPlayer.logoPlayerValue;
    playerToChange.nationalityPlayerValue = tempPlayer.nationalityPlayerValue;
    playerToChange.liguePlayerValue = tempPlayer.liguePlayerValue

    if(playerToChange.positionPlayerValue == 'GK'){

        playerToEdit.divGoalkeeperValue = playerToChange.divGoalkeeperValue;
        playerToEdit.kicGoalkeeperValue = playerToChange.kicGoalkeeperValue;
        playerToEdit.refGoalkeeperValue = playerToChange.refGoalkeeperValue;
        playerToEdit.hanGoalkeeperValue = playerToChange.hanGoalkeeperValue;
        playerToEdit.posGoalkeeperValue = playerToChange.posGoalkeeperValue;
        playerToEdit.spdGoalkeeperValue = playerToChange.spdGoalkeeperValue;

        playerToChange.divGoalkeeperValue = tempPlayer.divGoalkeeperValue;
        playerToChange.kicGoalkeeperValue = tempPlayer.kicGoalkeeperValue;
        playerToChange.refGoalkeeperValue = tempPlayer.refGoalkeeperValue;
        playerToChange.hanGoalkeeperValue = tempPlayer.hanGoalkeeperValue;
        playerToChange.posGoalkeeperValue = tempPlayer.posGoalkeeperValue;
        playerToChange.spdGoalkeeperValue = tempPlayer.spdGoalkeeperValue;

    }
    else{
        playerToEdit.shoPlayerValue = playerToChange.shoPlayerValue;
        playerToEdit.pacPlayerValue = playerToChange.pacPlayerValue;
        playerToEdit.pasPlayerValue = playerToChange.pasPlayerValue;
        playerToEdit.driPlayerValue = playerToChange.driPlayerValue;
        playerToEdit.defPlayerValue = playerToChange.defPlayerValue;
        playerToEdit.phyPlayerValue = playerToChange.phyPlayerValue;

        playerToChange.shoPlayerValue = tempPlayer.shoPlayerValue;
        playerToChange.pacPlayerValue = tempPlayer.pacPlayerValue;
        playerToChange.pasPlayerValue = tempPlayer.pasPlayerValue;
        playerToChange.driPlayerValue = tempPlayer.driPlayerValue;
        playerToChange.defPlayerValue = tempPlayer.defPlayerValue;
        playerToChange.phyPlayerValue = tempPlayer.phyPlayerValue;

    }

    localStorage.setItem("MyStorage", JSON.stringify(arrPlayers));

    displayPlayers();
    closePopup();
                
                    
};

// Fonction pour fermer popup
function closePopup() {
    let cardChanges = document.querySelector('.popup-cards')
    cardChanges.innerHTML=''
    document.getElementById("popup-changement").style.display = "none";

}



