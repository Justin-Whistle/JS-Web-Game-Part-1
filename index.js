function newImage(imageSrc, imageLeft, imageBottom) {
    let newImg = document.createElement('img')
    newImg.src = imageSrc
    newImg.style.position = 'fixed'
    newImg.style.left = imageLeft
    newImg.style.bottom = imageBottom
    document.body.append(newImg)
    return newImg
}

newImage('assets/green-character.gif', '100px', '100px'); //  Green character
newImage('assets/pine-tree.png', '450px', '200px');  //  Pine tree
newImage('assets/tree.png', '200px', '300px');  //  Tree
newImage('assets/pillar.png', '350px', '100px');  //  Pillar
newImage('assets/crate.png', '150px', '200px');  //  Crate
newImage('assets/well.png', '500px', '425px');  //  Well

function newItem (imageSrc, imageLeft, imageBottom) {
    let item = newImage(imageSrc, imageLeft, imageBottom)

    item.addEventListener('dblclick', function() {
        item.remove()
    })
}

newItem('assets/sword.png', '500px', '405px') //  Sword
newItem('assets/sheild.png','165px', '185px')  //  Sheild
newItem('assets/staff.png','600px', '100px')  //  Staff
