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

employee.on('child_added', function(childSnapshot, prevChildKey){
    console.log(childSnapshot.val());
})