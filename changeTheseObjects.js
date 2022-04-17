function closeThisObject(objectId) {
    document.getElementById(objectId).style.display = "none"
}

function openThisObject(objectName) {
    document.getElementById(objectName).style.display = "block"
}

function changeThisObject(objectTitle) {
    if (document.getElementById(objectTitle).style.display === "block") {
        document.getElementById(objectTitle).style.display = "none";
    }

    else if (document.getElementById(objectTitle).style.display = "none") {
        document.getElementById(objectTitle).style.display = "block";
    }
}