let userRole="admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLever = "Limited access granted";
} else {
    accessLevel = "No access granted"    ;
}

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessae = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system";
}

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("Access Level: ", accessLevel);
console.log("User message: ", userMessage);
console.log("User Category: ", userCategory);
console.log("Authentication Status: ", authenticationStatus);