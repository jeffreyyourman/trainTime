var trainData = new Firebase('https://traintime-rcp.firebaseio.com/');

//this is the buttons for adding the train times
$('#addTrainButton').on('click', function(){

    var trainName = $('#trainNameInput').val().trim();
    var destinationInput = $('#destinationInput').val().trim();
    var timeInput = $('#timeInput').val().trim();
    var frequencyInput = $('#frequencyInput').val().trim();


    //creates local "temporary" object for holding train data
    var newTrain = {
      name: trainName,
      destination: destinationInput,
      time: timeInput,
      frequency: frequencyInput
    }

    trainData.push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.frequency);

    alert('Train successfully added');

    $('#trainNameInput').val('');
    $('#destinationInput').val('');
    $('#timeInput').val('');
    $('#frequencyInput').val('');

    //prevents moving to new page
    return false;
});
// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
trainData.on('child_added', function(childSnapshot, prevChildKey){
    console.log(childSnapshot.val());

    //store everything into a variable
    var trainName = childSnapshot.val().name;
    var destinationInput = childSnapshot.val().destination;
    var timeInput = childSnapshot.val().time;
    var frequencyInput = childSnapshot.val().frequency;

    // Employee Info
    console.log(trainName);
    console.log(destinationInput);
    console.log(timeInput);
    console.log(frequencyInput);

    //prettify the train destination
    var trainFrequencyPretty = moment();
    trainFrequencyPretty = moment(timeInput).format('hh:mm');
    console.log(trainFrequencyPretty);
    var nextArrival = moment().diff(moment.unix(frequencyInput, 'HH:mm'),"minutes");
    console.log(nextArrival); 
    var minutesAway = frequencyInput * nextArrival;

    $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destinationInput + "</td><td>" + frequencyInput + "</td><td>"  + nextArrival + "</td><td>" + minutesAway + "</td></tr>");








})