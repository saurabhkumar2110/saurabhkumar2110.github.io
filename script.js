var a = prompt("Enter UserName");
var b = prompt("Enter password");
if (a == "Manan" && b == "Manan") {
    window.location.href = "combined.html";
} else {
    alert("invalid details");
    window.location.href = "index.html";
}
