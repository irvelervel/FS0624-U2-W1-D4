const go = function () {
  // questa funzione viene lanciata alla pressione del button VIA!
  // 1) trovo l'elemento a cui devo applicare la classe "box-moving"
  //   const box = document.querySelector('.box-3')
  const box = document.getElementsByClassName('box-3')[0]
  console.log('BOX', box)
  // 2) aggiungo la classe "box-moving" all'elemento che ho appena trovato
  box.classList.toggle('box-moving')
  // il metodo "toggle" aggiunge una determinata classe CSS qual ora NON ci sia già,
  // e la toglie nel caso ci sia già
}
