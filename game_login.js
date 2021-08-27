function addUser(){
    Number1_name = document.getElementById("Number1_name_input").value;
    Number2_name = document.getElementById("Number2_name_input").value;
    localStorage.getItem("Number1_name" , Number1_name); + localStorage.getItem("Number2_name" , Number2_name);
    window.location="game_page.html";
}