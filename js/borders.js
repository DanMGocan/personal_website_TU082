function border_colour() {
    profile_picture = document.getElementById("profile-picture");
    toggler = true;

    if(profile_picture.classList.contains("border-animation-orange")) {
        profile_picture.classList.remove("border-animation-orange");
        profile_picture.classList.add("border-animation-gray");


    } else {
        profile_picture.classList.add("border-animation-orange");
        profile_picture.classList.remove("border-animation-gray");
    }

}

