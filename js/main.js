function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }        
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

function saveData() {
  var array = ['nombre', 'apellido', 'numero', 'direcion', 'ocupacion'];
  array.forEach(element => {
    var value = document.getElementById(element).value;
    window.localStorage.setItem(element, value);
  });
}



function readData() {
  //Read Data from localStorage

}
