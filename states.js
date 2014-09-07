var states = [
    ["Alabama","Montgomery","Birmingham","Mobile","Tuscaloosa"],
    ["Alaska","Juneau","Anchorage","Nome","Point Barrow"],
    ["Arizona","Phoenix","Tucson","Flagstaff"],
    ["Arkansas","Little Rock","Texarkana","Hot Springs","Fayetteville"],
    ["California","Sacramento","San Francisco","Los Angeles","San Jose"],
    ["Colorado","Denver","Colorado Springs","Fort Collins"],
    ["Connecticut","Hartford"],
    ["Delaware","Dover"],
    ["Florida","Tallahassee","Jacksonville","Miami","Tampa"],
    ["Georgia","Atlanta","Macon","Savannah"],
    ["Hawaii","Honolulu","Hilo","Maui","Kauai"],
    ["Idaho","Boise"],
    ["Illinois","Springfield","Chicago","Champagne"],
    ["Indiana","Indianapolis","Evansville","Lafayette"],
    ["Iowa","Des Moines","Ames"],
    ["Kansas","Topeka","Kansas City"],
    ["Kentucky","Frankfort","Louisville","Lexington","Covington"],
    ["Louisiana","Baton Rouge","New Orleans"],
    ["Maine","Augusta","Portland","Bangor"],
    ["Maryland","Annapolis","Baltimore","Ocean City","Hagerstown"],
    ["Massachusetts","Boston","Worcester"],
    ["Michigan","Lansing","Detroit"],
    ["Minnesota","St. Paul","Minneapolis"],
    ["Mississippi","Jackson"],
    ["Missouri","Jefferson City","St. Louis"],
    ["Montana","Helena"],
    ["Nebraska","Lincoln"],
    ["Nevada","Carson City","Las Vegas","Reno"],
    ["New Hampshire","Concord"],
    ["New Jersey","Trenton","Jersey City","Atlantic City"],
    ["New Mexico","Santa Fe","Albuquerque"],
    ["New York","Albany","New York City","Buffalo","Rochester"],
    ["North Carolina","Raleigh","Charlotte","Durham","Asheville"],
    ["North Dakota","Bismarck","Fargo","Grand Forks"],
    ["Ohio","Columbus","Cleveland","Cincinnati"],
    ["Oklahoma","Oklahoma City","Tulsa"],
    ["Oregon","Salem","Portland"],
    ["Pennsylvania","Harrisburg","Philadelphia","Pittsburg","Allentown"],
    ["Rhode Island","Providence","Pawtucket"],
    ["South Carolina","Columbia","Charleston"],
    ["South Dakota","Pierre"],
    ["Tennessee","Nashville","Knoxville","Memphis"],
    ["Texas","Austin","Houston","Dallas","San Antonio"],
    ["Utah","Salt Lake City","Provo"],
    ["Vermont","Montpelier"],
    ["Virginia","Richmond","Norfolk","Virginia Beach"],
    ["Washington","Olympia","Seattle","Tacoma"],
    ["West Virginia","Charleston","Morgantown","Huntsville"],
    ["Wisconsin","Madison","Milwaukee"],
    ["Wyoming","Cheyenne","Casper","Laramie"]
];

for (var i=0; i<states.length; i++) {
    questions.push("What's the capital of "+states[i][0]+"?");
    answers.push(states[i][1]);
}

for (var i=0; i<states.length; i++) {
    questions.push("Which state has the capital "+states[i][1]+"?");
    answers.push(states[i][0]);
}

for (var i=0; i<states.length; i++) {
    var state = states[i];
    for (var j=2; j<state.length; j++) {
        questions.push("Which state is "+states[i][j]+" in?");
        answers.push(states[i][0]);
    }
}


questions.push("What is the largest state by area?");
answers.push("Alaska");

questions.push("What is the second largest state by area?");
answers.push("Texas");

questions.push("What is the third largest state by area?");
answers.push("California");

questions.push("What is the fourth largest state by area?");
answers.push("Montana");
