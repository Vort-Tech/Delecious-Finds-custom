// Register and Login Local Storage Script ----------------------
function Register(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    localStorage.setItem("username",user);
    localStorage.setItem("password",pass);
}

function Login(){
    var myuser = document.getElementById("login_email").value
    var mypass = document.getElementById("login_pass").value

    var localuser = localStorage.getItem("username");   
    var localpass = localStorage.getItem("password");
    
    if(localuser == myuser && localpass == mypass){
        alert("Login Succefully")
    }
    else(
        alert("Login Failed")
    )
}

// Owl Carousel Script--------------------------------
const nextIcon = '<i class="fa-solid fa-angle-right"></i>'
const prevIcon = '<i class="fa-solid fa-angle-left"></i>'

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})