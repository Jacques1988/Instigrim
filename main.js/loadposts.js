

// Accounts 
let accounts = [
    {
        'name': 'Captain Jacques van Luyck',
        'image': 'img/CPstred.PNG',
        'description': 'Gassi mit dem Haustierchen',
        'postcontent': 'img/boot.JPG',
        'location': 'ist irgendwo auf der Welt'
    },

    {
        'name': 'Son Goku',
        'image': 'img/songoku.PNG',
        'description': 'Den besten linken Jab den ich je kassierte',
        'postcontent': 'img/straightleft.JPG',
        'location': 'ist auf Planet Jenseits'

    },

    {
        'name': 'Robbie Williams',
        'image': 'img/robbe-animal-water-mammal-966577.JPG',
        'description': 'Schöne warme Badewanne',
        'postcontent': 'img/swim.JPG',
        'location': 'in der Arktis'
    }
]

// load posts
function loadposts() {

    for (let i = 0; i < accounts.length; i++) {
        const account = accounts[i];


        document.getElementById('maincontent').innerHTML += `
    <div id="postcontent" class="postcontent">
    <div class="postheader">
    <div class="accountheaderimg"><img class="suggimg" src=${account['image']}>
        <p>${account['name']}</p>
    </div>
    <p class="locationtext" >${account['location']}</p>
    <div class="accountmenu"><span></span><span></span><span></span></div>
</div>
<div class="postimg"><img class="postpic" src="${account['postcontent']}"> </div>
<div class="buttonsection">
    <div class="socialbtn">
        <a href="#"><img id="likeheart-${i}" class="likeimg" onclick="like(${i})" src="img/heartempty.svg" width="35" height="35"></a>
        <a href="#"><img src="img/paper.svg" width="35" height="35"></a>
        <a href="#"><img src="img/comment.svg" width="35" height="35"></a>
    </div>
    <div><a href="#"><img src="img/notice.svg" width="35" height="35"></a></div>
</div>

<div class="likesection">
    <div><img id="youlikepic-${i}" class="likepic" src="img/songoku.PNG" width="25" height="25"></div>
    <div id="youlike-${i}" class="liketext">793 Superhelden gefällt das</div>
</div>

<div class="postcomment">${account['name']}: ${account['description']}</div>
<div id="comment-${i}" class="comment"></div>

<div class="textfieldandpost">
    <input id="writecomment-${i}" class="commentfield" placeholder="Kommentar hinzufügen . . . " type="text">
    <button id="commentbtn" class="commentbtn" onclick="addcomment(${i})">Posten</button>
</div>
</div>`;
    }
}

// Frage: Warum scrollt er wieder nach oben? Lädt er wieder die Komplette Seite? 

//Press on the like heart, changes heart picture
function like(i){
    document.getElementById(`likeheart-${i}`).src = "img/heartfull.svg"; 
    document.getElementById(`youlike-${i}`).innerHTML = "Dir und 793 anderen Superhelden gefällt das";
}

//press on post button adds comment
function addcomment(i) {
    let comment = document.getElementById(`writecomment-${i}`).value;
    document.getElementById(`comment-${i}`).innerHTML += `<div class="postedcomment">Captain Jacques van Luyck:${comment}</div>`;
} 