var a = prompt("Enter UserName");
var b = prompt("Enter password");
if (a == "S" && b == "S") {
    window.location.href = "combined.html";
} else {
    alert("invalid details");
    window.location.href = "index.html";
}
