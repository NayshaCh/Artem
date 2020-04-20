export const sendDataToRegisterDoctor = (data) => {

    var config ={
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }
    fetch ('http://localhost:8080/v1/doctors', config)
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(jsonData => console.log(jsonData));
}

export const sendDataToRegisterPatient = (data) => {

    var config ={
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }
    fetch ('http://localhost:8080/v1/patients', config)
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(jsonData => console.log(jsonData));
}

export const findDoctors = (query, callback) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(this.readyState === 4 && this.status ===200){
            const response = JSON.parse(this.responseText);
            if(response){  
                callback(response);
            }   
        }
    }
        request.open('GET','http://localhost:8080/v1/doctors/' + query,true);
        request.send();
}