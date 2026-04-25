function sendMessage(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("تم إرسال الرسالة بنجاح يا " + name);

    // تفريغ الفورم
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
