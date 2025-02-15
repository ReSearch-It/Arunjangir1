document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded Successfully");
});

function openGmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var mailtoLink = "mailto:theresearchit@gmail.com"
        + "?subject=New Inquiry from " + encodeURIComponent(name)
        + "&body=Full Name: " + encodeURIComponent(name) + "%0A"
        + "Email: " + encodeURIComponent(email) + "%0A"
        + "Message: " + encodeURIComponent(message);

    window.location.href = mailtoLink;
}

<script>
    function showServices() {
        var serviceSection = document.getElementById("services-section");
        if (serviceSection.style.display === "none" || serviceSection.style.display === "") {
            serviceSection.style.display = "block";
        } else {
            serviceSection.style.display = "none";
        }
    }
</script>

function showContact() {
    document.getElementById("contact-section").style.display = "block";
}

function hideContact() {
    document.getElementById("contact-section").style.display = "none";
}

